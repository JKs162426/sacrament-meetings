import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <Image
        src="/chapel.jpg"
        alt="Chapel building for sacrament meeting"
        width={800}
        height={400}
        className="rounded shadow mx-auto mb-6"
        priority
      />
      <h1 className="text-3xl font-bold mb-3">Sacrament Meeting Program</h1>
      <p className="text-gray-600 mb-6">
        Manage and view your ward&apos;s weekly meetings.
      </p>
      <Link
        href="/meetings"
        className="bg-[#031926] text-[#f4e9cd] px-6 py-2 rounded hover:opacity-90 transition"
      >
        View Meetings
      </Link>
    </div>
  );
}
