import { Raleway } from "next/font/google";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const raleway = Raleway({ subsets: ["latin"] });

const Stats = () => {
  return (
    <section
      className={`w-full py-16 px-6 ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Títulos */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-semibold mb-2"
            style={{ color: "#191D20" }}
          >
            Estadísticas del Mercado
          </h2>
          <p className="text-base" style={{ color: "#191D20" }}>
            Datos actualizados del mercado inmobiliario
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <TrendingUpIcon className="text-gray-600" />
              <span className="text-sm text-gray-600">+12.5% vs 2023</span>
            </div>
            <h3 className="text-lg mb-2" style={{ color: "#191D20" }}>
              Valor promedio
            </h3>
            <div
              className="inline-block px-3 py-1 rounded"
              style={{ backgroundColor: "#EEDFA1" }}
            >
              <span
                className="text-2xl font-semibold"
                style={{ color: "#191D20" }}
              >
                $3.2M
              </span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "#191D20" }}>
              Propiedades valuadas en 2024
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <TrendingUpIcon className="text-gray-600" />
              <span className="text-sm text-gray-600">-15% vs 2023</span>
            </div>
            <h3 className="text-lg mb-2" style={{ color: "#191D20" }}>
              Tiempo promedio
            </h3>
            <div
              className="inline-block px-3 py-1 rounded"
              style={{ backgroundColor: "#EEDFA1" }}
            >
              <span
                className="text-2xl font-semibold"
                style={{ color: "#191D20" }}
              >
                45 días
              </span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "#191D20" }}>
              Para vender una propiedad
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <TrendingUpIcon className="text-gray-600" />
              <span className="text-sm text-gray-600"></span>
            </div>
            <h3 className="text-lg mb-2" style={{ color: "#191D20" }}>
              Propiedades
            </h3>
            <div
              className="inline-block px-3 py-1 rounded"
              style={{ backgroundColor: "#EEDFA1" }}
            >
              <span
                className="text-2xl font-semibold"
                style={{ color: "#191D20" }}
              >
                15,000+
              </span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "#191D20" }}>
              En nuestra base de datos
            </p>
          </div>
        </div>

        {/* Botón */}
        <div className="text-center">
          <button
            className="border border-gray-300 rounded px-6 py-2 bg-white"
            style={{ color: "#191D20" }}
          >
            Comenzar a cotizar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
