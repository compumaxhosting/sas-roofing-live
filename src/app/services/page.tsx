import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import OurServicesPage from "@/components/OurServicesPage";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  const mvalue = [0, 0, 0];
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Services"}
        imageSrc={"/page-bgImage/roofing-service.jpg"}
      />
      <OurServicesPage margin={mvalue} />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
