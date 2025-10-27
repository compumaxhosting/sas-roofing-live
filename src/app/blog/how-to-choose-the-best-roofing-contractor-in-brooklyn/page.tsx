import BackToTop from "@/components/BackToTop";
import BestRoofing from "@/components/BestRoofing";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
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
        pageTitle={"BLOGS"}
        imageSrc={"/page-bgImage/roofing-service.jpg"}
      />
      <BestRoofing />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
