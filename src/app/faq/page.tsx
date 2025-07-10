import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import FAQ from "@/components/faq";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"FAQ – SAS Roofing & Waterproofing"}
        imageSrc={"/page-bgImage/roofing-service.jpg"}
      />
      <FAQ />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
