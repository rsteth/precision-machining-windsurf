const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
            Get In <span className="text-industrial-600">Touch</span>
          </h2>
          <p className="text-lg text-metal-600 max-w-3xl mx-auto">
            Ready to discuss your machining needs? Contact our team for expert consultation and service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-metal-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-industrial-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-industrial-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-metal-900">Phone</h4>
                    <p className="text-metal-600">403-679-7842</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-industrial-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-industrial-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-metal-900">Email</h4>
                    <p className="text-metal-600">info@peakprecisionmachining.ca</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-industrial-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-industrial-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-metal-900">Service Area</h4>
                    <p className="text-metal-600">Bow Valley & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-industrial-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-industrial-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-metal-900">Business Hours</h4>
                    <p className="text-metal-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-metal-600">Emergency Services Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-industrial-50 to-metal-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-metal-900 mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-metal-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-metal-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-metal-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-metal-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                  placeholder="(403) XXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-metal-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="machining">Machining Services</option>
                  <option value="hydraulic">Hydraulic Services</option>
                  <option value="field">Field Services</option>
                  <option value="fabrication">Fabrication & Repair</option>
                  <option value="pump">Pump Rebuilds</option>
                  <option value="craning">Craning & Rigging</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-metal-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-metal-300 rounded-lg focus:ring-2 focus:ring-industrial-500 focus:border-industrial-500 transition-colors"
                  placeholder="Tell us about your project or service needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-industrial-600 hover:bg-industrial-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
