"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Clock3,
  Phone,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

const navItems = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Introduction", href: "/about" },
      { label: "Mission & Vision", href: "/about#vision" },
      { label: "Department Structure", href: "/department-structure" },
      { label: "Administrative Desk", href: "/administrative" },
    ],
  },

  { label: "Centres", href: "/centers" },

  { label: "Notice", href: "/notice" },

  {
    label: "News & Events",
    href: "/news",
    submenu: [
      { label: "News", href: "/news" },
      { label: "Image Gallery", href: "/gallery" },
      { label: "Circular", href: "/circular" },
      { label: "Events", href: "/events" },
    ],
  },

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
<div className="relative z-50 h-[78px] bg-[#007a2f] rounded-[18px] overflow-visible flex items-center">
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
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">

  {navItems.map((item) => (
    <div
      key={item.label}
      className="relative group"
    >
      <Link
        href={item.href}
        className="
          text-white
          text-[15px]
          font-medium
          hover:text-[#f3d86b]
          transition
          flex
          items-center
          gap-1
          py-6
        "
      >
        {item.label}

        {item.submenu && (
          <ChevronDown size={15} />
        )}
      </Link>

      {item.submenu && (
        <div
          className="
            absolute
            left-0
            top-full
            min-w-[220px]
            bg-[#007a2f]
            rounded-xl
            overflow-hidden
            shadow-2xl
            border-2
            border-[#ecf1aa]
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-200
            z-50
          "
        >
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="
                block
                px-4
                py-3
                text-white
                text-sm
                hover:bg-[#dfc354]
                hover:text-black
                border-b
                border-white/10
                last:border-none 
              "
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
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
  <div key={item.label}>
    <Link
      href={item.href}
      className="text-white py-2 block"
      onClick={() => setMobileMenu(false)}
    >
      {item.label}
    </Link>

    {item.submenu && (
      <div className="ml-4 border-l border-white/20 pl-3">
        {item.submenu.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="block text-white/80 text-sm py-1"
            onClick={() => setMobileMenu(false)}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    )}
  </div>
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