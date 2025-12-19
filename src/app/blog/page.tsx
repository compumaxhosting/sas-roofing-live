import BackToTop from "@/components/BackToTop";
import { BlogsOverview } from "@/components/BlogOverview";
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
      "Full-Spectrum Waterproofing Services in NYC | Residential & Commercial Solutions",
    shortTitle: "Waterproofing Services NYC",
    description:
      "Water damage can quickly compromise the safety and value of your property. From Brooklyn brownstones to Manhattan high-rises....",
    date: "19 DEC",
    image: "/blog/residential-blog.jpg",
    link: "residential-commercial-waterproofing-nyc",
  },
  {
    title: "10 Signs You Need Roofing Services Immediately",
    shortTitle: "Signs You Need Roofing",
    description:
      "If you live in Brooklyn (11201, 11205, 11206, 11215, 11216, 11217, 11218, 11221, 11231, 11233, 11238) or Manhattan (10004, 10005, 10006, 10007, 10012, 10013, 10014, 10038, 10280)....",
    date: "16 DEC",
    image: "/blog/signs-roofing.jpeg",
    link: "signs-you-need-roofing-services-right-now",
  },
  {
    title: "What Makes a Roofing Contractor Trustworthy in NYC?",
    shortTitle: "Best Waterproofing Contractors in New York ",
    description:
      "The best roofing contractors in Brooklyn are those who understand local building codes, typical weather damage, and the unique roofing styles found in brownstones and mixed-use buildings.",
    date: "4 DEC",
    image: "/blog/roofing-new-blog.jpg",
    link: "roofing-contractors-brooklyn-queens-manhattan",
  },
  {
    title:
      "Top Waterproofing Challenges in Brooklyn, Manhattan & Queens (Expert Solutions for NYC Homeowners)",
    shortTitle:
      "Most common waterproofing challenges NYC homeowners face — and how to fix them.",
    description:
      "Discover the most common waterproofing problems faced by Brooklyn, Manhattan, and Queens homeowners. Learn expert solutions for foundation cracks, roof leaks...",
    date: "27 OCT",
    image: "/blog/waterproofing.webp",
    link: "nyc-waterproofing-challenges-and-solutions",
  },
  {
    title:
      "How to Choose the Best Roofing Company in Brooklyn Without Overpaying",
    shortTitle: "Find Trusted Brooklyn Roofers Without Overpaying.",
    description: `When it comes to protecting your home or business, your roof plays the most important role. It shields everything beneath it from harsh weather, enhances curb appeal, and adds long-term value to your property.`,
    date: "27 OCT",
    image: "/blog/roofing-blog.jpeg",
    link: "best-roofing-company-in-brooklyn",
  },
  {
    title:
      "Best Waterproofing Contractors in New York — Protect Your Property from Water Damage",
    shortTitle:
      "Trusted waterproofing contractors across NYC — Brooklyn, Manhattan, Queens, and The Bronx.",
    description: `Water damage is a costly issue for New Yorkers. Learn how SAS Roofing & Waterproofing protects homes and buildings with expert basement, foundation, wall, and roof waterproofing solutions across NYC.`,
    date: "04 NOV",
    image: "/blog/blogImage.jpg",
    link: "best-waterproofing-contractors-in-new-york-protect-your-property-from-water-damage",
  },
  {
    title: "How to Choose the Best Roofing Contractor in Brooklyn",
    shortTitle: "Protect your NYC property with expert roofing solutions.",
    description: `A complete guide on finding the best roofing contractor in Brooklyn. Learn what to look for, the right questions to ask, red flags to avoid, and why SAS Roofing & Waterproofing is NYC’s trusted choice for roofing, waterproofing, and masonry services.`,
    date: "27 OCT",
    image: "/blog/roofing-contractors.jpg",
    link: "how-to-choose-the-best-roofing-contractor-in-brooklyn",
  },
  {
    title: "How Waterproofing Can Save Your NYC Property from Costly Damage",
    shortTitle: "Shield your NYC property from costly water damage.",
    description: `Reliable waterproofing specialists protecting NYC properties from leaks, mold, and structural damage across Brooklyn, Manhattan, Queens, and The Bronx...`,
    date: "11 JULY",
    image: "/blog/waterproofing.webp",
    link: "how-waterproofing-can-save-your-nyc-property-from-costly-damage",
  },
  {
    title:
      "Trusted Roofing Contractors Serving Brooklyn, Manhattan, Queens & The Bronx",
    shortTitle: "Licensed Roofers Proudly Serving Brooklyn to The Bronx",
    description: `Dependable roofing experts providing quality installations, repairs, and waterproofing solutions across Brooklyn, Manhattan, Queens, and The Bronx...`,
    date: "25 JUN",
    image: "/blog/roofing_blog.jpg",
    link: "top-roofing-contractors-brooklyn-manhattan-queens-bronx-sas-roofing-nyc",
    initialLikes: 150,
  },
  {
    title:
      "The Satisfaction Factor: Why Certified Roofing Contractors in Brooklyn Are a Smart Choice",
    shortTitle: "Certified Roofing Contractors You Can Trust",
    description: `Hiring certified roofing contractors in Brooklyn ensures quality, safety, and long-lasting protection for your property, making it a truly smart investment...`,
    date: "10 JUN",
    image: "/blog/roofing-contractors.jpg",
    link: "the-satisfaction-factor-why-certified-roofing-contractors-in-brooklyn-are-a-smart-choice",
    initialLikes: 200,
  },
  {
    title:
      "How This NYC Waterproofing Contractor is Revolutionizing Home Protection",
    shortTitle: "NYC Waterproofing Innovator",
    description: `Discover how a leading NYC waterproofing contractor is transforming home protection with innovative techniques and comprehensive services, ensuring long-lasting safety and dryness for properties across the city...`,
    date: "29 May",
    image: "/blog/blogImage.jpg",
    link: "How-This-NYC-Waterproofing-Contractor-is-Revolutionizing-Home-Protection",
    initialLikes: 260,
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
    initialLikes: 220,
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
      <BlogsOverview />

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
