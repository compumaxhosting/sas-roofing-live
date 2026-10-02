import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";
import { BlogsOverview } from "@/components/BlogOverview";
import HowToChooseWaterproofingcontractornyc from "@/components/HowToChooseWaterproofingcontractornyc";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BlogsOverview />
      <HowToChooseWaterproofingcontractornyc />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
