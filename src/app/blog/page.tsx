import BackToTop from "@/components/BackToTop";
import BlogSlideNew from "@/components/BlogSlideNew";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const slides = [
  {
    title:
      "Trusted Roofing Contractors Serving Brooklyn, Manhattan, Queens & The Bronx",
    shortTitle: "Licensed Roofers Proudly Serving Brooklyn to The Bronx",
    description: `Dependable roofing experts providing quality installations, repairs, and waterproofing solutions across Brooklyn, Manhattan, Queens, and The Bronx...`,
    date: "25 JUN",
    image: "/blog/roofing_blog.jpg",
    link: "top-roofing-contractors-brooklyn-manhattan-queens-bronx-sas-roofing-nyc",
    initialLikes: 50,
  },
  {
    title:
      "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
    shortTitle: "Certified Roofing Contractors You Can Trust",
    description: `Hiring certified roofing contractors in Brooklyn ensures quality, safety, and long-lasting protection for your property, making it a truly smart investment...`,
    date: "10 JUN",
    image: "/blog/roofing-contractors.jpg",
    link: "the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    initialLikes: 100,
  },
  {
    title:
      "How This NYC Waterproofing Contractor is Revolutionizing Home Protection",
    shortTitle: "NYC Waterproofing Innovator",
    description: `Discover how a leading NYC waterproofing contractor is transforming home protection with innovative techniques and comprehensive services, ensuring long-lasting safety and dryness for properties across the city...`,
    date: "29 May",
    image: "/blog/blogImage.jpg",
    link: "How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    initialLikes: 140,
  },
  {
    title:
      "Why SAS Roofing and Waterproofing Is Brooklyn's Most Trusted Roofing Expert?",
    shortTitle: "Trusted Roofing Expert",
    description: `Trusted by New Yorkers for over 30 years, SAS Roofing &
    Waterproofing is known for dependable service, certified
    expertise, and lasting results...`,
    date: "13 JUNE",
    image: "/blog/roofing.jpg",
    link: "Why-SAS-Roofing-and-Waterproofing-Is-Brooklyns-Most-Trusted-Roofing-Expert",
    initialLikes: 120,
  },
  {
    title: "Replacing Shingle Roof And Installing Skylight",
    shortTitle: "ROOF LEAKS",
    description: `Upgrade your home with a new shingle roof and natural light! Learn how replacing worn shingles and adding a skylight can improve energy efficiency, enhance interior brightness, and boost curb appeal...`,
    date: "13 JUNE",
    image: "/blog/leakage_roof.jpg",
    link: "/", // This should redirect to home
    initialLikes: 106,
  },
  {
    title: "Foundation Wall Repair And Waterproofing",
    shortTitle: "MAINTENANCE",
    description: `Protect your property from water damage and structural issues. Discover how professional foundation wall repair and waterproofing solutions can strengthen your home’s base and prevent costly future repairs...`,
    date: "13 JUNE",
    image: "/blog/waterproofing.png",
    link: "/",
    initialLikes: 170,
  },
  {
    title: "How To Weather Proof Your Roof This Winter?",
    shortTitle: "TIPS & TRICKS",
    description: `Prepare your roof for harsh winter conditions with essential weatherproofing tips. Learn how to prevent leaks, ice dams, and damage to keep your home warm, dry, and protected all season long...`,
    date: "11 JUNE",
    image: "/blog/services1.jpg",
    link: "/",
    initialLikes: 180,
  },
  {
    title:
      "Expert Masonry Services Across Brooklyn, Manhattan & Queens: Quality You Can Trust",
    shortTitle: "THE MASON’S MARK",
    description: `Discover top-tier masonry services tailored to the unique architecture of Brooklyn, Manhattan, and Queens. From brickwork and stone facades to brownstone restoration, our skilled masons deliver durable, elegant results for every project....`,
    date: "11 JUNE",
    image: "/blog/masonry_services.png",
    link: "/",
    initialLikes: 111,
  },
  {
    title: "Roofing Excellence Across New York’s Core Boroughs",
    shortTitle: "ROOFTOP RELIABILITY",
    description: `Protect your home with trusted roofing solutions tailored for New York City's unique climate. From repairs to full replacements, our expert team delivers durability, precision, and peace of mind in every project....`,
    date: "11 JUNE",
    image: "/blog/roofing1.jpg",
    link: "/",
    initialLikes: 122,
  },
];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 px-5 py-5 lg:max-w-4xl xl:max-w-7xl xl:gap-8 mx-auto">
        {slides.map((slide, index) => (
          <BlogSlideNew key={index} slide={slide} />
        ))}
      </div>
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
