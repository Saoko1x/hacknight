import { Raleway } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

const CallToAction = () => {
  return (
    <section
      className={`w-full py-20 text-center ${raleway.className}`}
      style={{ backgroundColor: "#FBF7EE" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl font-semibold mb-4"
          style={{ color: "#191D20" }}
        >
          Conoce el valor real, sin misterios
        </h2>

        <p className="text-lg mb-8" style={{ color: "#191D20" }}>
          Obtén el precio justo de cualquier propiedad en minutos
        </p>

        <Link
          href="/valorar"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md transition-all hover:bg-gray-50 bg-white"
          style={{ color: "#191D20" }}
        >
          <span>Valorar mi casa</span>
          <ArrowForwardIcon className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
