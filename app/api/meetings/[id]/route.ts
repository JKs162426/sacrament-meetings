import { NextRequest, NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meeting-db";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Props) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid ID, must be a number" },
      { status: 400 }
    );
  }

  const meeting = await getMeetingById(id);

  if (!meeting) {
    return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
  }

  return NextResponse.json(meeting);
}
