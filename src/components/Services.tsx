const Services = () => {
  const services = [
    {
      title: "Machining Services",
      icon: "⚙️",
      description: "Red Seal machinist-led precision machining in steel, aluminum, exotic alloys, and plastics",
      features: ["Lathe Services", "Milling, Drilling, Boring & Shaping", "Computer-Aided Design (CAD)", "Reverse Engineering"]
    },
    {
      title: "Hydraulic Services",
      icon: "🔧",
      description: "Complete hydraulic cylinder repair and testing services",
      features: ["Hydraulic Cylinder Repair", "Test capability to 3500 psi", "Seal replacement", "Component fabrication"]
    },
    {
      title: "Field Services",
      icon: "🚛",
      description: "On-site diagnostic and alignment services with experienced technicians",
      features: ["Vibration Analysis & Thermal Imaging", "Laser Shaft Alignment", "Laser Belt Alignment", "On-site & in-shop solutions"]
    },
    {
      title: "Fabrication & Repair",
      icon: "🔩",
      description: "Custom fabrication and repair of industrial equipment",
      features: ["Welding: MIG, TIG, Stick", "Compressors & Gearboxes", "Motors & Blowers", "Oxide Blasting & Painting"]
    },
    {
      title: "Pump Rebuilds",
      icon: "💧",
      description: "Complete pump rebuild services for all types of industrial pumps",
      features: ["Tear down & inspection", "Component reconstruction", "Rotor balancing", "Circulating, condensate, fire, gear, submersible, vacuum & vertical turbine pumps"]
    },
    {
      title: "Craning & Rigging",
      icon: "🏗️",
      description: "Professional lifting and rigging services",
      features: ["3-ton & 6-ton cranes", "65 feet reach", "Hard-to-access lifts", "Certified operators"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
            Our <span className="text-industrial-600">Services</span>
          </h2>
          <p className="text-lg text-metal-600 max-w-3xl mx-auto">
            Comprehensive machining and mechanical services to keep your operations running smoothly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-metal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-metal-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-metal-900 mb-3 group-hover:text-industrial-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-metal-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-industrial-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-metal-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
