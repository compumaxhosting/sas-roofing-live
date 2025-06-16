import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import OurTestimonial from "@/components/OurTestimonial";
import ServiceAndFaqSection from "@/components/ServiceAndFaqSection";
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
        pageTitle={"TESTIMONIALS"}
        imageSrc={"/page-bgImage/testimonal_bg_img.png"}
      />
      <OurTestimonial />
      <ServiceAndFaqSection />
      <CustomerReviews />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
