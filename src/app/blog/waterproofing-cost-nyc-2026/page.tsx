import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import { BlogsOverview } from "@/components/BlogOverview";
import WaterproofingCostNyc2026 from "@/components/WaterproofingCostNyc2026";

export default function WaterproofingCostNyc2026Page() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        pageTitle="BLOGS"
        imageSrc="/page-bgImage/roofing-service.jpg"
      />
      <BlogsOverview />
      <WaterproofingCostNyc2026 />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
