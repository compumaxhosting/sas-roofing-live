import BackToTop from "@/components/BackToTop";
import { BlogsOverview } from "@/components/BlogOverview";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import MasonryContractorBrooklynNyExpertServices from "@/components/MasonryContractorBrooklynNyExpertServices";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
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
      <MasonryContractorBrooklynNyExpertServices />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
