"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaHome } from "react-icons/fa";

//updated for narrator
export default function TopBar() {
  return (
    <div
      className="bg-[#003269] text-white px-6 text-[15px] h-[52px] font-bevietnam"
      role="contentinfo"
      aria-label="Company Contact and Social Media Information"
    >
      <div className="flex justify-between items-center h-full">
        {/* Decorative element - likely not needing direct accessibility attributes */}
        <div
          className="w-[436px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]"
          aria-hidden="true"
        />

        <div className="flex items-center h-full">
          <div className="hidden xl:flex items-center pr-4 divide-x divide-white/30">
            <Link
              href="tel:+13472216549"
              aria-label="Call SAS Roofing Company at 3 4 7 2 2 1 6 5 4 9" // More specific aria-label for phone number
              className="flex items-center text-base gap-2 pr-4 hover:text-[#e63a27] transition-colors"
            >
              <FaPhoneAlt
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              (347) 221-6549
            </Link>
            <Link
              href="mailto:sascon09@yahoo.com"
              aria-label="Email SAS Roofing Company at sascon09@yahoo.com" // More specific aria-label for email
              className="flex items-center text-base gap-2 px-4 hover:text-[#e63a27] transition-colors"
            >
              <FaEnvelope
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              sascon09@yahoo.com
            </Link>
            <Link
              href="mailto:amzadh78@gmail.com"
              aria-label="Email SAS Roofing Company at amzadh78@gmail.com" // More specific aria-label for email
              className="flex items-center text-base gap-2 pl-4 hover:text-[#e63a27] transition-colors"
            >
              <FaEnvelope
                className="text-[#e63a27]"
                aria-hidden="true"
                focusable="false"
              />{" "}
              {/* Icon is decorative */}
              amzadh78@gmail.com
            </Link>
          </div>

          <div className="flex items-center pl-4 text-white text-base">
            <span className="mr-3">Follow On:</span>
            <div className="flex items-center divide-x divide-white/30">
              <Link
                href="https://www.facebook.com/sasroofingwaterproofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page (opens in new tab)" // Added "opens in new tab"
                className="pr-3 text-[#e63a27] transition-colors"
              >
                <FaFacebookF aria-hidden="true" focusable="false" />{" "}
                {/* Icon is decorative */}
              </Link>
              <Link
                href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View SAS Roofing Company's Projects and Reviews on Houzz (opens in new tab)" // Added "opens in new tab"
                className="pl-3 text-[#e63a27] transition-colors"
              >
                <FaHome aria-hidden="true" focusable="false" />{" "}
                {/* Icon is decorative */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
