import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";
import ContactPage from "@/components/ContactPage";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Contact"}
        imageSrc={"/page-bgImage/roofing-service.jpg"}
      />
     <ContactPage />
     <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
