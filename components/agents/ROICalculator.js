import CheckIcon from "@mui/icons-material/Check";

const ROICalculator = () => {
  return (
    <section className="w-full py-24" style={{ backgroundColor: "#FBF7EE" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl p-12 shadow-md"
          style={{ backgroundColor: "#191D20" }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna izquierda */}
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-4">Calcula tu ROI</h2>
              <p className="text-gray-300 mb-8">
                Con PropTech IA, nuestros agentes ven un retorno promedio de
                inversión del 300% en los primeros 3 meses
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5" style={{ color: "#EEDFA1" }} />
                  <span className="text-gray-200">
                    Promedio de 15 leads cualificados por mes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5" style={{ color: "#EEDFA1" }} />
                  <span className="text-gray-200">
                    Tasa de conversión del 20%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5" style={{ color: "#EEDFA1" }} />
                  <span className="text-gray-200">
                    Comisión promedio de $80,000 MXN
                  </span>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="bg-white p-8 rounded-xl">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "#191D20" }}
              >
                ROI Estimado Mensual
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inversión Mensual</span>
                  <span className="font-semibold" style={{ color: "#191D20" }}>
                    $1,999 MXN
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ingresos Estimados</span>
                  <span className="font-semibold" style={{ color: "#191D20" }}>
                    $240,000 MXN
                  </span>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI</span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#191D20" }}
                    >
                      11,900%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
