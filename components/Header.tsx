"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Menu,
  X,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Centers", href: "/centers" },
    { label: "Tender", href: "/tender" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">
                JSYC Platform
              </h1>

              <p className="text-xs text-slate-500">
                Educational Management System
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:text-blue-700 hover:bg-slate-100"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

        

            <Link
  href="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">
              <LogIn size={18} />
  Login
</Link>

            <Link
  href="/register"
  className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition"
>
  <UserPlus size={18} />
  Register
</Link>

            {/* <button className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
              <UserPlus size={18} />
              Register 
            </button> */}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden border-t bg-white">

          <div className="px-6 py-5 space-y-2">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className={`block px-4 py-3 rounded-lg font-medium
                  ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t pt-4 mt-4 flex flex-col gap-3">

              <button className="border border-slate-300 rounded-lg py-3 font-medium">
                Login
              </button>

              <button className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-lg py-3 font-medium">
                Register
              </button>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}