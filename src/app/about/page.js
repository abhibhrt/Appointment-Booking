"use client";
import { FaAward, FaGraduationCap, FaHeart, FaMicroscope, FaSyringe, FaSnowflake, FaHeartbeat, FaUserMd, FaProcedures, FaStar, FaHandHoldingHeart, FaRibbon, FaCalendarCheck, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const qualifications = [
    { degree: "MBBS", institution: "Medical College", year: "2005", icon: FaGraduationCap },
    { degree: "MS", institution: "Specialization in Obstetrics & Gynecology", year: "2009", icon: FaUserMd },
    { degree: "FICOG", institution: "Fellowship in Reproductive Medicine", year: "2012", icon: FaAward },
    { degree: "IVF Training", institution: "International Fertility Center", year: "2013", icon: FaStar },
  ];

  const expertise = [
    { icon: <FaMicroscope />, title: "IVF & ICSI", description: "Advanced In Vitro Fertilization techniques", color: "from-blue-500 to-purple-600" },
    { icon: <FaSyringe />, title: "IUI Services", description: "Intrauterine Insemination procedures", color: "from-pink-500 to-rose-600" },
    { icon: <FaSnowflake />, title: "Fertility Preservation", description: "Egg & embryo freezing services", color: "from-green-500 to-teal-600" },
    { icon: <FaProcedures />, title: "Laparoscopic Surgery", description: "Minimally invasive procedures", color: "from-orange-500 to-red-600" },
    { icon: <FaHeartbeat />, title: "PCOS Management", description: "Comprehensive PCOS treatment", color: "from-purple-500 to-pink-600" },
    { icon: <FaUserMd />, title: "Male Infertility", description: "Complete male fertility evaluation", color: "from-indigo-500 to-blue-600" },
  ];

  const awards = [
    { year: "2023", title: "Best IVF Specialist", organization: "National Health Awards", icon: FaAward },
    { year: "2022", title: "Excellence in Reproductive Medicine", organization: "Indian Medical Association", icon: FaStar },
    { year: "2021", title: "Women Healthcare Leader", organization: "Healthcare Excellence Awards", icon: FaRibbon },
    { year: "2020", title: "Patient Choice Award", organization: "Times Health Survey", icon: FaHeart },
  ];

  const stats = [
    { number: "14+", label: "Years Experience", color: "text-yellow-500" },
    { number: "5000+", label: "Families Created", color: "text-pink-500" },
    { number: "98%", label: "Success Rate", color: "text-green-500" },
    { number: "NABH", label: "Accredited", color: "text-blue-500" },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="h-96 bg-gray-200 rounded-2xl mb-16"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-300 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-300 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <FaHeart className="text-6xl text-pink-400" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float delay-1000">
            <FaAward className="text-5xl text-yellow-400" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium border border-green-200 animate-pulse">
                <FaUserMd className="mr-2" />
                Meet Your Fertility Specialist
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Dr. Supriya Hajela</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Renowned IVF and Fertility Specialist with over 14 years of expertise in
                Assisted Reproductive Technology (ART). Director & IVF Coordinator at
                NABH Accredited Hajela Hospital, Bhopal.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                    <div className="text-xs text-gray-700 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="relative">
              <div className="text-center space-y-4">
                <div className="w-60 h-60 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                  <img
                    src="/dr-image.png"
                    alt="Dr. Supriya Hajela"
                    className="w-56 h-56 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Supriya Hajela</h3>
                  <p className="text-gray-700">MBBS, MS, FICOG</p>
                  <p className="text-sm text-blue-600 font-semibold">Director & IVF Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-16 h-16 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-teal-300 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Qualifications</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive medical education and specialized training in reproductive medicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <qual.icon className="text-3xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {qual.degree}
                </h3>
                <p className="text-gray-700 text-sm mb-2">{qual.institution}</p>
                <div className="text-blue-600 font-semibold text-sm">{qual.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-14 h-14 bg-purple-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-pink-300 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Areas of <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive fertility treatments and reproductive healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {skill.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline transition-all duration-300">
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-300 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Awards & <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              National and international recognition for excellence in reproductive medicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-blue-600 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <award.icon className="text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-600 font-bold text-lg mb-1">{award.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-gray-700">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-purple-300 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-fade-in-up">
            <FaHandHoldingHeart className="text-5xl text-blue-600 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Mission & Philosophy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "I believe every couple deserves the joy of parenthood. My mission is to provide
              compassionate, evidence-based reproductive care using the latest advancements in
              fertility treatments. At Hajela Hospital, we combine medical excellence with
              emotional support to guide you through your journey to parenthood."
            </p>
            <div className="text-right">
              <p className="text-blue-600 font-semibold">- Dr. Supriya Hajela</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Schedule a consultation with Dr. Supriya Hajela and take the first step towards parenthood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group animate-pulse hover:animate-none"
            >
              <FaCalendarCheck className="mr-3 group-hover:scale-110 transition-transform" />
              Book Consultation
            </Link>
            <Link
              href="/emergency"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 group"
            >
              <FaPhone className="mr-3 group-hover:scale-110 transition-transform" />
              Emergency Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}