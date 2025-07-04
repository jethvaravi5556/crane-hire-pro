"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonial({ name, company, content, rating, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Quote className="h-8 w-8 text-blue-500 mr-3" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
              ))}
            </div>
          </div>

          <p className="text-gray-700 mb-6 italic">"{content}"</p>

          <div className="flex items-center">
            <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
