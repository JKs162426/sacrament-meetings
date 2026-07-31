import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meeting-db";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";
import { deleteMeeting } from "@/lib/meeting-db";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: Props) {
  const { id } = await params;

  const meeting: SacramentMeeting | null = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return (
    <>
      <MeetingDetail meeting={meeting!} />
      <form action={deleteMeeting.bind(null, meeting!.id)}>
        <button
          type="submit"
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete Meeting
        </button>
      </form>
    </>
  );
}
