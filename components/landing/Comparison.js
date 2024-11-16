import { Raleway } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const raleway = Raleway({ subsets: ["latin"] });

const ComparisonRow = ({ characteristic, traditional, proptech, isEven }) => (
  <div
    className={`grid grid-cols-3 py-4 ${
      isEven ? "bg-gray-50/5" : "bg-transparent"
    }`}
  >
    <div className="px-4 text-sm text-gray-600">{characteristic}</div>
    <div className="px-4 text-sm text-center text-gray-600">
      {typeof traditional === "boolean" ? (
        traditional ? (
          <CheckIcon className="text-green-500 mx-auto" />
        ) : (
          <CloseIcon className="text-red-500 mx-auto" />
        )
      ) : (
        traditional
      )}
    </div>
    <div className="px-4 text-sm text-center text-gray-600">
      {typeof proptech === "boolean" ? (
        proptech ? (
          <CheckIcon className="text-green-500 mx-auto" />
        ) : (
          <CloseIcon className="text-red-500 mx-auto" />
        )
      ) : (
        proptech
      )}
    </div>
  </div>
);

const Comparison = () => {
  const comparisonData = [
    {
      characteristic: "Tiempo de Valoración",
      traditional: "3-5 días",
      proptech: "Instantáneo",
    },
    {
      characteristic: "Precisión",
      traditional: "Variable",
      proptech: "95% promedio",
    },
    {
      characteristic: "Costo",
      traditional: "$2,000 - $5,000",
      proptech: "Gratuito",
    },
    {
      characteristic: "Datos Analizados",
      traditional: "10-20 propiedades",
      proptech: "15,000+ propiedades",
    },
    {
      characteristic: "Actualización",
      traditional: "Manual",
      proptech: "Tiempo real",
    },
    {
      characteristic: "Reportes Detallados",
      traditional: true,
      proptech: true,
    },
    {
      characteristic: "Análisis de Mercado",
      traditional: false,
      proptech: true,
    },
    {
      characteristic: "Predicciones de Valor",
      traditional: false,
      proptech: true,
    },
  ];

  return (
    <section className={`w-full py-24 ${raleway.className} bg-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
            100 Casas vs. 1 Valuación Tradicional
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre por qué somos la opción más eficiente
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 py-4 font-semibold" style={{ color: "#191D20" }}>
            <div className="px-4">Característica</div>
            <div className="px-4 text-center">Valuación Tradicional</div>
            <div className="px-4 text-center">100 Casas</div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <ComparisonRow
              key={item.characteristic}
              characteristic={item.characteristic}
              traditional={item.traditional}
              proptech={item.proptech}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
