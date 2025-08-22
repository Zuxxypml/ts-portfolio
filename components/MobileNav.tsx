"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function MenuIcon(props: any) {
  return <CiMenuFries {...props} />;
}

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-6 pt-16 pb-8 px-6 md:hidden w-4/5 max-w-xs bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 shadow-lg"
        style={{
          maxHeight: "calc(100dvh - env(safe-area-inset-bottom, 0px))",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav className="flex flex-col gap-4 text-lg font-medium">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white rounded",
                  pathname === link.href
                    ? "text-black dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="flex flex-col gap-2 mt-8">
          <a
            href="/Basit_Adebisi_CV.pdf"
            download
            className="text-sm underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white rounded"
          >
            Download CV
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
