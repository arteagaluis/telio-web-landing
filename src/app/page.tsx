"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portafolio from "@/components/Portafolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <Portafolio />
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  );
}
