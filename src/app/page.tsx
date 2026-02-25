"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./globals.css";

const artworks = [
  { src: "/Images/Golden-Table.jpg", title: "The Golden Table" },
  { src: "/Images/Nanny.jpg", title: "Nanny" },
  { src: "/Images/Anansi-and-Brer-Tiger.jpg", title: "Anansi and Brer Tiger" },
  { src: "/Images/River-Mumma.jpg", title: "River Mumma" },
  { src: "/Images/Rolling-Calf.jpg", title: "Rolling Calf" },
];

const carouselImages = [
  "/Images/Me.jpg",
  "/Images/The-Star.jpg",
  "/Images/The-Sun.jpg",
  "/Images/Dreams-Fall-Flat.jpg",
  "/Images/Beef-Patty.jpg",
  "/Images/Eve-Fed-Adam-and-It-Was-So.jpg",
  "/Images/Ackee.jpg",
  "/Images/Memorobilia.jpg",
  "/Images/Every-Things-Gucci.jpg",
  "/Images/Still-Life.jpg",
];

export default function App() {
  const autoScrollRef = useRef<HTMLDivElement | null>(null);
  const prevWorksRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barriecito&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-white text-[#111827] flex justify-center items-start py-6 sm:py-10 px-4">
        <div className="w-full max-w-6xl">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 border text-center shadow-md rounded-2xl"
          >
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              FOLKS and TALES
            </h1>

            <p className="text-sm sm:text-base mt-4 font-light text-black mb-5 leading-relaxed text-center">
              This exhibition reimagines Caribbean folklore working with materials 
              like wood, yarn, plaster, and paper. Each piece embodies the tactile, 
              layered nature of oral storytelling.
            </p>
          </motion.div>

          {/* Artist Statement */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-8 bg-white p-6 sm:p-8 border rounded-2xl shadow-md w-full transition duration-300"
          >
            <h2
              className="text-xl sm:text-2xl font-semibold mb-3 text-black text-center"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              ARTIST STATEMENT
            </h2>

            <p className="text-sm sm:text-base text-black mb-5 leading-relaxed text-center">
              My work is driven by a need to preserve lost cultural conversations,
              folk wisdom, and spiritual undertones that too often go unrecorded.
              Art has become my way of carrying cultural memory forward.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-center">
              <p className="text-sm sm:text-base text-black m-0">
                Interested in Hosting This Show?
              </p>
              <a
                href="mailto:socsart@gmail.com?subject=Exhibit Inquiry"
                className="bg-black text-white px-5 py-2 text-sm rounded hover:bg-green-900 transition duration-200 inline-block w-fit"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Featured Works Carousel */}
          <div className="mt-12 w-full">
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-5 text-center text-black"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              Folks and Tales - Featured Works
            </h2>

            <div
              ref={autoScrollRef}
              className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 scroll-smooth black-scrollbar"
            >
              {artworks.map((art, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="min-w-[180px] sm:min-w-[280px] lg:min-w-[380px] bg-white border rounded-2xl shadow-lg p-4 flex-shrink-0"
                >
                  {/* White Framed Image Container */}
                  <div className="relative w-full aspect-[4/5] bg-white rounded-xl border border-gray-300 flex items-center justify-center p-6">
                    <Image
                      src={art.src}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 180px, (max-width: 1024px) 280px, 380px"
                      className="object-contain"
                      priority={i === 0}
                    />
                  </div>

                  <p
                    className="text-base sm:text-lg font-medium mt-4 text-black text-center"
                    style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
                  >
                    {art.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portfolio Highlights */}
          {/* <div className="mt-16">
            <h3
              className="text-lg font-semibold mb-4 text-center"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              Portfolio Highlights
            </h3>

            <div
              ref={prevWorksRef}
              className="overflow-x-auto black-scrollbar flex space-x-4 pb-4 scroll-smooth"
            >
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className="relative h-[240px] w-[320px] flex-shrink-0 overflow-hidden rounded-lg border border-gray-300"
                >
                  <Image
                    src={img}
                    alt={`Previous work ${i + 1}`}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Scrollbar styles */}
        <style jsx>{`
          .black-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .black-scrollbar::-webkit-scrollbar-thumb {
            background: black;
            border-radius: 10px;
          }
          .black-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .black-scrollbar {
            scrollbar-color: black transparent;
            scrollbar-width: thin;
          }
        `}</style>
      </div>
    </>
  );
}