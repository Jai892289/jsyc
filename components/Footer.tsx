import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  JSYC Platform
                </h3>

                <p className="text-xs text-slate-400">
                  Government of Jharkhand
                </p>
              </div>

            </div>

            <p className="mt-5 text-slate-400 leading-7 text-sm">
              Empowering education and skill development across
              Jharkhand through innovative digital learning
              solutions and quality teaching.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-sky-500 flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-pink-600 flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition text-sm"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition text-sm"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition text-sm"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/centers"
                  className="hover:text-white transition text-sm"
                >
                  Centers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition text-sm"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Student Enrollment</li>
              <li>Teacher Registration</li>
              <li>Digital Learning</li>
              <li>Training Programs</li>
              <li>Online Assessment</li>
              <li>Student Support</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold mb-5">
              Contact Us
            </h4>

            <div className="space-y-4 text-slate-400 text-sm">

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0 shrink-0" />
                <span>
                  Ranchi, Jharkhand, India
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>
                  support@jsyc.in
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} JSYC Digital Platform.
              All Rights Reserved.
            </p>

            {/* <div className="flex gap-6 text-sm text-slate-400">

              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>

              <Link
                href="/faq"
                className="hover:text-white transition"
              >
                FAQ
              </Link>

            </div> */}

          </div>

        </div>

      </div>

    </footer>
  );
}