import { Raleway } from "next/font/google";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const raleway = Raleway({ subsets: ["latin"] });

const Process = () => {
  return (
    <section
      className={`w-full py-20 ${raleway.className} relative overflow-hidden`}
      style={{ backgroundColor: "#191D20" }}
    >
      {/* Círculo dorado decorativo */}
      <div
        className="absolute w-[150%] h-[150%] rounded-[50%] left-1/2 -translate-x-1/2 -top-[75%]"
        style={{
          border: "1px solid rgba(238, 223, 161, 0.1)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl font-semibold text-center text-white mb-20">
          Proceso Simple y Transparente
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-16 relative">
          {/* Línea conectora en desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-gray-700" />

          {/* Paso 1 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="bg-white w-24 h-24 rounded-lg mb-6 flex items-center justify-center relative">
              <SearchIcon style={{ color: "#191D20", fontSize: "2rem" }} />
              <div
                className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium"
                style={{ backgroundColor: "#EEDFA1", color: "#191D20" }}
              >
                1
              </div>
            </div>
            <div className="bg-[#EEDFA1] px-4 py-2 rounded-md mb-4">
              <span
                className="text-sm font-medium"
                style={{ color: "#191D20" }}
              >
                Ingresa tu Dirección
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Proporciona los datos básicos de tu propiedad para comenzar
            </p>
          </div>

          {/* Flecha 1 */}
          <ArrowForwardIcon className="hidden md:block text-white z-10" />

          {/* Paso 2 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="bg-white w-24 h-24 rounded-lg mb-6 flex items-center justify-center relative">
              <HomeIcon style={{ color: "#191D20", fontSize: "2rem" }} />
              <div
                className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium"
                style={{ backgroundColor: "#EEDFA1", color: "#191D20" }}
              >
                2
              </div>
            </div>
            <div className="bg-[#EEDFA1] px-4 py-2 rounded-md mb-4">
              <span
                className="text-sm font-medium"
                style={{ color: "#191D20" }}
              >
                Obtén la Valoración
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Recibe un análisis detallado basado en datos del mercado actual
            </p>
          </div>

          {/* Flecha 2 */}
          <ArrowForwardIcon className="hidden md:block text-white z-10" />

          {/* Paso 3 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="bg-white w-24 h-24 rounded-lg mb-6 flex items-center justify-center relative">
              <PersonIcon style={{ color: "#191D20", fontSize: "2rem" }} />
              <div
                className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium"
                style={{ backgroundColor: "#EEDFA1", color: "#191D20" }}
              >
                3
              </div>
            </div>
            <div className="bg-[#EEDFA1] px-4 py-2 rounded-md mb-4">
              <span
                className="text-sm font-medium"
                style={{ color: "#191D20" }}
              >
                Conecta con Expertos
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Accede a una red de agentes inmobiliarios verificados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
