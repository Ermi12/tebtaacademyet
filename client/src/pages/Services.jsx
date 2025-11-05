import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Laptop, Users, FileText } from "lucide-react";

function BookNow() {
  window.location.href = "/contact";
}
export default function Services() {
  
  const services = [
    {
      title: "In-Person Tutoring",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      desc: "Personalized face-to-face learning tailored to your needs.",
    },
    {
      title: "Online Tutoring",
      icon: <Laptop className="w-10 h-10 text-green-600" />,
      desc: "Interactive lessons from the comfort of your home.",
    },
    {
      title: "Group Lessons",
      icon: <Users className="w-10 h-10 text-purple-600" />,
      desc: "Collaborative learning with peers for better engagement.",
    },
    {
      title: "Test Preparation",
      icon: <FileText className="w-10 h-10 text-red-600" />,
      desc: "Focused prep sessions to boost your exam confidence.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.desc}</p>
            <div className="flex justify-center mt-4">
              <button onClick={BookNow} className="bookBtn px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
