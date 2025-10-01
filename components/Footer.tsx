"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants";
import { SocialLinks } from "@/types";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks: SocialLinks[] = [
    {
      platform: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="w-4 h-4" />,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container">
        <div className="flex flex-cols justify-between md:flex-row gap-8 lg:gap-20">
          {/* First Section - Logo, Description & Social Media */}
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center space-x-2">
              <Image src="/logo.svg" alt="Logo" width={250} height={250} />
            </Link>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
              CODMA est une organisation dédiée à l&apos;agrément des médecins
              étrangers en France, offrant expertise et soutien tout au long du
              processus.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-primary/10 hover:scale-105  rounded flex items-center justify-center transition-colors duration-300 group"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <div className="text-primary/70 group-hover:text-red-500 duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Second Section - Page Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Liens utiles
            </h3>
            <ul className="flex flex-col gap-2">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary hover:underline text-sm transition-all duration-300 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Section - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline text-sm transition-colors duration-300"
                >
                  +1234567890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@codma.org"
                  className="text-primary hover:underline text-sm transition-colors duration-300"
                >
                  contact@codma.org
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://codma.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm transition-colors duration-300"
                >
                  www.codma.org
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary text-sm">
                  123 Rue de la Santé, 75000 Alger, Algerie
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary text-sm">
              © {currentYear} CODMA. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-primary hover:underline text-sm transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/terms"
                className="text-primary hover:underline text-sm transition-colors duration-300"
              >
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
