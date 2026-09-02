import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
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
      <BreadCrum2 breadcrumbItems={[]} pageTitle="BLOGS" imageSrc="/page-bgImage/roofing-service.jpg" />
      <BlogsOverview />
      <ReliableMasonryContractorBrooklyn />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
