"use client";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaStethoscope,
  FaWhatsapp,
  FaCheck,
  FaAward,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    appointmentType: "consultation",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const appointmentTypes = [
    { value: "consultation", label: "Initial Consultation", icon: "👨‍⚕️" },
    { value: "followup", label: "Follow-up Visit", icon: "📋" },
    { value: "emergency", label: "Emergency Consultation", icon: "🚨" },
    { value: "treatment", label: "Treatment Planning", icon: "🔬" },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <>
      <section className="min-h-[50vh] bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-teal-500 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-5">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6 border border-green-200 animate-pulse">
              <FaCalendarAlt className="mr-2" />
              Start Your Journey
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Book Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards your parenthood journey. Schedule your
              consultation with Dr. Supriya Hajela at NABH Accredited Hajela
              Hospital today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form Section */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-200 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-2xl text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Appointment Request Sent!
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Thank you for booking your appointment. Our team will
                    contact you within 24 hours to confirm your consultation.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-700 font-semibold">What&apos;s Next?</p>
                      <p className="text-gray-600 text-sm mt-1">
                        We&apos;ll call you at {formData.phone} to confirm your
                        preferred time slot.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-fade-in-up">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
                    <h2 className="text-2xl font-bold text-white">
                      Personal Information
                    </h2>
                    <p className="text-white/90 text-sm mt-1">
                      Fill in your details to schedule your consultation
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-3">
                        Appointment Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {appointmentTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`relative flex flex-col items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.appointmentType === type.value
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-300 hover:border-blue-400"
                              }`}
                          >
                            <input
                              type="radio"
                              name="appointmentType"
                              value={type.value}
                              checked={
                                formData.appointmentType === type.value
                              }
                              onChange={handleChange}
                              className="absolute opacity-0"
                            />
                            <span className="text-2xl mb-2">{type.icon}</span>
                            <span className="text-sm font-medium text-center text-gray-700">
                              {type.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-gray-900 font-semibold">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-gray-900 font-semibold">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                            placeholder="+91 XXXXXXXXXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-900 font-semibold">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-gray-900 font-semibold">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-gray-900 font-semibold">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 appearance-none bg-white"
                          >
                            <option value="">Select time slot</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-900 font-semibold">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none"
                        placeholder="Please share any specific concerns or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Processing...
                        </div>
                      ) : (
                        "Book Appointment Now"
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Clinic Information */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  Clinic Information
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">Hajela Hospital</strong>
                    <br />
                    NABH Accredited ART Centre
                    <br />
                    Bhopal, Madhya Pradesh
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaPhone className="mr-2 text-sm" />
                      +91 XXXXXXXXXX
                    </a>
                    <a
                      href="mailto:info@hajelahospital.com"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FaEnvelope className="mr-2 text-sm" />
                      info@hajelahospital.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div
                className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <FaStethoscope className="mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  For urgent medical concerns, contact us immediately
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-md"
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  WhatsApp Now
                </a>
              </div>

              {/* Why Choose Us */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaAward className="text-teal-600 mr-2" />
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  {[
                    { text: "NABH Accredited Centre", icon: "🛡️" },
                    { text: "14+ Years Experience", icon: "🎯" },
                    { text: "Personalized Care", icon: "❤️" },
                    { text: "Advanced Technology", icon: "🔬" },
                    { text: "High Success Rates", icon: "📈" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <span className="mr-2">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div
                className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FaHeart className="mr-2" />
                  Our Success
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-white/90 text-xs">Treatments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-white/90 text-xs">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}