"use client";
import { Raleway } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`relative w-full py-12 ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="mt-20 max-w-3xl mx-auto px-4 text-center">
        <h1
          className="text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: "#191D20" }}
        >
          <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
            Conoce el Valor
          </span>{" "}
          Real de tu Propiedad
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative w-32 h-14 bg-gray-200 rounded flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400" />
            {/* Aquí irá la imagen cuando esté disponible */}
            {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
          </div>
          <h2 className="text-xl md:text-2xl" style={{ color: "#191D20" }}>
            En Minutos y Gratis
          </h2>
          <div className="relative w-32 h-14 bg-gray-200 rounded flex items-center justify-center">
            {/* Aquí irá la imagen cuando esté disponible */}
            {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <p className="text-sm md:text-base mb-8" style={{ color: "#191D20" }}>
          Utiliza nuestra tecnología de IA para obtener una valoración precisa y
          correcta con los mejores agentes inmobiliarios
        </p>

        <div className="flex justify-center mb-8">
          <Link href="/valorar">
            <button
              className="flex items-center gap-2 btn btn-outline bg-white hover:bg-gray-50 px-6 py-3 rounded-lg transition-all"
              style={{
                color: "#191D20",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            >
              Valorar mi casa
              <ArrowForwardIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>

        <div className="relative w-full h-[50vh] bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Aquí irá la imagen cuando esté disponible */}
          {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
          <ImageIcon className="w-20 h-20 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
