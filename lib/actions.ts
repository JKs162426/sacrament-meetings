"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  addMeeting as createMeetingInDB,
  updateMeeting as updateMeetingInDB,
  deleteMeeting as deleteMeetingInDB,
} from "@/lib/meeting-db";

const meetingSchema = z.object({
  date: z.string().refine((d) => !isNaN(Date.parse(d)), {
    message: "Invalid date format",
  }),

  meetingType: z.enum(["testimony", "regular", "stake", "general"]),
  presiding: z.string().min(1, { message: "Presiding is required" }),
  conducting: z.string().min(1, { message: "Conducting is required" }),
  announcements: z.array(z.string()).optional(),
  openingHymn: z.object({
    number: z.number().int().positive(),
    title: z.string().min(1, { message: "Opening hymn title is required" }),
  }),
  openingPrayer: z.string().min(1, { message: "Opening prayer is required" }),
  wardBusiness: z.array(
    z.object({
      description: z.string().min(1, { message: "Description is required" }),
    })
  ),
  stakeBusiness: z.boolean(),
  sacramentHymn: z.object({
    number: z.number().int().positive(),
    title: z.string().min(1, { message: "Sacrament hymn title is required" }),
  }),
  speakers: z.array(
    z.object({
      name: z.string().min(1, { message: "Speaker name is required" }),
      topic: z.string().min(1, { message: "Speaker topic is required" }),
      type: z.enum(["speaker", "musical-number"]),
    })
  ),
  closingHymn: z.object({
    number: z.number().int().positive(),
    title: z.string().min(1, { message: "Closing hymn title is required" }),
  }),
  closingPrayer: z.string().min(1, { message: "Closing prayer is required" }),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingPrayer?: string[];
    closingPrayer?: string[];
    openingHymn?: { number?: string[]; title?: string[] };
    sacramentHymn?: { number?: string[]; title?: string[] };
    closingHymn?: { number?: string[]; title?: string[] };
    announcements?: string[];
    wardBusiness?: { description?: string[] }[];
    stakeBusiness?: string[];
    speakers?: { name?: string[]; topic?: string[]; type?: string[] }[];
  };
  message?: string | null;
};

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = {
    date: formData.get("date") as string,
    meetingType: formData.get("meetingType") as string,
    presiding: formData.get("presiding") as string,
    conducting: formData.get("conducting") as string,
    openingPrayer: formData.get("openingPrayer") as string,
    closingPrayer: formData.get("closingPrayer") as string,
    stakeBusiness: formData.get("stakeBusiness") === "on",
    openingHymn: {
      number: Number(formData.get("openingHymn.number")),
      title: formData.get("openingHymn.title") as string,
    },
    sacramentHymn: {
      number: Number(formData.get("sacramentHymn.number")),
      title: formData.get("sacramentHymn.title") as string,
    },
    closingHymn: {
      number: Number(formData.get("closingHymn.number")),
      title: formData.get("closingHymn.title") as string,
    },
    announcements: [],
    wardBusiness: [],
    speakers: [],
  };

  const validatedData = meetingSchema.safeParse(raw);
  if (!validatedData.success) {
    const errors = validatedData.error.flatten().fieldErrors;
    return {
      ...prevState,
      errors: validatedData.error.flatten().fieldErrors as State["errors"],
    };
  }
  try {
    await createMeetingInDB(validatedData.data);
    revalidatePath("/meetings");
    redirect("/meetings");
  } catch (error) {
    console.error("Error creating meeting:", error);
    return {
      ...prevState,
      message: "Database Error: Failed to create meeting.",
    };
  }
}

export async function editMeeting(
  id: number,
  prevState: State,
  formData: FormData
) {
  const validatedData = meetingSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedData.success) {
    const errors = validatedData.error.flatten().fieldErrors;
    return { ...prevState, errors };
  }
  try {
    await updateMeetingInDB(id, validatedData.data);
    revalidatePath("/meetings");
    redirect(`/meetings/${id}`);
  } catch (error) {
    console.error("Error updating meeting:", error);
    return {
      ...prevState,
      errors: { general: "An unexpected error occurred." },
    };
  }
}

export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingInDB(id);
    revalidatePath("/meetings");
    redirect("/meetings");
  } catch (error) {
    console.error("Error deleting meeting:", error);
    return {
      errors: { general: "An unexpected error occurred." },
    };
  }
}
