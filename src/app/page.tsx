"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const artworks = [
  {
    src: "/Images/Anansi-and-Brer-Tiger.jpg",
    title: "Anansi and Brer Tiger",
  },
  {
    src: "/Images/Golden-Table.jpg",
    title: "The Golden Table",
  },
  {
    src: "/Images/Nanny.jpg",
    title: "Nanny",
  },
  {
    src: "/Images/Mumma.jpg",
    title: "Mumma",
  },
];

export default function Home() {
  const autoScrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && autoScrollRef.current) {
        autoScrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 p-6">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-6 text-black"
          style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
        >
          Folks & Tales
        </h1>
        <p
          className="text-md md:text-xl text-center text-black mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A colorful celebration of Caribbean folklore through digital art and
          community storytelling.
        </p>

        {/* Carousel Section */}
        <div className="mt-12">
          <h2
            className="text-2xl font-semibold mb-4 text-center text-black"
            style={{ fontFamily: "'Barriecito', cursive, system-ui" }}
          >
            Featured Artworks
          </h2>

          <div
            ref={autoScrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-auto space-x-4 px-1 scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {artworks.map((art, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-72 bg-gradient-to-b from-yellow-100 to-yellow-200 border rounded-2xl shadow-lg p-4 transition duration-300"
              >
                <Image
                  src={art.src}
                  alt={art.title}
                  width={288}
                  height={192}
                  className="rounded-xl border border-gray-200 object-cover"
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
    </main>
  );
}
