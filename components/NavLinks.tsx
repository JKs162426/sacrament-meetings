"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 px-6 py-2 bg-[#f4e9cd] border-b border-[#031926]">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium hover:underline ${
            pathname === link.href
              ? "text-[#031926] font-bold underline"
              : "text-[#444]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
