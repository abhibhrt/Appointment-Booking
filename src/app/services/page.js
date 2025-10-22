import { FaBaby, FaSyringe, FaSnowflake, FaUserMd, FaHeartbeat, FaClinicMedical, FaBullseye, FaStar, FaTrophy, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Services | IVF, ICSI, IUI & Fertility Treatments - Dr. Supriya Hajela",
  description: "Explore fertility services by Dr. Supriya Hajela — IVF, ICSI, IUI, fertility preservation, PCOS management, and minimally invasive surgeries at Hajela Hospital, Bhopal.",
  keywords: "IVF treatment Bhopal, ICSI IUI services, fertility preservation, PCOS management, laparoscopic surgery, fertility treatments",
  openGraph: {
    title: "Fertility Services - Dr. Supriya Hajela | IVF Specialist Bhopal",
    description: "Comprehensive fertility treatments including IVF, ICSI, IUI and minimally invasive surgeries",
    type: "website",
  },
};

export default function Services() {
  const services = [
    {
      title: "IVF Treatment",
      desc: "In-vitro fertilization with advanced techniques under Dr. Supriya Hajela's expertise at NABH accredited centre.",
      icon: FaBaby,
      features: ["Advanced Lab Technology", "High Success Rates", "Personalized Protocols", "NABH Standards"],
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "ICSI & IUI",
      desc: "Advanced male infertility procedures ensuring high success rates and personalized care.",
      icon: FaSyringe,
      features: ["Male Infertility Focus", "High Precision", "Quality Control", "Expert Embryologists"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Fertility Preservation",
      desc: "Egg & embryo freezing using latest vitrification technology for future family planning.",
      icon: FaSnowflake,
      features: ["Egg Freezing", "Embryo Banking", "Vitrification Tech", "Long-term Storage"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Minimal Invasive Surgery",
      desc: "Laparoscopic & hysteroscopic procedures with fellowship-trained precision and faster recovery.",
      icon: FaUserMd,
      features: ["Faster Recovery", "Minimal Scarring", "High Precision", "Advanced Equipment"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "PCOS Management",
      desc: "Comprehensive PCOS treatment by Scientific Committee Member – PCOS Society of India.",
      icon: FaHeartbeat,
      features: ["Hormonal Balance", "Lifestyle Guidance", "Ovulation Induction", "Long-term Care"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Ovulation Induction",
      desc: "Medicated cycles with close monitoring and customized treatment protocols for optimal results.",
      icon: FaClinicMedical,
      features: ["Customized Protocols", "Close Monitoring", "Optimal Timing", "High Success"],
      color: "from-orange-400 to-orange-600"
    },
  ];

  const stats = [
    { number: "5000+", label: "Successful Treatments", icon: <FaBullseye /> },
    { number: "98%", label: "Patient Satisfaction", icon: <FaStar /> },
    { number: "14+", label: "Years Experience", icon: <FaTrophy /> },
    { number: "NABH", label: "Accredited Centre", icon: <FaShieldAlt /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-pink-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-200 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
              <FaClinicMedical className="mr-2" />
              Comprehensive Fertility Care
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Advanced fertility treatments and reproductive healthcare services with
              personalized care at NABH Accredited Hajela Hospital, Bhopal.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-pink-500">Fertility Treatments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art reproductive medicine services with personalized care plans
              and the latest medical technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-pink-500"
              >
                <div className="absolute -top-4 -right-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors duration-300 pr-16">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="text-pink-500 text-sm font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}