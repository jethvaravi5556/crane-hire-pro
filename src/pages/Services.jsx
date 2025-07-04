"use client"

import { motion } from "framer-motion"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      title: "Crawler Cranes",
      description: "Heavy-duty tracked cranes perfect for large construction projects and challenging terrain.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "Lifting capacity: 50-1000 tons",
        "Excellent stability on soft ground",
        "Long reach capabilities",
        "Ideal for heavy industrial projects",
      ],
    },
    {
      title: "Tower Cranes",
      description: "Fixed cranes ideal for high-rise construction with exceptional height and precision.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "Maximum height: 80+ meters",
        "Precise load placement",
        "Minimal ground footprint",
        "Perfect for urban construction",
      ],
    },
    {
      title: "Truck-mounted Cranes",
      description: "Mobile and versatile cranes that combine transportation and lifting capabilities.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "Quick setup and mobility",
        "Lifting capacity: 10-100 tons",
        "Road-legal transportation",
        "Ideal for multiple job sites",
      ],
    },
    {
      title: "Rough Terrain Cranes",
      description: "Rugged cranes designed for off-road conditions and challenging work environments.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "4-wheel drive capability",
        "Outrigger stabilization",
        "Compact and maneuverable",
        "Perfect for remote locations",
      ],
    },
    {
      title: "Mobile Cranes",
      description: "Versatile cranes that offer excellent mobility and quick deployment for various projects.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "Fast setup and breakdown",
        "Excellent maneuverability",
        "Multiple boom configurations",
        "Cost-effective solution",
      ],
    },
    {
      title: "All Terrain Cranes",
      description: "Premium cranes that combine the best features of truck and rough terrain cranes.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      features: [
        "Superior on/off-road performance",
        "Advanced load control systems",
        "Extended reach capabilities",
        "Maximum versatility",
      ],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Crane{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive crane rental solutions for every project size and complexity. From residential builds to
              major infrastructure projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Crane for Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse fleet ensures we have the perfect crane for your specific needs, whether it's a small
              residential project or a major commercial development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing the Right Crane?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts are here to help you select the perfect crane for your project requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Expert Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
