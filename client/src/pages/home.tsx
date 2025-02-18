import { useState } from "react";
import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import Services from "@/components/home/services";
import Banners from "@/components/home/banners";
import AboutUs from "@/components/home/about-us";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";
import PartnerAndCareers from "@/components/home/partner-careers";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("insurance");

  return (
    <>
      <Hero />
      <Categories 
        selected={selectedCategory} 
        onSelect={setSelectedCategory} 
      />
      <Services category={selectedCategory} />
      <Banners />
      <AboutUs />
      <PartnerAndCareers />
      <Testimonials />
      <CTA />
    </>
  );
}