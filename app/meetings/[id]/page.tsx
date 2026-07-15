import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MeetingDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (res.status === 400 || res.status === 404) return notFound();

  const meeting: SacramentMeeting = await res.json();

  return <MeetingDetail meeting={meeting} />;
}
