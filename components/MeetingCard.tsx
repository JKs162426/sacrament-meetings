import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/meetings/${meeting.id}`}>
      <div className="bg-white border border-[#031926] text-[#031926] p-4 rounded shadow mb-4 hover:bg-[#f4e9cd] transition-colors cursor-pointer">
        <h2 className="text-lg font-bold mb-1">{formattedDate}</h2>
        <p className="text-sm capitalize text-gray-600">
          Type: {meeting.meetingType}
        </p>
        <p className="text-sm mt-1">
          Opening Hymn: {meeting.openingHymn.title}
        </p>
        <p className="text-sm">
          Speakers: {meeting.speakers.map((s) => s.name).join(", ")}
        </p>
      </div>
    </Link>
  );
}
