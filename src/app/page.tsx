"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image dari next/image
import project4 from "../../public/images/project4.png"; // Ganti dengan path gambar yang sesuai
import project5 from "../../public/images/project5.png"; // Tambahkan gambar lainnya
import project6 from "../../public/images/project6.png"; // Tambahkan gambar lainnya
import project7 from "../../public/images/project-7.png"; // Tambahkan gambar lainnya
import project8 from "../../public/images/project-8.png"; // Tambahkan gambar lainnya
import "./globals.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateRotation = (index: number, total: number) => {
    const degree = (360 / total) * index - scrollPosition * 0.2;
    const distance = 700; // Jarak antar kartu, ubah sesuai kebutuhan
    return `rotateY(${degree}deg) translateZ(${distance}px)`;
  };

  // Array gambar
  const project = [project4, project5, project6, project7, project8]; // Gambar-gambar lainnya

  return (
    <div className="w-full h-[200vh] bg-gray-900 text-white">
      {/* Sticky Wrapper */}
      <div className="sticky top-20 h-[80vh] flex items-center justify-center perspective">
        <div className="relative w-[600px] h-[400px]">
          {project.map((img, index) => (
            <div
              key={index}
              className="absolute w-[800px] h-[400px] bg-white text-black rounded-lg shadow-lg"
              style={{
                transform: calculateRotation(index, project.length),
                transition: "transform 0.2s linear",
              }}
            >
              <div className="flex items-center justify-center h-full">
                {/* Menampilkan gambar menggunakan next/image */}
                <Image
                  src={img} // Gambar yang dipetakan dari array
                  alt={`Project ${index + 1}`}
                  layout="fill" // Mengisi seluruh area div
                  objectFit="cover" // Menyesuaikan gambar ke dalam div
                  className="rounded-lg" // Menambahkan border radius
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
