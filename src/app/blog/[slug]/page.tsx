import { blogPosts } from "@/data/data";
import { notFound } from "next/navigation";
import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export default async function BlogPost(props: Props) {
  const { slug } = await props.params; // ✅ await params first

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const ContentComponent = post.content;

  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle="BLOG"
        imageSrc="/breadcrumb-19.jpg"
      />
      <ContentComponent />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
}
