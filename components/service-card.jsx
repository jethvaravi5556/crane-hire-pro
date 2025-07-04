"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
      <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg transition-all duration-300"
          >
            <Link to="/contact">Get Quote</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
