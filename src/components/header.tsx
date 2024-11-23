"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

const Links = [
  { href: "/#about", label: "About" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#guidelines", label: "Guidelines" },
  { href: "/#awards", label: "Awards" },
  { href: "/#team", label: "Team" },
];

const PastProceedings = [
  {
    href: "/past-proceedings/eru-2023",
    label: "ERU 2023",
  },
  {
    href: "http://dl.lib.uom.lk/handle/123/16657/browse?value=ERU+Symposium+2021&type=conference",
    label: "ERU 2021",
  },
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
            {/* <Link
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
              target="_blank"
              className="text-center"
            >
              <Button className="lg:hidden">Submit</Button>
            </Link> */}
            <SheetTrigger className="lg:hidden" asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent className="bg-neutral-50 flex items-center justify-center z-[999]">
            <nav className="flex flex-col gap-6 w-full">
              {Links.map((link) => (
                <Link key={link.label} href={link.href} className="py-4">
                  <p className="text-2xl font-semibold text-center text-stone-600 hover:text-stone-700">
                    {link.label}
                  </p>
                </Link>
              ))}
              <div className="flex flex-col gap-4 w-full">
                {/* <Button>
                  <Link
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
                    className="text-center"
                    target="_blank"
                  >
                    Submit extended abstract
                  </Link>
                </Button> */}
                <Separator />
                <p className="text-center text-sm text-primary font-semibold">
                  Past Proceedings
                </p>
                <div className="flex flex-col justify-center gap-6 items-center">
                  {PastProceedings.map((component) => (
                    <Link
                      key={component.label}
                      href={component.href}
                      className="font-semibold"
                    >
                      {component.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden flex-row lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hover:bg-transparent">
                <NavigationMenuTrigger className="text-md font-semibold bg-transparent hover:bg-transparent">
                  Past proceedings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {PastProceedings.map((component) => (
                      <ListItem
                        key={component.label}
                        title={component.label}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* <Link
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FERUS2024"
            target="_blank"
            className="text-center"
          >
            <Button>Submit extended abstract</Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
