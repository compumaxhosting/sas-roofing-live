import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import WaterProofingChallenges from "@/components/WaterproofingChallenges";
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
      <WaterProofingChallenges />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
