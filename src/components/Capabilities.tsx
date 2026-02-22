const Capabilities = () => {
  const capabilities = [
    {
      name: "Crane Lifting",
      spec: "Up to 6 tonnes",
      detail: "Heavy lifting capabilities for large equipment",
      icon: "🏗️"
    },
    {
      name: "Lathe Capacity",
      spec: "52\" diameter, 10ft length",
      detail: "Large swing capacity for big components",
      icon: "⚙️"
    },
    {
      name: "Horizontal Boring Mill",
      spec: "3 tonnes table weight",
      detail: "X: 50\" Y: 44\" Z: 10' travel capacity",
      icon: "🔧"
    },
    {
      name: "CNC Plasma Table",
      spec: "5'x10' bed",
      detail: "6\" cutting capacity for precision cutting",
      icon: "🔥"
    },
    {
      name: "Radial Arm Drill",
      spec: "60\" swing, 48\" throat",
      detail: "Versatile drilling capabilities",
      icon: "🔩"
    },
    {
      name: "Hydmech Bandsaw",
      spec: "13\" round cutting",
      detail: "Horizontal cutting for various materials",
      icon: "⚡"
    },
    {
      name: "Hydraulic Testing",
      spec: "Up to 3500 psi",
      detail: "Comprehensive hydraulic system testing",
      icon: "💧"
    },
    {
      name: "Welding Services",
      spec: "MIG, TIG, Stick",
      detail: "Aluminum spool gun capabilities",
      icon: "🔗"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-br from-metal-50 to-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
            Machine <span className="text-industrial-600">Capabilities</span>
          </h2>
          <p className="text-lg text-metal-600 max-w-3xl mx-auto">
            State-of-the-art equipment and specifications to handle any industrial machining challenge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-metal-200"
            >
              <div className="text-3xl mb-4">{capability.icon}</div>
              <h3 className="text-lg font-bold text-metal-900 mb-2">{capability.name}</h3>
              <div className="text-2xl font-bold text-industrial-600 mb-2">{capability.spec}</div>
              <p className="text-sm text-metal-600">{capability.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-metal-200">
          <h3 className="text-2xl font-bold text-metal-900 mb-6 text-center">Service Area</h3>
          <div className="text-center">
            <p className="text-lg text-metal-600 mb-4">
              Proudly serving the <span className="font-bold text-industrial-600">Bow Valley</span> and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-industrial-100 text-industrial-700 rounded-full text-sm font-medium">
                Canmore
              </span>
              <span className="px-4 py-2 bg-industrial-100 text-industrial-700 rounded-full text-sm font-medium">
                Banff
              </span>
              <span className="px-4 py-2 bg-industrial-100 text-industrial-700 rounded-full text-sm font-medium">
                Cochrane
              </span>
              <span className="px-4 py-2 bg-industrial-100 text-industrial-700 rounded-full text-sm font-medium">
                Calgary
              </span>
              <span className="px-4 py-2 bg-industrial-100 text-industrial-700 rounded-full text-sm font-medium">
                Surrounding Areas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
