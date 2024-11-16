"use client";
import { useState } from "react";

export default function ValorarPage() {
  const [formData, setFormData] = useState({
    superficieTotal: "",
    superficieConstruida: "",
    numCuartos: "",
    numBanos: "",
    zona: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí irá la lógica para enviar los datos
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#FBF7EE" }}>
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

        <div className="card bg-white shadow-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Superficie Total */}
            <div className="form-control">
              <label className="label">
                <span
                  className="label-text font-medium"
                  style={{ color: "#191D20" }}
                >
                  Superficie total en m²
                </span>
              </label>
              <input
                type="number"
                name="superficieTotal"
                value={formData.superficieTotal}
                onChange={handleChange}
                className="input input-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                style={{
                  border: "1px solid #E5E7EB",
                  color: "#191D20",
                  backgroundColor: "white",
                }}
                placeholder="Ej: 120"
                required
              />
            </div>

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
                name="superficieConstruida"
                value={formData.superficieConstruida}
                onChange={handleChange}
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
                name="numCuartos"
                value={formData.numCuartos}
                onChange={handleChange}
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
                name="numBanos"
                value={formData.numBanos}
                onChange={handleChange}
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
                name="zona"
                value={formData.zona}
                onChange={handleChange}
                className="select select-bordered w-full bg-white focus:outline-none focus:border-gray-400"
                style={{
                  border: "1px solid #E5E7EB",
                  color: "#191D20",
                  backgroundColor: "white",
                }}
                required
              >
                <option value="">Selecciona una zona</option>
                <option value="norte">Norte</option>
                <option value="centro">Centro</option>
                <option value="sur">Sur</option>
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
      </div>
    </div>
  );
}
