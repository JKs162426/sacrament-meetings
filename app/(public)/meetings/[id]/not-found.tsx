import Link from "next/link";
export default function NotFound() {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">Meeting Not Found</h1>
      <p className="mt-2 text-gray-600">
        The meeting you are looking for does not exist.
      </p>
      <Link
        href="/meetings"
        className="mt-4 inline-block border px-4 py-2 rounded"
      >
        Back to Meetings
      </Link>
    </div>
  );
}
