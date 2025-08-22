"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { path: "/", name: "Home" },
  { path: "/resume", name: "Resume" },
  { path: "/work", name: "Work" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo  */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Basit A<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav  */}
        <nav className="flex flex-col items-center justify-center gap-6 mt-4">
          {links.map((link) => (
            <SheetClose asChild key={link.path}>
              <Link
                href={link.path}
                className={`text-xl w-full text-center py-3 rounded-lg capitalize focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:bg-accent/10 hover:text-accent transition-all duration-200 ${
                  pathname === link.path
                    ? "text-accent border-b-2 border-accent bg-accent/10"
                    : "text-white"
                }`}
                tabIndex={0}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
