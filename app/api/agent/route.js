import { NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(request) {
  try {
    console.log("Received prediction request:", request.body);
    const { location, metros, habitaciones, banos } = await request.json();
    console.log("Received prediction request:", {
      location,
      metros,
      habitaciones,
      banos,
    });

    // Validate inputs
    if (!location || !metros || !habitaciones || !banos) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Convert location number to string name
    const locationMap = {
      1: "Norte",
      2: "Sur",
      3: "Centro",
    };

    const locationName = locationMap[location];
    if (!locationName) {
      return NextResponse.json({ error: "Invalid location" }, { status: 400 });
    }

    // Spawn Python process for prediction
    const pythonProcess = spawn("python", [
      path.join(process.cwd(), "utils", "model.py"),
      locationName,
      metros.toString(),
      habitaciones.toString(),
      banos.toString(),
      path.join(process.cwd(), "utils", "modelo_casas.pkl"),
    ]);

    return new Promise((resolve, reject) => {
      let outputData = "";
      let errorData = "";

      pythonProcess.stdout.on("data", (data) => {
        outputData += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
        errorData += data.toString();
      });

      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          reject(
            NextResponse.json(
              { error: errorData || "Prediction failed" },
              { status: 500 }
            )
          );
        } else {
          try {
            const prediction = JSON.parse(outputData);
            resolve(NextResponse.json({ prediction }));
          } catch (e) {
            reject(
              NextResponse.json(
                { error: "Error parsing prediction results" },
                { status: 500 }
              )
            );
          }
        }
      });
    });
  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: "Error processing prediction" },
      { status: 500 }
    );
  }
}
