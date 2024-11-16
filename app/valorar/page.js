"use client";
import { useState } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function ValorarPage() {
  const [inputs, setInputs] = useState({
    habitaciones: "",
    banos: "",
    metros: "",
    location: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log({ inputs });

    try {
      console.log("Sending prediction request:", inputs);
      const response = await fetch(
        "https://modelo-fudwh7dsfqd4azax.canadacentral-01.azurewebsites.net/api/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.error || "Error al procesar los datos");
      }

      setPrediction(data.prediction);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  return (
    <div
      className={`min-h-screen p-8 pt-24 ${raleway.className}`}
      style={{
        backgroundColor: "#FBF7EE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23EDE9E0' stroke-width='0.15'%3E%3Cpath d='M0 20h100 M0 40h100 M0 60h100 M0 80h100' /%3E%3Cpath d='M20 0v100 M40 0v100 M60 0v100 M80 0v100' /%3E%3Ccircle cx='20' cy='20' r='2' fill='none' /%3E%3Ccircle cx='80' cy='80' r='2' fill='none' /%3E%3Cpath d='M30 30h40v40H30z' fill='none' /%3E%3Cpath d='M25 25l10 10 M75 25l-10 10 M25 75l10 -10 M75 75l-10 -10' fill='none' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "400px 400px",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
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
              Simulador
            </span>{" "}
            de Avalúo Inmobiliario
          </h1>
          <p
            className="text-lg md:text-xl mb-16 max-w-2xl mx-auto"
            style={{ color: "#191D20" }}
          >
            Para estimar el valor del inmueble necesitamos algunos datos
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Card Left */}
          <div className="card bg-white p-8 rounded-lg shadow-sm border border-gray-100 w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Superficie Construida */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="text-base font-medium"
                    style={{ color: "#191D20" }}
                  >
                    Superficie construida en m²
                  </span>
                </label>
                <input
                  type="number"
                  name="metros"
                  value={inputs.metros}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 bg-white transition-colors"
                  style={{ color: "#191D20" }}
                  placeholder="Ej: 100"
                  required
                />
              </div>

              {/* Número de Cuartos */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="text-base font-medium"
                    style={{ color: "#191D20" }}
                  >
                    Número de cuartos
                  </span>
                </label>
                <input
                  type="number"
                  name="habitaciones"
                  value={inputs.habitaciones}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 bg-white transition-colors"
                  style={{ color: "#191D20" }}
                  placeholder="Ej: 3"
                  required
                />
              </div>

              {/* Número de Baños */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="text-base font-medium"
                    style={{ color: "#191D20" }}
                  >
                    Número de baños
                  </span>
                </label>
                <input
                  type="number"
                  name="banos"
                  value={inputs.banos}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 bg-white transition-colors"
                  style={{ color: "#191D20" }}
                  placeholder="Ej: 2"
                  required
                />
              </div>

              {/* Zona */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="text-base font-medium"
                    style={{ color: "#191D20" }}
                  >
                    Zona de ubicación
                  </span>
                </label>
                <select
                  name="location"
                  value={inputs.location}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 bg-white transition-colors"
                  style={{ color: "#191D20" }}
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option value="1">Norte</option>
                  <option value="2">Sur</option>
                  <option value="3">Centro</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 rounded-lg font-medium transition-colors hover:bg-[#E5D590]"
                style={{
                  backgroundColor: "#EEDFA1",
                  color: "#191D20",
                }}
                disabled={loading}
              >
                {loading ? "Calculando..." : "Calcular Valor"}
              </button>
            </form>
          </div>

          {/* Card Right - Results */}
          <div className="w-full md:w-1/2">
            {prediction && !loading && (
              <div className="card bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#191D20" }}
                >
                  Resultados de la Predicción
                </h2>
                <div className="space-y-4">
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "#EEDFA1" }}
                  >
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "#191D20" }}
                    >
                      Precio Predicho
                    </p>
                    <p
                      className="text-2xl font-semibold"
                      style={{ color: "#191D20" }}
                    >
                      {formatPrice(prediction.predicted_price)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p
                        className="text-sm font-medium mb-1"
                        style={{ color: "#191D20" }}
                      >
                        Precio Mínimo
                      </p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "#191D20" }}
                      >
                        {formatPrice(prediction.min_price)}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p
                        className="text-sm font-medium mb-1"
                        style={{ color: "#191D20" }}
                      >
                        Precio Máximo
                      </p>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "#191D20" }}
                      >
                        {formatPrice(prediction.max_price)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {loading && (
              <div className="card bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <p style={{ color: "#191D20" }}>Calculando resultados...</p>
              </div>
            )}
            {error && (
              <div className="card bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
