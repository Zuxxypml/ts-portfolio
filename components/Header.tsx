"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white bg-primary">
      <div className="container mx-auto justify-between flex items-center">
        {/* My name as logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Basit A<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop Navigation  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/*Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
