"use client";
import { useState, useEffect } from "react";
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import IntraDayCard from "@/components/IntradayCard/IntradayCard"; // Mengubah nama komponen
import { useInView } from "react-intersection-observer";

export default function Portfolio() {
  const [background, setBackground] = useState("#4caf50");
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground((prevColor) =>
        prevColor === "#4caf50" ? "#66bb6a" : "#4caf50"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <div className="mt-8 pb-8">
        {" "}
        {/* Tambahkan kelas mt-8 di sini */}
        <header>
          <h1>Intraday Card</h1>
          <p>
            Data Yang diambil dari API
            https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo
          </p>
        </header>
        <IntraDayCard symbol={""} />
      </div>
      <Footer />
    </div>
  );
}
