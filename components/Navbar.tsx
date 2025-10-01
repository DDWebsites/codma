"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur z-50 py-4 border-b">
      <div className="container mx-auto">
        {/* DESKTOP NAVIGATION BAR */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo" width={180} height={180} />
          </Link>
          <ul className="hidden md:flex items-center gap-6">
            {NavLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm lg:text-base font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="primary" className="hidden md:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </div>
        </div>
        {/* MOBILE NAVIGATION MENU */}
        {isMenuOpen && (
          <div className="mt-10 flex flex-col items-center gap-6">
            <ul className="flex flex-col items-center gap-6">
              {NavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href={link.href}
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="primary">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
