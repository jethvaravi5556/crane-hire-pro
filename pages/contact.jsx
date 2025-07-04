"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import ContactForm from "../components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "24/7 Emergency Support",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cranehirepro.com", "quotes@cranehirepro.com"],
      description: "Quick Response Guaranteed",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Industrial Avenue", "Construction City, CC 12345"],
      description: "Visit Our Facility",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 8:00 AM - 6:00 PM"],
      description: "Extended Business Hours",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to lift your project to new heights? Contact our experts for a free consultation and customized
              crane rental solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-blue-600 font-medium">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Find Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">123 Industrial Avenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                    <CardTitle className="text-xl font-bold text-gray-900">Why Choose Us?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Response</h4>
                      <p className="text-sm text-gray-600">
                        We respond to all inquiries within 2 hours during business hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                      <p className="text-sm text-gray-600">
                        Our team helps you choose the perfect crane for your project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-sm text-gray-600">Transparent pricing with no hidden fees or surprises.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Safety First</h4>
                      <p className="text-sm text-gray-600">All equipment is regularly inspected and maintained.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Crane Services</h2>
            <p className="text-xl mb-6 text-red-100">
              Need immediate assistance? Our emergency response team is available 24/7 for urgent crane requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
              <span className="text-red-100">Available 24/7 • Response within 1 hour</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
