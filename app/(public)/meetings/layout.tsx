import Link from "next/link";
import { signOut } from "@/auth";

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
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button
            type="submit"
            className="text-sm font-medium hover:underline text-red-600"
          >
            Sign Out
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
