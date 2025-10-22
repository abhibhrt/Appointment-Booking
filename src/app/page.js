"use client";
import Link from "next/link";
import { FaAward, FaStethoscope, FaMicroscope, FaSyringe, FaChartBar, FaHeart, FaCalendarCheck, FaStar, FaUsers, FaBaby, FaClinicMedical, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: "14+", label: "Years Experience", icon: FaAward, color: "text-yellow-500" },
    { number: "5000+", label: "Successful Treatments", icon: FaHeart, color: "text-red-500" },
    { number: "NABH", label: "Accredited Centre", icon: FaStar, color: "text-green-500" },
    { number: "24/7", label: "Patient Care", icon: FaUsers, color: "text-blue-500" },
  ];

  const services = [
    { name: "IVF Treatment", icon: <FaMicroscope />, desc: "Advanced In Vitro Fertilization" },
    { name: "IUI Services", icon: <FaSyringe />, desc: "Intrauterine Insemination" },
    { name: "Fertility Assessment", icon: <FaChartBar />, desc: "Comprehensive Evaluation" },
    { name: "PCOS Treatment", icon: <FaStethoscope />, desc: "Polycystic Ovary Syndrome Care" },
  ];

  const features = [
    { title: "Expert Experience", desc: "14+ years in reproductive medicine", icon: FaAward },
    { title: "NABH Accredited", desc: "Highest quality standards", icon: FaShieldAlt },
    { title: "Personalized Care", desc: "Individual treatment plans", icon: FaHeart },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="h-96 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-teal-500 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-10 right-1/4 w-12 h-12 bg-pink-500 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 animate-float">
            <FaBaby className="text-6xl text-blue-500" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-float delay-1000">
            <FaHeart className="text-5xl text-pink-500" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-bounce delay-500">
            <FaClinicMedical className="text-7xl text-purple-500" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="bg-white rounded-xl">
                <div className="text-center space-y-4">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                    <img src="/dr-prof.png" alt="Dr. Supriya Hajela" className="w-76 h-76 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Your Journey to Parenthood</h3>
                  <p className="text-gray-600 text-sm">Starts Here</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full animate-bounce flex items-center space-x-2">
                <FaStar className="text-sm" />
                <span className="text-sm font-semibold">Success Stories</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full animate-pulse flex items-center space-x-2">
                <FaCheckCircle className="text-sm" />
                <span className="text-sm font-semibold">Trusted Care</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium animate-pulse border border-green-200">
                <FaAward className="mr-2" />
                NABH Accredited IVF Centre
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    Dr. Supriya Hajela
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-semibold leading-relaxed">
                  MBBS, MS, FICOG<br />
                  <span className="text-blue-600">Director & IVF Coordinator</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Award-winning IVF & Fertility Specialist with over 14 years of experience at
                  NABH Accredited Hajela Hospital, Bhopal. Trusted for compassionate,
                  evidence-based reproductive care.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <stat.icon className={`text-2xl ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group animate-pulse hover:animate-none"
                >
                  <FaCalendarCheck className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <FaStethoscope className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-teal-500 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Fertility Care</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced reproductive treatments with personalized care and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
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

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-blue-500/5 to-teal-500/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-pink-500 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Dr. Supriya Hajela</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/70 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <feature.icon className="text-3xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-red-100">24/7 Emergency Fertility Care Available</p>
            </div>
            <Link
              href="/emergency"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none group"
            >
              <FaCalendarCheck className="mr-3 group-hover:scale-110 transition-transform" />
              Emergency Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
