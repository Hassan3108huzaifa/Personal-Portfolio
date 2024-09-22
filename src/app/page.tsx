'use client'
import { Element } from 'react-scroll';
import { HeaderComponent } from "@/components/components-header";
import AboutMeComponent from "@/components/components-about-me";
import Skills from "@/components/components-skills";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Apply smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Reset scroll behavior on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="smooth-scroll">
      <HeaderComponent />
      <Element name="about"><AboutMeComponent /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="portfolio"><Portfolio /></Element>
      <Element name="contact"><ContactForm /></Element>
      <Footer />
    </div>
  );
}