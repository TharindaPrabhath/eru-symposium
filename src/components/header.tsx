"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const Links = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#guidelines", label: "Guidelines" },
  { href: "#awards", label: "Awards" },
  { href: "#team", label: "Team" },
];

function Header() {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  });

  return (
    <header
      className={`z-[999] bg-zinc-50 py-2 h-18 ${
        sticky &&
        "fixed z-[9999] left-0 right-0 top-0 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
      }`}
    >
      <div className="container flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image
            src="/logo.png"
            alt="University of Moratuwa logo"
            width={50}
            height={50}
          />
          <h1 className="text-5xl font-bold text-red-950 font-alumni-sans">
            ERU
          </h1>
        </Link>

        <nav>
          <ul className="hidden flex-row items-center gap-12 lg:flex">
            {Links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className="font-semibold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
              target="_blank"
              className="text-center"
            >
              <Button className="lg:hidden">Submit</Button>
            </Link>
            <SheetTrigger className="lg:hidden" asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent className="bg-neutral-50 flex items-center justify-center z-[999]">
            <nav className="flex flex-col gap-8 w-full">
              {Links.map((link) => (
                <Link key={link.label} href={link.href} className="py-4">
                  <p className="text-4xl font-semibold text-center text-stone-600 hover:text-stone-700">
                    {link.label}
                  </p>
                </Link>
              ))}
              <div className="flex flex-col gap-8 w-full">
                <Link href="/">
                  <p className="text-4xl font-semibold text-center text-stone-600 hover:text-stone-700">
                    Past proceedings
                  </p>
                </Link>

                <Button>
                  <Link href="/signup" className="text-center">
                    Submit extended abstract
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden flex-row lg:flex items-center gap-8">
          <Link href="/" className="font-semibold">
            Past proceedings
          </Link>
          <Link
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
            target="_blank"
            className="text-center"
          >
            <Button>Submit extended abstract</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
