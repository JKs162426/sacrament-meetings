import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meeting-db";

function getMostRecentSunday(): string {
  const today = new Date();
  const day = today.getDay();
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - day);
  return sunday.toISOString().split("T")[0];
}

export default async function CurrentMeetingPage() {
  const sundayDate = getMostRecentSunday();
  const meetings = await getMeetings(sundayDate);

  if (meetings.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No meeting found for this Sunday ({sundayDate}).</p>
      </div>
    );
  }

  redirect(`/meetings/${meetings[0].id}`);
}
