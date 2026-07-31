"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="mt-2 text-gray-600">An unexpected error occurred.</p>
      <div className="mt-4 flex gap-3 justify-center">
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
        <Link href="/meetings" className="border px-4 py-2 rounded">
          Back to Meetings
        </Link>
      </div>
    </div>
  );
}
