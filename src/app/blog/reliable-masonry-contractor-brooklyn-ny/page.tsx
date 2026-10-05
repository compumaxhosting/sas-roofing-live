import BackToTop from "@/components/BackToTop";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import { BlogsOverview } from "@/components/BlogOverview";
import ReliableMasonryContractorBrooklyn from "@/components/ReliableMasonryContractorBrooklyn";

export default function ReliableMasonryContractorBrooklynPage() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BlogsOverview />
      <ReliableMasonryContractorBrooklyn />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
