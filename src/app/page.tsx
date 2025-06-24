"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  "Images/Dreams-Fall-Flat.jpg",
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

  const [isHovered, setIsHovered] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (autoScrollRef.current) {
        autoScrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (isPrevHovered) return;

    const interval = setInterval(() => {
      if (prevWorksRef.current) {
        prevWorksRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPrevHovered]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barriecito&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-green-100 text-[#111827] flex justify-center items-start py-10 px-4">
        <div className="w-full max-w-6xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-yellow-100 to-yellow-200 py-20 px-6 border text-center shadow-md rounded-2xl"
          >
            <h1
              className="barriecito-regular text-6xl font-bold tracking-tight text-black"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              FOLKS and TALES
            </h1>
            <p className="text-lg mt-4 max-w-xl mx-auto font-light text-black">
              This exhibition reimagines Caribbean folklore working with materials 
              like wood, yarn, plaster, and paper, each piece embodies the tactile, 
              layered nature of oral storytelling. These stories of Anansi, 
              the shape-shifting river mermaids, and the feared Ol’ Higue are not 
              just tales but survival strategies, belief systems, and mirrors. They 
              traveled across oceans, whispered from mouth to mouth, reshaping with 
              each retelling, but never losing their roots. This exhibition is a visual 
              preservation of those voices. The work is bold, colorful, and immersive 
              meant to be felt as much as seen. It invites viewers to step into a narrative 
              world where folklore becomes a living archive, especially important at a time 
              when oral traditions risk being flattened or forgotten.

            </p>
          </motion.div>

          {/* Artist Statement (left) + Featured Works Carousel (right) */}
          <div className="mt-12 flex flex-col lg:flex-row gap-8">
            {/* Artist Statement */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-b from-yellow-100 to-yellow-200 p-6 border rounded-2xl shadow-md lg:w-1/2 transition duration-300"
            >
              <h2
                className="text-xl font-semibold mb-2 text-black"
                style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
              >
                ARTIST STATEMENT
              </h2>
              <p className="text-sm text-black mb-4">
                My work is driven by a need to preserve lost cultural conversations,
                folk wisdom, and spiritual undertones that too often go unrecorded.
                As a Jamaican-born artist living in New York for most of my life,
                I’ve lost my accent, but never my roots. That duality of being shaped
                by two places fuels much of my practice. Art has become my way of
                carrying cultural memory forward, even when the language of it begins
                to fade. The collection is still evolving with new pieces as I continue
                to explore these themes.  
              </p>
              <p className="text-sm mb-2 text-black">
                Interested in Hosting This Show?
              </p>
              <a
                href="mailto:socsart@gmail.com?subject=Exhibit Inquiry"
                className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-green-900 transition duration-200 inline-block"
              >
                Email
              </a>
            </motion.div>

            {/* Featured Works Carousel */}
            <div className="lg:w-1/2">
              <h2
                className="text-2xl font-semibold mb-4 text-center text-black"
                style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
              >
                Folks and Tales - Featured Works
              </h2>
              <div
                ref={autoScrollRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth black-scrollbar"
              >
                {artworks.map((art, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="min-w-[250px] bg-gradient-to-b from-yellow-100 to-yellow-200 border rounded-2xl shadow-lg p-4 flex-shrink-0"
                  >
                    <img
                      src={art.src}
                      alt={art.title}
                      className="h-[190px] w-[250px]object-cover rounded-xl border border-gray-200 jutify-center mx-auto"
                    />
                    <p
                      className="text-md font-medium mt-3 text-black text-center"
                      style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
                    >
                      {art.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 border mt-16 p-8 rounded-2xl shadow-md">
            <h2
              className="text-3xl font-bold text-black mb-2 text-center"
              style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
            >
              Shaneika Marson
            </h2>
            <p className="text-center text-sm text-black mb-4">
              Artist | Curator | Sculptor | Filmmaker | Fabricator | Painter
              <br />
              Email: <a href="mailto:socsart@gmail.com">socsart@gmail.com</a>
            </p>

            <div className="text-black space-y-6 text-sm leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold">Professional Summary</h3>
                <p>
                  Multidisciplinary artist with over a decade of experience creating and exhibiting work across NYC and beyond. Self-taught, with a practice spanning sculpture, painting, film, fabrication, and curatorial projects. Known for raw, evocative works that blend urban aesthetics with deeply personal themes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <p>Self-Taught Artist</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Exhibitions (Highlights)</h3>
                <ul className="list-disc list-inside">
                  <li>2021 – What It Feels Like, Brooklyn Space, NY</li>
                  <li>2021 – The Future Is Female, Spaces Dumbo, Brooklyn</li>
                  <li>2018 – Provisions, Caribbeing House, Brooklyn</li>
                  <li>2015 – KA.LEI.DO.SCOPE, Lyons Wier Gallery, NY</li>
                  <li>2014 – Haring Lives: An Artist Homage to Keith Haring, Le Salon d’Art, NY</li>
                  <li>2013 – The Art of Boxing, DUMBO Art Festival @ Gleason’s Gym, Brooklyn</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Commissions & Collaborations</h3>
                <ul className="list-disc list-inside">
                  <li>2022 – 40 Acres FilmWorks limited edition memorabilia</li>
                  <li>2020 – Public Art Mural (featured in Tribeca Film Fest winner <em>As Of Yet</em>), Brooklyn</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Media Features</h3>
                <p>
                  Caribbean Life, Creative 5pace Blog, No Pretend Blog, <em>As Of Yet</em> (2020), <em>Jon Glaser Loves Gear</em> (TruTV)
                </p>
              </div>
            </div>

            {/* Previous Works Carousel */}
            <div className="mt-10">
              <h3
                className="text-lg font-semibold mb-4 text-center"
                style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
              >
                Portfolio Highlights
              </h3>
              <div
                ref={prevWorksRef}
                onMouseEnter={() => setIsPrevHovered(true)}
                onMouseLeave={() => setIsPrevHovered(false)}
                className="overflow-x-auto black-scrollbar flex space-x-4 pb-4 scroll-smooth"
              >
                {carouselImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Previous work ${i + 1}`}
                    className="h-[190px] w-[250px] object-cover rounded-lg border border-gray-300 flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
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
