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
  const width = useTransform(scrollYProgress, [0, 1], ["98%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen ${raleway.className}`}
      style={{ 
        backgroundColor: "#FBF7EE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23EDE9E0' stroke-width='0.15'%3E%3Cpath d='M0 20h100 M0 40h100 M0 60h100 M0 80h100' /%3E%3Cpath d='M20 0v100 M40 0v100 M60 0v100 M80 0v100' /%3E%3Ccircle cx='20' cy='20' r='2' fill='none' /%3E%3Ccircle cx='80' cy='80' r='2' fill='none' /%3E%3Cpath d='M30 30h40v40H30z' fill='none' /%3E%3Cpath d='M25 25l10 10 M75 25l-10 10 M25 75l10 -10 M75 75l-10 -10' fill='none' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(251, 247, 238, 0) 0%, #FBF7EE 100%)',
        }}
      />

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="relative max-w-4xl mx-auto px-4 text-center z-20 pt-24 md:pt-32">
          <p className="text-sm md:text-base mb-6" style={{ color: "#191D20" }}>
            Valoración Inmobiliaria Inteligente
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8"
            style={{ color: "#191D20" }}
          >
            <div className="mb-4">Conoce el Valor</div>
            <div>
              <span 
                style={{ 
                  backgroundColor: "#EEDFA1", 
                  padding: "0.2em 0.5em",
                  borderRadius: "12px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",
                  lineHeight: "1.45",
                }}
              >
                Real de tu Propiedad
              </span>
            </div>
          </h1>

          <p 
            className="text-lg md:text-xl mb-16 max-w-2xl mx-auto"
            style={{ color: "#191D20" }}
          >
            Utiliza nuestra tecnología de IA para obtener una valoración precisa y
            correcta con los mejores agentes inmobiliarios
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/valorar">
              <button
                className="flex items-center rounded border bg-white px-8 py-3 hover:bg-gray-50 transition-colors"
                style={{ color: "#191D20" }}
              >
                <span className="font-medium">Valorar mi casa</span>
                <ArrowForwardIcon 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                />
              </button>
            </Link>

            <button
              className="flex items-center rounded border border-gray-300 px-8 py-3 hover:bg-white/50 transition-colors"
              style={{ backgroundColor: "transparent", color: "#191D20" }}
            >
              Ver Demo
            </button>
          </div>

          <motion.div 
            className="relative h-[80vh] md:h-[85vh] mx-auto"
            style={{
              scale,
              opacity,
              width: "98%",
              maxWidth: "100%",
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
