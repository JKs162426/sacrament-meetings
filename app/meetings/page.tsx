import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
  const res = await fetch("http://localhost:3000/api/meetings", {
    cache: "no-store",
  });

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Sacrament Meetings</h1>
      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))
      )}
    </div>
  );
}
