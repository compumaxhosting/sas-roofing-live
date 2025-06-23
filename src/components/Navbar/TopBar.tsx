"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaHome } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="bg-[#003269] text-white px-6 text-[15px] h-[52px] font-bevietnam"
      role="banner"
    >
      <div className="flex justify-between items-center h-full">
        {/* Decorative shape left side */}
        <div
          className="w-[436px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          aria-hidden="true"
        />

        <div className="flex items-center h-full">
          {/* Desktop Contact Info */}
          <address className="not-italic hidden xl:flex items-center pr-4 divide-x divide-white/30">
            <Link
              href="tel:+13472216549"
              className="flex items-center text-base gap-2 pr-4 hover:text-[#e63a27] transition-colors"
              aria-label="Call us at (347) 221-6549"
            >
              <FaPhoneAlt className="text-[#e63a27]" aria-hidden="true" />
              <span>(347) 221-6549</span>
            </Link>
            <Link
              href="mailto:sascon09@yahoo.com"
              className="flex items-center text-base gap-2 px-4 hover:text-[#e63a27] transition-colors"
              aria-label="Email sascon09@yahoo.com"
            >
              <FaEnvelope className="text-[#e63a27]" aria-hidden="true" />
              <span>
                <span className="sr-only">Email address: </span>
                sascon09@yahoo.com
              </span>
            </Link>
            <Link
              href="mailto:amzadh78@gmail.com"
              className="flex items-center text-base gap-2 pl-4 hover:text-[#e63a27] transition-colors"
              aria-label="Email amzadh78@gmail.com"
            >
              <FaEnvelope className="text-[#e63a27]" aria-hidden="true" />
              <span>
                <span className="sr-only">Email address: </span>
                amzadh78@gmail.com
              </span>
            </Link>
          </address>

          {/* Mobile Social Icons */}
          <div className="flex items-center pl-4 text-white text-base">
            <span className="mr-3" aria-hidden="true">
              Follow On:
            </span>
            <div className="flex items-center divide-x divide-white/30">
              <Link
                href="https://www.facebook.com/sasroofingwaterproofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page (opens in new tab)"
                className="pr-3 text-[#e63a27] transition-colors"
              >
                <FaFacebookF aria-hidden="true" />
              </Link>
              <Link
                href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Houzz page (opens in new tab)"
                className="pl-3 text-[#e63a27] transition-colors"
              >
                <FaHome aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
