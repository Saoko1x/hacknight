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
        className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        onClick={onClick}
      >
        <span className="text-left font-medium text-lg" style={{ color: "#191D20" }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <KeyboardArrowDownIcon 
            style={{ color: "#191D20" }} 
            className="text-2xl"
          />
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
            <div className="p-6 text-gray-600 bg-white rounded-b-lg border-x border-b border-gray-100">
              <p className="leading-relaxed text-base">{answer}</p>
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
    <section className={`w-full py-24 ${raleway.className} bg-gradient-to-b from-white to-gray-50`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "#191D20" }}
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestra plataforma
          </p>
        </div>

        <div className="space-y-6">
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
