"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Hero from "../components/hero"
import Testimonial from "../components/testimonial"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Johnson Construction Co.",
      content:
        "CraneHirePro exceeded our expectations. Their team was professional, equipment was top-notch, and they completed our high-rise project ahead of schedule.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Williams",
      company: "Metro Infrastructure",
      content:
        "Reliable, safe, and cost-effective. We've been using their services for 3 years now and they never disappoint. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Chen",
      company: "Pacific Builders",
      content:
        "The best crane rental service in the region. Their operators are skilled and their equipment is always well-maintained. Great value for money.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const faqs = [
    {
      question: "What types of cranes do you offer?",
      answer:
        "We offer a comprehensive fleet including crawler cranes, tower cranes, truck-mounted cranes, rough terrain cranes, mobile cranes, and all-terrain cranes. Each type is suited for different project requirements and site conditions.",
    },
    {
      question: "Do you provide certified operators?",
      answer:
        "Yes, all our crane operators are fully certified, licensed, and have extensive experience. They undergo regular training and safety updates to ensure the highest standards of operation.",
    },
    {
      question: "What is your availability and response time?",
      answer:
        "We operate 24/7 and can typically respond to urgent requests within 2-4 hours. For planned projects, we recommend booking at least 48 hours in advance to ensure availability.",
    },
    {
      question: "Do you handle permits and site preparation?",
      answer:
        "We can assist with permit applications and provide guidance on site preparation requirements. Our team will work with you to ensure all regulatory requirements are met.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Safety is our top priority. All equipment undergoes regular inspections, operators are certified, and we follow strict safety protocols. We carry comprehensive insurance and maintain excellent safety records.",
    },
  ]

  return (
    <div className="pt-16">
      <Hero />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry professionals say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our crane rental services.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
