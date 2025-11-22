"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HubungiKami from "@/components/HubungiKami";
// import Navbar from "@/components/Navbar";
import ProdukDanLayanan from "@/components/ProdukDanLayanan";
import TentangKami from "@/components/TentangKami";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <TentangKami />
      <ProdukDanLayanan />
      <HubungiKami />
      <Footer />
    </div>
  );
}
