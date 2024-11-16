import { Raleway } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`relative w-full py-12 ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm mb-2" style={{ color: "#191D20" }}>
          Subtítulo
        </p>

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
          <button
            className="flex items-center rounded border bg-white"
            style={{ color: "#191D20" }}
          >
            <div className="bg-gray-100 p-2 rounded-l">
              <ArrowForwardIcon className="w-4 h-4 text-gray-500" />
            </div>
            <div className="px-4  rounded-r">Valorar mi casa</div>
          </button>
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
