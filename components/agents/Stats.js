const Stats = () => {
  const stats = [
    {
      number: "300%",
      label: "Aumento en Conversiones",
    },
    {
      number: "15,000+",
      label: "Leads Generados",
    },
    {
      number: "2,000+",
      label: "Agentes Activos",
    },
    {
      number: "95%",
      label: "Satisfacción",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="text-3xl md:text-4xl font-semibold mb-2"
                style={{ color: "#191D20" }}
              >
                <span style={{ backgroundColor: "#EEDFA1", padding: "0 8px" }}>
                  {stat.number}
                </span>
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
