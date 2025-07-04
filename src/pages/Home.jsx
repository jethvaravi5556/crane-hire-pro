"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Hero from "../components/Hero"

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Johnson Construction Co.",
      content:
        "CraneHirePro exceeded our expectations. Their team was professional, equipment was top-notch, and they completed our high-rise project ahead of schedule.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      name: "Sarah Williams",
      company: "Metro Infrastructure",
      content:
        "Reliable, safe, and cost-effective. We've been using their services for 3 years now and they never disappoint. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      name: "David Chen",
      company: "Pacific Builders",
      content:
        "The best crane rental service in the region. Their operators are skilled and their equipment is always well-maintained. Great value for money.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
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
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">💬</div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                <div className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white">
                  <div className="cursor-pointer p-6" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
