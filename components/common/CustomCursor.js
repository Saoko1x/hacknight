"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Función para verificar si es desktop (>1024px)
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    // Verificar inicialmente
    checkIfDesktop();

    // Verificar cuando la ventana cambie de tamaño
    window.addEventListener("resize", checkIfDesktop);

    // Solo añadir los event listeners del cursor si estamos en desktop
    if (isDesktop) {
      const updateCursorPosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e) => {
        let element = e.target;
        while (element) {
          const style = window.getComputedStyle(element);
          if (style.cursor === "pointer") {
            setIsHovering(true);
            return;
          }
          element = element.parentElement;
        }
        setIsHovering(false);
      };

      window.addEventListener("mousemove", updateCursorPosition);
      document.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", updateCursorPosition);
        document.removeEventListener("mouseover", handleMouseOver);
      };
    }

    // Limpiar el event listener del resize
    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, [isDesktop]); // Añadido isDesktop como dependencia

  // No renderizar nada si no es desktop
  if (!isDesktop) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full border-2 border-black transition-all duration-300 ease-out
        ${isHovering ? "w-16 h-16" : "w-10 h-10"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
      }}
    />
  );
};

export default CustomCursor;
