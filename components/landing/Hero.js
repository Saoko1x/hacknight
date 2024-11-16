"use client";
import { Raleway } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full py-16 md:py-24 overflow-hidden ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="mt-8 md:mt-12 max-w-5xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "#191D20" }}
          >
            <span 
              className="inline-block mb-2 md:mb-4"
              style={{ 
                backgroundColor: "#EEDFA1", 
                padding: "0.2em 0.5em",
                borderRadius: "12px" 
              }}
            >
              Conoce el Valor
            </span>
            <br />
            <span className="inline-block">Real de tu Propiedad</span>
          </h1>

          <h2 
            className="text-2xl md:text-3xl font-medium mt-8 mb-10" 
            style={{ color: "#191D20" }}
          >
            En Minutos y <span className="text-emerald-600">Gratis</span>
          </h2>

          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-600"
          >
            Utiliza nuestra tecnología de IA para obtener una valoración precisa y
            correcta con los mejores agentes inmobiliarios
          </p>

          <div className="flex justify-center mb-16">
            <Link href="/valorar">
              <button
                className="group flex items-center gap-2 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg transition-all"
                style={{
                  color: "#191D20",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="font-medium">Valorar mi casa</span>
                <ArrowForwardIcon 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                />
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full flex justify-center">
          <motion.div 
            className="relative h-[60vh] md:h-[70vh]"
            style={{
              scale,
              opacity,
              width,
              borderRadius,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <ImageIcon className="w-24 h-24 text-gray-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
