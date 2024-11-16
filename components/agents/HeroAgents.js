"use client";

import { Raleway } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Notification from "../common/Notification";
import { useEffect, useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

const notifications = [
  { text: "Nuevo Lead", icon: "🏠" },
  { text: "Nueva casa cerca", icon: "👀" },
  { text: "Precio atractivo", icon: "💰" },
];

const HeroAgents = () => {
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const createNotification = () => {
      const notif = notifications[currentIndex];
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notifications.length);
      
      return {
        ...notif,
        id: Date.now() + Math.random(),
        createdAt: Date.now()
      };
    };

    // Iniciar con una notificación después de un pequeño delay
    setTimeout(() => {
      setActiveNotifications([createNotification()]);
    }, 1000);

    // Agregar nuevas notificaciones cada 4 segundos
    const addInterval = setInterval(() => {
      setActiveNotifications(prev => {
        if (prev.length >= 1) return prev;
        return [...prev, createNotification()];
      });
    }, 4000);

    // Limpiar notificaciones viejas cada 3.5 segundos
    const cleanupInterval = setInterval(() => {
      setActiveNotifications(prev => {
        const filtered = prev.filter(
          notif => Date.now() - notif.createdAt < 3500
        );
        if (filtered.length === 0) {
          return [createNotification()];
        }
        return filtered;
      });
    }, 3500);

    return () => {
      clearInterval(addInterval);
      clearInterval(cleanupInterval);
    };
  }, [currentIndex]);

  return (
    <div
      className={`relative w-full min-h-screen ${raleway.className}`}
      style={{ 
        backgroundColor: "#FBF7EE",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23EDE9E0' stroke-width='0.15'%3E%3Cpath d='M0 20h100 M0 40h100 M0 60h100 M0 80h100' /%3E%3Cpath d='M20 0v100 M40 0v100 M60 0v100 M80 0v100' /%3E%3Ccircle cx='20' cy='20' r='2' fill='none' /%3E%3Ccircle cx='80' cy='80' r='2' fill='none' /%3E%3Cpath d='M30 30h40v40H30z' fill='none' /%3E%3Cpath d='M25 25l10 10 M75 25l-10 10 M25 75l10 -10 M75 75l-10 -10' fill='none' /%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(251, 247, 238, 0) 0%, #FBF7EE 100%)',
        }}
      />

      <div className="absolute w-full top-[10%] md:top-[15%] z-30 pointer-events-none">
        {activeNotifications.map((notif) => (
          <Notification
            key={notif.id}
            text={notif.text}
            icon={notif.icon}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="relative max-w-4xl mx-auto px-4 text-center z-20 pt-20 md:pt-28">
          <p className="text-sm md:text-base mb-4" style={{ color: "#191D20" }}>
            Plataforma Premium para Agentes Inmobiliarios
          </p>

          <h1
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
            Potencia tu Negocio con{" "}
            <div className="mt-2">
              <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
                Leads Cualificados por IA
              </span>
            </div>
          </h1>

          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: "#191D20" }}
          >
            Accede a propietarios verificados con intención real de venta y
            aumenta tus conversiones hasta un 300%
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="flex items-center rounded border bg-white px-8 py-3 hover:bg-gray-50 transition-colors"
              style={{ color: "#191D20" }}
            >
              Comenzar Prueba Gratuita
            </button>

            <button
              className="flex items-center rounded border border-gray-300 px-8 py-3 hover:bg-white/50 transition-colors"
              style={{ backgroundColor: "transparent", color: "#191D20" }}
            >
              Ver Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAgents;
