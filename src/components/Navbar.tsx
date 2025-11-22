"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Tentang Kami",
      id: "tentang",
    },
    {
      name: "Produk & Layanan",
      id: "produk",
    },
    {
      name: "Hubungi Kami",
      id: "kontak",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleScroll = (target: string) => {
    const element = document.getElementById(target);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // biar menu mobile otomatis nutup
  };

  return (
    <>
      {/* NAVBAR */}
      <nav data-aos="false" className="flex px-6 md:px-16 py-4 sticky top-0 left-0 border-b shadow-md items-center bg-white z-50">
        <Image
          className="mr-auto"
          src={"/assets/logo-utama.png"}
          alt="logo-utama"
          height={10}
          width={158}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-between gap-10 items-center text-gray-700 font-medium">
          {navItems.map((item) => (
            <p
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-green-700 hover:cursor-pointer transition"
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* MOBILE BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-lg rounded-b-2xl p-6 z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* TOP: Logo + Close */}
        <div className="flex justify-between items-center mb-6">
          <Image
            src={"/assets/logo-utama.png"}
            alt="logo-utama"
            width={140}
            height={40}
          />
          <button
            onClick={() => setOpen(false)}
            className="text-3xl font-bold text-gray-800"
          >
            ✖
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-6 text-gray-800 font-medium text-lg">
          {navItems.map((item) => (
            <p
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-green-700 hover:cursor-pointer transition"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
