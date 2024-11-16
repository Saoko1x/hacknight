import { Raleway } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const raleway = Raleway({ subsets: ["latin"] });

const HeroAgents = () => {
  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base mb-4" style={{ color: "#191D20" }}>
          Plataforma Premium para Agentes Inmobiliarios
        </p>

        <h1
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{ color: "#191D20" }}
        >
          Potencia tu Negocio con{" "}
          <div className="mt-2">
            <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
              Leads Cualificados por IA
            </span>
          </div>
        </h1>

        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: "#191D20" }}
        >
          Accede a propietarios verificados con intención real de venta y
          aumenta tus conversiones hasta un 300%
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            className="flex items-center rounded border bg-white px-8 py-3 hover:bg-gray-50 transition-colors"
            style={{ color: "#191D20" }}
          >
            Comenzar Prueba Gratuita
          </button>

          <button
            className="flex items-center rounded border border-gray-300 px-8 py-3 hover:bg-white/50 transition-colors"
            style={{ backgroundColor: "transparent", color: "#191D20" }}
          >
            Ver Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAgents;
