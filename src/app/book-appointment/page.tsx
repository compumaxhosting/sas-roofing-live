import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";
import BookAppointmentForm from "@/components/BookAppointmentForm";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Book Appointment"}
        imageSrc={"/page-bgImage/roofing-service.jpg"}
      />
      <BookAppointmentForm />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
