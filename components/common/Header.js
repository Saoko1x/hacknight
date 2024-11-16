"use client";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`w-full py-4 px-6 fixed top-0 left-0 right-0 z-40 ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold z-50"
          style={{ color: "#191D20" }}
        >
          100Casas
        </Link>

        {/* Center Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/propietarios"
            className="text-base hover:underline"
            style={{ color: "#191D20" }}
          >
            Propietarios
          </Link>
          <Link
            href="/agentes"
            className="text-base hover:underline"
            style={{ color: "#191D20" }}
          >
            Agentes
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: "#191D20" }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/registro-agente"
            className="border bg-white rounded px-4 py-2 hover:bg-gray-50"
            style={{ color: "#191D20" }}
          >
            Soy Agente Mobiliario
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-[#FBF7EE] md:hidden z-40"
              style={{ top: 0, left: 0 }}
            >
              <motion.div
                className="flex flex-col items-center justify-center h-full gap-8 px-6"
                initial="closed"
                animate="open"
                variants={{
                  closed: {
                    opacity: 0,
                    y: 20,
                  },
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/propietarios"
                    className="text-xl hover:underline"
                    style={{ color: "#191D20" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Propietarios
                  </Link>
                </motion.div>

                <motion.div
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/agentes"
                    className="text-xl hover:underline"
                    style={{ color: "#191D20" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agentes
                  </Link>
                </motion.div>

                <motion.div
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href="/registro-agente"
                    className="border bg-white rounded px-6 py-3 hover:bg-gray-50 text-center"
                    style={{ color: "#191D20" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Soy Agente Mobiliario
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
