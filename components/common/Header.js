"use client";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import { LoadingCircle } from "@/components/forms/fields";
import config from "@/config";

const raleway = Raleway({ subsets: ["latin"] });

const Header = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Signout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const AuthButton = () => {
    if (status === "loading") return <LoadingCircle />;

    if (session) {
      return (
        <div className="flex items-center gap-3">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="btn btn-outline btn-sm bg-white"
            style={{ color: "#191D20" }}
          >
            {isLoading ? <LoadingCircle /> : "Cerrar Sesión"}
          </button>
        </div>
      );
    }

    return (
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
    );
  };

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
            href="/"
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
          <AuthButton />
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
                  <AuthButton />
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
