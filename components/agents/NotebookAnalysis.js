import { useState } from "react";

export default function HousePricePredictor() {
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
    <div className="max-w-4xl mx-auto">
      <div>
        <div>Predictor de Precios de Casas</div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Habitaciones</label>
              <input
                type="number"
                name="habitaciones"
                value={inputs.habitaciones}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                min="1"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Baños</label>
              <input
                type="number"
                name="banos"
                value={inputs.banos}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                min="1"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Metros Cuadrados</label>
              <input
                type="number"
                name="metros"
                value={inputs.metros}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                min="1"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ubicación</label>
              <select
                name="location"
                value={inputs.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="">Seleccionar...</option>
                <option value="1">Norte</option>
                <option value="2">Sur</option>
                <option value="3">Centro</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Calculando..." : "Predecir Precio"}
          </button>
        </form>

        {error && (
          //   <Alert variant="destructive" className="mt-4">
          //     <AlertTitle>Error</AlertTitle>
          //     <AlertDescription>{error}</AlertDescription>
          //   </Alert>
          <div className="mt-4 text-red-600">{error}</div>
        )}

        {prediction && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">
              Resultados de la Predicción
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">Precio Estimado</p>
                <p className="text-xl font-bold">
                  {formatPrice(prediction.predicted_price)}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600">Precio Mínimo</p>
                <p className="text-xl font-bold">
                  {formatPrice(prediction.min_price)}
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-600">Precio Máximo</p>
                <p className="text-xl font-bold">
                  {formatPrice(prediction.max_price)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
