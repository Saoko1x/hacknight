import CalculateIcon from "@mui/icons-material/Calculate";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Process = () => {
  const steps = [
    {
      icon: <CalculateIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Captación",
      description:
        "Atraemos propietarios interesados en vender mediante marketing digital especializado",
    },
    {
      icon: <FilterAltIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Cualificación",
      description:
        "La IA analiza y califica cada lead según su probabilidad de conversión",
    },
    {
      icon: (
        <AssignmentIndIcon className="w-6 h-6" style={{ color: "#191D20" }} />
      ),
      title: "Asignación",
      description:
        "Distribución inteligente basada en tu zona y especialización",
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Conversión",
      description:
        "Seguimiento y soporte para maximizar el cierre de operaciones",
    },
  ];

  return (
    <section className="w-full py-24" style={{ backgroundColor: "#FBF7EE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
            Proceso de Generación de Leads
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Así es como convertimos visitantes en oportunidades de venta
            cualificadas
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EEDFA1" }}
              >
                {step.icon}
              </div>

              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[60%] w-full h-[2px]"
                  style={{ backgroundColor: "#EEDFA1" }}
                />
              )}

              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#191D20" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
