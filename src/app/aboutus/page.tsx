import React from "react";
import Head from "next/head"; // Import the next/head component for modifying the <head> section
import AboutCompany from "@/components/AboutCompany";
import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";

const Page = () => {
  const mvalue = [0, 0, 0];

  return (
    <>
      {/* Add canonical link here */}
      <Head>
        <link
          rel="canonical"
          href="https://www.sasroofingwaterproofing.com/aboutus"
        />
      </Head>

      {/* Main layout components */}
      <Navbar />
      <ContactBar />
      <StickyNavbar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"About Us"}
        imageSrc={"/slider-1.jpg"}
      />
      <AboutCompany />
      <Features margin={mvalue} />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Page;
