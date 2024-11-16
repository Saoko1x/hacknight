import { Raleway } from "next/font/google";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const raleway = Raleway({ subsets: ["latin"] });

const ProcessStep = ({ icon: Icon, number, title, description }) => (
  <div className="flex flex-col items-center text-center max-w-xs relative z-10">
    <div className="bg-white w-20 h-20 rounded-xl mb-6 flex items-center justify-center relative shadow-lg transition-transform duration-300 hover:scale-105">
      <Icon style={{ color: "#191D20", fontSize: "2rem" }} />
      <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full text-sm font-semibold bg-[#EEDFA1] text-[#191D20] shadow-md">
        {number}
      </div>
    </div>
    <div className="bg-[#EEDFA1] px-6 py-2.5 rounded-lg mb-4 shadow-md transition-all duration-300 hover:bg-opacity-90">
      <span className="text-[#191D20] text-base font-bold tracking-wide">
        {title}
      </span>
    </div>
    <p className="text-base text-gray-200 leading-relaxed max-w-[250px]">
      {description}
    </p>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: SearchIcon,
      number: 1,
      title: "Ingresa tu Dirección",
      description: "Proporciona los datos básicos de tu propiedad para comenzar",
    },
    {
      icon: HomeIcon,
      number: 2,
      title: "Obtén la Valoración",
      description: "Recibe un análisis detallado basado en datos del mercado actual",
    },
    {
      icon: PersonIcon,
      number: 3,
      title: "Conecta con Expertos",
      description: "Accede a una red de agentes inmobiliarios verificados",
    },
  ];

  return (
    <section
      className={`w-full py-24 ${raleway.className} relative overflow-hidden bg-[#191D20]`}
    >
      {/* Grid pattern de fondo */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(238, 223, 161, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(238, 223, 161, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculo superior izquierdo */}
        <div 
          className="absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(238, 223, 161, 0.2) 0%, transparent 70%)'
          }}
        />
        
        {/* Círculo inferior derecho */}
        <div 
          className="absolute -right-40 -bottom-40 w-[400px] h-[400px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgba(238, 223, 161, 0.3) 0%, transparent 70%)'
          }}
        />

        {/* Puntos decorativos */}
        <div className="absolute top-1/4 right-20 w-24 h-24 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(238, 223, 161, 0.5) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }}
        />
        
        <div className="absolute bottom-1/4 left-20 w-32 h-32 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(238, 223, 161, 0.5) 1px, transparent 1px)',
            backgroundSize: '10px 10px'
          }}
        />
      </div>

      {/* Gradiente sutil superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, rgba(25, 29, 32, 1), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          Proceso Simple y Transparente
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-16 relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EEDFA1] to-transparent opacity-20" />

          {steps.map((step, index) => (
            <>
              <ProcessStep key={step.number} {...step} />
              {index < steps.length - 1 && (
                <ArrowForwardIcon className="hidden md:block text-[#EEDFA1] z-10 opacity-70" />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
