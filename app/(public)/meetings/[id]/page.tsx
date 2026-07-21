import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meeting-db";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: Props) {
  const { id } = await params;

  const meeting: SacramentMeeting | null = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}
