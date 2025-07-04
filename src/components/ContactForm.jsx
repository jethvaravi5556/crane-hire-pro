"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { Send, Loader2 } from "lucide-react"

const schema = yup.object({
  fullName: yup.string().required("Full name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  projectDescription: yup
    .string()
    .required("Project description is required")
    .min(10, "Please provide more details about your project"),
  craneType: yup.string().required("Please select a crane type"),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", data)
    toast.success("Thank you! We'll get back to you within 24 hours.")
    reset()
    setIsSubmitting(false)
  }

  const craneTypes = [
    "Crawler Crane",
    "Tower Crane",
    "Truck-mounted Crane",
    "Rough Terrain Crane",
    "Mobile Crane",
    "All Terrain Crane",
    "Other / Not Sure",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Request a Quote
          </h2>
          <p className="text-gray-600">Tell us about your project and we'll provide a customized solution</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="fullName"
                {...register("fullName")}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                id="phone"
                {...register("phone")}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="craneType" className="block text-sm font-medium text-gray-700">
                Crane Type *
              </label>
              <select
                {...register("craneType")}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.craneType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select crane type</option>
                {craneTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.craneType && <p className="text-sm text-red-500">{errors.craneType.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
              Project Description *
            </label>
            <textarea
              id="projectDescription"
              {...register("projectDescription")}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.projectDescription ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Please describe your project, timeline, location, and any specific requirements..."
              rows={4}
            />
            {errors.projectDescription && <p className="text-sm text-red-500">{errors.projectDescription.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Request
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  )
}
