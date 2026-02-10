"use client";

import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Masonry from "@/components/Masonry";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSlider from "@/components/ServicesSlider";
import StickyNavbar from "@/components/StickyNavbar";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // now correctly typed
    },
  },
};

export default function MasonryServicesPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />

      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle="Masonry Services"
        imageSrc="/page-bgImage/masonry_services.jpg"
      />

      <Masonry />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServicesSlider swiperRef={swiperRef} />
      </motion.div>

      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
