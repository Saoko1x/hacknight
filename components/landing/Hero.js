"use client";
import { Raleway } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import ImageIcon from "@mui/icons-material/Image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoadingCircle } from "@/components/forms/fields";
import config from "@/config";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: config.auth.callbackUrl });
    } catch (error) {
      console.error("Signin error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative w-full py-12 ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="mt-20 max-w-3xl mx-auto px-4 text-center">
        <h1
          className="text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: "#191D20" }}
        >
          <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
            Conoce el Valor
          </span>{" "}
          Real de tu Propiedad
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative w-32 h-14 bg-gray-200 rounded flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-gray-400" />
            {/* Aquí irá la imagen cuando esté disponible */}
            {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
          </div>
          <h2 className="text-xl md:text-2xl" style={{ color: "#191D20" }}>
            En Minutos y Gratis
          </h2>
          <div className="relative w-32 h-14 bg-gray-200 rounded flex items-center justify-center">
            {/* Aquí irá la imagen cuando esté disponible */}
            {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <p className="text-sm md:text-base mb-8" style={{ color: "#191D20" }}>
          Utiliza nuestra tecnología de IA para obtener una valoración precisa y
          correcta con los mejores agentes inmobiliarios
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleGoogleSignin}
            disabled={isLoading}
            className="flex items-center gap-2 btn btn-outline bg-white"
            style={{ color: "#191D20" }}
          >
            {isLoading ? (
              <LoadingCircle />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  className="w-5 h-5"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  />
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </svg>
                Iniciar con Google
              </>
            )}
          </button>
        </div>

        <div className="relative w-full h-[50vh] bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Aquí irá la imagen cuando esté disponible */}
          {/* <Image
              src="/path-to-image.jpg"
              alt="Decorative image"
              fill
              className="object-cover rounded"
            /> */}
          <ImageIcon className="w-20 h-20 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
