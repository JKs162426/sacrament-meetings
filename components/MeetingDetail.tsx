import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const formattedDate = new Date(meeting.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white border border-[#031926] text-[#031926] p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{formattedDate}</h2>
      <p className="text-sm capitalize text-gray-600 mb-4">
        Type: {meeting.meetingType}
      </p>

      <p className="text-sm">
        <span className="font-semibold">Presiding:</span> {meeting.presiding}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Conducting:</span> {meeting.conducting}
      </p>

      <p className="text-sm mt-3">
        <span className="font-semibold">Opening Hymn:</span>{" "}
        {meeting.openingHymn.title}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Opening Prayer:</span>{" "}
        {meeting.openingPrayer}
      </p>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <div className="mt-3">
          <p className="text-sm font-semibold">Announcements:</p>
          <ul className="list-disc list-inside ml-4">
            {meeting.announcements.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3">
        <p className="text-sm font-semibold">Ward Business:</p>
        <ul className="list-disc list-inside ml-4">
          {meeting.wardBusiness.map((item, index) => (
            <li key={index} className="text-sm">
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      {meeting.stakeBusiness && (
        <p className="text-sm mt-3 italic">Stake Business will be conducted.</p>
      )}

      <p className="text-sm mt-3">
        <span className="font-semibold">Sacrament Hymn:</span>{" "}
        {meeting.sacramentHymn.title}
      </p>

      <div className="mt-3">
        <p className="text-sm font-semibold">Speakers & Musical Numbers:</p>
        <ul className="list-disc list-inside ml-4">
          {meeting.speakers.map((speaker, index) => (
            <li key={index} className="text-sm">
              {speaker.name} — {speaker.topic} ({speaker.type})
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm mt-3">
        <span className="font-semibold">Closing Hymn:</span>{" "}
        {meeting.closingHymn.title}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Closing Prayer:</span>{" "}
        {meeting.closingPrayer}
      </p>
    </div>
  );
}
