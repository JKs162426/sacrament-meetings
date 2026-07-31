import { notFound } from "next/navigation";
import { getMeetingById } from "@/lib/meeting-db";

export default async function EditMeetingPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const meeting = await getMeetingById(Number(id));
  if (!meeting) return notFound();
  return (
    <div>
      <h1>Edit Meeting</h1>
      <p>Edit form coming soon — meeting ID: {id}</p>
    </div>
  );
}
