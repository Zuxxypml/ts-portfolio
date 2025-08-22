"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/resume", name: "Resume" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  // Highlight the active link
  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            isActive(link.path) && "text-accent border-b-2 border-accent  "
          } capitalize font-medium hover:text-accent transition-all duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
