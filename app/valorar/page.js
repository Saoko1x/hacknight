"use client";
import { useState } from "react";

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
    console.log(inputs);

    try {
      console.log("Sending prediction request:", inputs);
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

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
      className="min-h-screen p-8 pt-24"
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-2"
            style={{ color: "#191D20" }}
          >
            <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
              Simulador
            </span>{" "}
            de Avalúo Inmobiliario
          </h1>
          <p className="text-sm md:text-base mb-8" style={{ color: "#191D20" }}>
            Para estimar el valor del inmueble necesitamos algunos datos:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Card Left */}
          <div className="card bg-white shadow-xl p-6 w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Superficie Construida */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text font-medium"
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
                  className="input input-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                  style={{
                    border: "1px solid #E5E7EB",
                    color: "#191D20",
                    backgroundColor: "white",
                  }}
                  placeholder="Ej: 100"
                  required
                />
              </div>

              {/* Número de Cuartos */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text font-medium"
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
                  className="input input-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                  style={{
                    border: "1px solid #E5E7EB",
                    color: "#191D20",
                    backgroundColor: "white",
                  }}
                  placeholder="Ej: 3"
                  required
                />
              </div>

              {/* Número de Baños */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text font-medium"
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
                  className="input input-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                  style={{
                    border: "1px solid #E5E7EB",
                    color: "#191D20",
                    backgroundColor: "white",
                  }}
                  placeholder="Ej: 2"
                  required
                />
              </div>

              {/* Zona */}
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text font-medium"
                    style={{ color: "#191D20" }}
                  >
                    Zona de ubicación
                  </span>
                </label>
                <select
                  name="location"
                  value={inputs.location}
                  onChange={handleInputChange}
                  className="select select-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                  style={{
                    border: "1px solid #E5E7EB",
                    color: "#191D20",
                    backgroundColor: "white",
                  }}
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
                className="btn btn-primary w-full hover:bg-[#E5D590]"
                style={{
                  backgroundColor: "#EEDFA1",
                  color: "#191D20",
                  border: "none",
                  transition: "background-color 0.3s ease",
                }}
              >
                Calcular Valor
              </button>
            </form>
          </div>

          {/* Card Right */}
            {prediction && !loading && (
          <div className="card bg-white shadow-xl p-6 w-full md:w-1/2 flex justify-center items-center">
              <div className="space-y-4 text-black text-center">
                <h2
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#191D20" }}
                >
                  Resultados de la Predicción
                </h2>
                <div>
                  <span className="font-medium">Precio Máximo: </span>
                  <span>{formatPrice(prediction.max_price)}</span>
                </div>
                <div>
                  <span className="font-medium">Precio Mínimo: </span>
                  <span>{formatPrice(prediction.min_price)}</span>
                </div>
                <div>
                  <span className="font-medium">Precio Predicho: </span>
                  <span>{formatPrice(prediction.predicted_price)}</span>
                </div>
              </div>

            {/* Cargando / Error */}
            {loading && <p>Cargando...</p>}
            {error && <p className="text-red-600">{error}</p>}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
