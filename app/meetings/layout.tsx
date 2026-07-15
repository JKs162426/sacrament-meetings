import Link from "next/link";

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-4 mb-6 border-b border-[#031926] pb-3">
        <Link
          href="/meetings"
          className="text-sm font-medium hover:underline text-[#031926]"
        >
          All Meetings
        </Link>
        <Link
          href="/meetings/current"
          className="text-sm font-medium hover:underline text-[#031926]"
        >
          Current Meeting
        </Link>
      </div>
      {children}
    </div>
  );
}
