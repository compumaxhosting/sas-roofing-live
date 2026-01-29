"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BlogsOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const plans = [
    {
      name: "Terrace Waterproofing vs Roof Waterproofing",
      path: "/blog/terrace-waterproofing-vs-roof-waterproofing-difference",
    },
    {
      name: "How Long Does a Roof Last in NYC Weather Conditions",
      path: "/blog/professional-roof-inspections",
    },
    {
      name: "How to Choose the Right Waterproofing Contractor: A Complete Homeowner’s Guide",
      path: "/blog/how-to-choose-right-waterproofing-contractor",
    },
    {
      name: "How Brooklyn Weather Impacts Your Roof Throughout the Year",
      path: "/blog/brooklyn-weather-roof-damage-guide",
    },
    {
      name: "Say Goodbye to Leaks with Full-Spectrum Waterproofing in NYC",
      path: "/blog/residential-commercial-waterproofing-nyc",
    },
    {
      name: "10 Signs You Need Roofing Services Immediately",
      path: "/blog/signs-you-need-roofing-services-right-now",
    },
    {
      name: "What Makes a Roofing Contractor Trustworthy in NYC?",
      path: "/blog/roofing-contractors-brooklyn-queens-manhattan",
    },
    {
      name: "Top Waterproofing Challenges Faced by Brooklyn, Manhattan & Queens Homeowners",
      path: "/blog/nyc-waterproofing-challenges-and-solutions",
    },
    {
      name: "How to Choose the Best Roofing Company in Brooklyn Without Overpaying",
      path: "/blog/best-roofing-company-in-brooklyn",
    },
    {
      name: "Best Waterproofing Contractors in New York — Protect Your Property from Water Damage",
      path: "/blog/best-waterproofing-contractors-in-new-york-protect-your-property-from-water-damage",
    },
    {
      name: "How to Choose the Best Roofing Contractor in Brooklyn",
      path: "/blog/how-to-choose-the-best-roofing-contractor-in-brooklyn",
    },
    {
      name: "How Waterproofing Can Save Your NYC Property from Costly Damage",
      path: "/blog/how-waterproofing-can-save-your-nyc-property-from-costly-damage",
    },
    {
      name: "Trusted Roofing Contractors Serving Brooklyn, Manhattan, Queens & The Bronx",
      path: "/blog/top-roofing-contractors-brooklyn-manhattan-queens-bronx-sas-roofing-nyc",
    },
    {
      name: "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
      path: "/blog/the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    },
    {
      name: "How This NYC Waterproofing Contractor is Revolutionizing Home Protection",
      path: "/blog/How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    },
    {
      name: "Why SAS Roofing and Waterproofing Is Brooklyn's Most Trusted Roofing Expert?",
      path: "/blog/Why-SAS-Roofing-and-Waterproofing-Is-Brooklyns-Most-Trusted-Roofing-Expert",
    },
  ];
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const buttonTopPosition = isMounted
    ? pathname === "/"
      ? "top-[155px]"
      : "top-[265px]"
    : "top-[155px]";

  if (!isMounted) return null;

  return (
    <>
      {!isOpen && (
        <button
          className={`fixed right-0 ${buttonTopPosition} mt-[65px] md:mt-15 md:top-[85px] lg:top-[120px] z-40 btn_hotline`}
          onClick={() => setIsOpen(true)}
        >
          <div className="pl-5 pr-2 py-3 bg-[#e63a27]/80 border-gray-400 shadow-lg lg:shadow-xl hover:bg-[#e63a27] text-white uppercase font-semibold rounded-l-3xl">
            SELECT BLOG
          </div>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed z-20 inset-0 bg-black/80 cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed w-[100vw] z-50 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            >
              <div className="relative bg-white mt-40 border border-gray-200 rounded-xl w-full max-w-3xl shadow-2xl px-8 py-10 transition-all duration-300 ease-in-out">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-8">
                  SELECT BLOG
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-h-[350px] overflow-y-auto pr-2">
                  {plans.map((plan, index) => (
                    <Link key={index} href={plan.path}>
                      <div
                        className="group p-1 min-h-[80px] flex items-center justify-center text-center rounded-lg bg-gray-300 hover:bg-[#e63a27] shadow-sm hover:shadow-md transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-white leading-snug">
                          {plan.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
