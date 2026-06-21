import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import Container from "./Container";
import { footerLinks } from "../../constants/footer";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold">
              Consulting
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              High quality consultancy and training in
              cyber security, information security,
              data protection and business continuity.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Consultancy & Services
            </h4>

            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <Link
                    href="/about"
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item}>
                  <Link
                    href="/resources"
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-semibold">
                Subscribe to our mailing list
              </h5>

              <p className="mt-2 text-sm text-slate-400">
                Stay up to date on events and
                industry updates.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <p className="mt-3 text-xs text-slate-500">
                We care about your data in our privacy
                policy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 py-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              © Copyright 2026 Consulting Services
              Ltd. All Rights Reserved.
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm text-slate-400 md:justify-start">
              <Link
                href="/terms"
                className="hover:text-white"
              >
                Terms of Business
              </Link>

              <Link
                href="/privacy"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/cookies"
                className="hover:text-white"
              >
                Cookies
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition hover:bg-slate-800 hover:text-blue-500"
            >
              <FaLinkedinIn  size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-full p-2 transition hover:bg-slate-800 hover:text-sky-500"
            >
              <FaTwitter  size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 transition hover:bg-slate-800 hover:text-pink-500"
            >
              <FaInstagram  size={20} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 transition hover:bg-slate-800 hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}