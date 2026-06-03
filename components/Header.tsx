"use client";

import Link from "next/link";
import { Menu, X, Clock3, Phone, HelpCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Centers", href: "/centers" },
    { label: "Notice", href: "/notice" },
    { label: "News & Events", href: "/news" },
    { label: "Tender", href: "/tender" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white">

      {/* Top Bar */}
   {/* Top Bar */}
<div className="bg-[#e8dfc7] border-b border-[#d9ceb3] hidden md:block">
  <div className="max-w-[1600px] mx-auto px-6">

    <div className="h-10 flex items-center justify-between text-[13px]">

      <div className="flex items-center gap-5 text-[#205b36]">

        <div className="flex items-center gap-1">
          <Clock3 size={13} />
          <span>Mon - Sat.</span>
        </div>

        <div className="flex items-center gap-1">
          <Clock3 size={13} />
          <span>10:00 AM - 05:00 PM</span>
        </div>

        <div className="flex items-center gap-1">
          <Phone size={13} />
          <span>+91 79892******</span>
        </div>

      </div>

      <div className="flex items-center gap-2 text-[#205b36]">
        <HelpCircle size={13} />
        <span>Help</span>
        <span>|</span>
        <span>English</span>
        <span>|</span>
        <span>हिंदी</span>
      </div>

    </div>

  </div>
</div>

      {/* Main Navbar */}
<header className="w-full bg-[#ece6d3]">

      {/* Top Bar */}

      {/* Navbar */}
      <div className="p-2">
        <div className="h-[78px] bg-[#007a2f] rounded-[18px] overflow-hidden flex items-center">

          {/* Logo Section */}
          <div className="flex h-full shrink-0">

            {/* Yellow Rectangle */}
            <div className="bg-[#dfc354] w-[250px] flex items-center px-4 gap-3">
              <Image
                src="/govjhar 3.svg"
                width={100}
                height={100}
                alt="logo"
                className="w-15 h-15 object-cover"
              />

              <Image
                src="/govjhar 4.svg"
                width={100}
                height={100}
                alt="logo"
                className="w-15 h-15 object-cover"
              />

              <h1
                className="
                  text-black
                  font-black
                  text-[30px]
                  tracking-wide
                  font-serif
                "
              >
                JSYC
              </h1>
            </div>

            {/* Triangle */}
            <div
              className="w-[40px] h-full bg-[#dfc354]"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              }}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-white
                  text-[15px]
                  font-medium
                  hover:text-[#f3d86b]
                  transition
                "
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5 pr-5">

            <Link
              href="/login"
              className="
                text-white
                text-[15px]
                font-medium
                px-7
                py-3
              "
            >
              Log In
            </Link>

            <Link
              href="/register"
              className="
                bg-[#e9ca54]
                text-black
                px-7
                py-3
                rounded-xl
                text-[15px]
                font-semibold
              "
            >
              Register
            </Link>
            

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden ml-auto mr-4 text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-[#007a2f] rounded-b-xl p-4">

            <div className="flex flex-col gap-3">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                className="bg-white text-center py-3 rounded-lg"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-[#e9ca54] text-center py-3 rounded-lg"
              >
                Register
              </Link>

            </div>

          </div>
        )}
      </div>
    </header>

    </header>
  );
}