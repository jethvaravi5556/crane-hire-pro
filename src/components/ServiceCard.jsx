"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function ServiceCard({ title, description, image, features, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <div className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" ||
              "/placeholder.svg"
            }
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg inline-block text-center"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
