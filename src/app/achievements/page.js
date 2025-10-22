import { FaTrophy, FaAward, FaStar, FaMedal, FaRibbon, FaCertificate, FaHeart, FaUserMd } from "react-icons/fa";

export const metadata = {
  title: "Achievements & Awards | Dr. Supriya Hajela - IVF Specialist Bhopal",
  description: "Explore national and international awards received by Dr. Supriya Hajela for excellence in IVF, infertility treatment, and reproductive medicine.",
  keywords: "IVF awards, fertility specialist awards, Dr. Supriya Hajela achievements, reproductive medicine recognition, medical awards",
  openGraph: {
    title: "Achievements & Awards - Dr. Supriya Hajela",
    description: "National and international recognition for excellence in IVF and reproductive medicine",
    type: "website",
  },
};

export default function Achievements() {
  const awards = [
    { year: "2024-25", title: "Dr. STYA PAUL AWARD", description: "Emerging Star in Obstetrics & Gynecology", icon: FaTrophy, category: "National", color: "from-yellow-400 to-yellow-600" },
    { year: "2024", title: "International Best Researcher Award", description: "American Chamber of Research", icon: FaAward, category: "International", color: "from-blue-400 to-blue-600" },
    { year: "2024", title: "Dr. Subhash Mukopadhaya Award", description: "Indian Fertility Society", icon: FaMedal, category: "National", color: "from-purple-400 to-purple-600" },
    { year: "2024", title: "Six Sigma Award", description: "Best Upcoming IVF Center in Central India", icon: FaStar, category: "Regional", color: "from-green-400 to-green-600" },
    { year: "2024", title: "MP IFS Research Award", description: "Indian Obstetrics & Gynecology Journal", icon: FaCertificate, category: "Research", color: "from-red-400 to-red-600" },
    { year: "2024", title: "Excellence Academic Award", description: "MP Nursing Home Association", icon: FaRibbon, category: "Academic", color: "from-pink-400 to-pink-600" },
    { year: "2023", title: "Youth Icon Award", description: "Indian Society of Assisted Reproduction", icon: FaHeart, category: "National", color: "from-indigo-400 to-indigo-600" },
  ];

  const stats = [
    { number: "7+", label: "National Awards", icon: FaAward, color: "text-yellow-500" },
    { number: "2", label: "International Recognition", icon: FaTrophy, color: "text-blue-500" },
    { number: "14+", label: "Years of Excellence", icon: FaStar, color: "text-green-500" },
    { number: "2023-25", label: "Continuous Recognition", icon: FaMedal, color: "text-purple-500" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-red-400 rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-6">
            <FaTrophy className="mr-2" /> Celebrating Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Awards & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Recognized nationally and internationally for outstanding contributions to reproductive medicine and IVF treatment excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <stat.icon className={`text-3xl mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Journey of <span className="text-yellow-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">Continuous recognition and achievements over the years</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-200"></div>
            <div className="space-y-12">
              {awards.map((award, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center`}>
                          <award.icon className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-yellow-500 font-bold">{award.year}</div>
                          <div className="text-xs text-gray-500">{award.category}</div>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{award.title}</h3>
                      <p className="text-sm text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl p-8 border border-yellow-200">
            <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Commitment to Excellence</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              These awards reflect our unwavering commitment to providing the highest quality reproductive care and advancing the field of fertility medicine through research and innovation.
            </p>
            <div className="text-yellow-500 font-semibold">- Dr. Supriya Hajela</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Trust Award-Winning Care</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the excellence that has been recognized nationally and internationally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-appointment" className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <FaAward className="mr-3 group-hover:scale-110 transition-transform" /> Book Consultation
            </a>
            <a href="/about" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 group">
              <FaUserMd className="mr-3" /> Meet Dr. Hajela
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
