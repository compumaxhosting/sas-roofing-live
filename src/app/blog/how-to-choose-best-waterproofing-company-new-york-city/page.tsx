import BackToTop from "@/components/BackToTop";
import { BlogsOverview } from "@/components/BlogOverview";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import BestWaterproofingCompanyNYC from "@/components/BestWaterproofingCompanyNYC";

export default function HowToChooseBestWaterproofingCompanyNYCPage() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BlogsOverview />
      <BestWaterproofingCompanyNYC />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
