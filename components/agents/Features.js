import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AutomateIcon from "@mui/icons-material/AutoMode";
import CheckIcon from "@mui/icons-material/Check";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const FeatureCard = ({ icon, title, description, features }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
      style={{ backgroundColor: "#EEDFA1" }}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3" style={{ color: "#191D20" }}>
      {title}
    </h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-green-500" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <FilterAltIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Leads Cualificados",
      description:
        "Accede a propietarios verificados con alta intención de venta",
      features: [
        "Score de calificación por IA",
        "Datos verificados",
        "Historial de interacciones",
      ],
    },
    {
      icon: <AnalyticsIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Analytics Avanzados",
      description:
        "Métricas detalladas y seguimiento de conversiones en tiempo real",
      features: [
        "Dashboard personalizado",
        "Reportes automáticos",
        "Predicciones de mercado",
      ],
    },
    {
      icon: (
        <NotificationsIcon className="w-6 h-6" style={{ color: "#191D20" }} />
      ),
      title: "Notificaciones Instantáneas",
      description: "Recibe alertas inmediatas de nuevos leads en tu zona",
      features: [
        "Alertas personalizadas",
        "Notificaciones push",
        "Integración con WhatsApp",
      ],
    },
    {
      icon: <SecurityIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Territorio Protegido",
      description: "Exclusividad en tu zona de operación",
      features: [
        "Zonas exclusivas",
        "Protección de leads",
        "Sin competencia directa",
      ],
    },
    {
      icon: (
        <PhoneIphoneIcon className="w-6 h-6" style={{ color: "#191D20" }} />
      ),
      title: "App Móvil Dedicada",
      description: "Gestiona tus leads desde cualquier lugar",
      features: [
        "Disponible iOS/Android",
        "Sincronización en tiempo real",
        "Modo offline",
      ],
    },
    {
      icon: <AutomateIcon className="w-6 h-6" style={{ color: "#191D20" }} />,
      title: "Automatización CRM",
      description: "Seguimiento automático de leads y tareas",
      features: [
        "Workflows personalizados",
        "Recordatorios automáticos",
        "Plantillas de seguimiento",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-semibold mb-4"
            style={{ color: "#191D20" }}
          >
            Herramientas Profesionales
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para potenciar tus ventas inmobiliarias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
