import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SiteMap from "@/components/SiteMap";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <SiteMap />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
