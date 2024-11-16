"use client";
import { Raleway } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const raleway = Raleway({ subsets: ["latin"] });

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-left font-medium" style={{ color: "#191D20" }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <KeyboardArrowDownIcon style={{ color: "#191D20" }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-600 bg-white rounded-b-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "¿Cómo funciona la valoración con IA?",
      answer:
        "Nuestra plataforma utiliza algoritmos avanzados de inteligencia artificial que analizan miles de datos del mercado inmobiliario en tiempo real. Consideramos factores como ubicación, características de la propiedad, tendencias del mercado y comparables recientes para proporcionar una valoración precisa.",
    },
    {
      question: "¿Qué tan precisa es la valoración?",
      answer:
        "Nuestro sistema tiene una precisión promedio del 95% en comparación con los precios finales de venta. Esto se logra gracias a nuestra base de datos de más de 15,000 propiedades y la constante actualización de información del mercado.",
    },
    {
      question: "¿Cuánto tiempo toma recibir la valoración?",
      answer:
        "La valoración es instantánea. Una vez que ingreses los datos básicos de tu propiedad, nuestro sistema procesará la información y te proporcionará un informe detallado en cuestión de segundos.",
    },
    {
      question: "¿Qué información necesito proporcionar?",
      answer:
        "Solo necesitas datos básicos como la dirección de la propiedad, metros cuadrados, número de habitaciones y baños. Cuanta más información proporciones, más precisa será la valoración, pero estos datos básicos son suficientes para obtener una estimación inicial.",
    },
    {
      question: "¿El servicio tiene algún costo?",
      answer:
        "No, el servicio de valoración es completamente gratuito. Nuestro objetivo es proporcionar transparencia al mercado inmobiliario y ayudar a propietarios y compradores a tomar decisiones informadas.",
    },
  ];

  return (
    <section className={`w-full py-20 ${raleway.className} bg-white`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600">
            Todo lo que necesitas saber sobre nuestra plataforma
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
