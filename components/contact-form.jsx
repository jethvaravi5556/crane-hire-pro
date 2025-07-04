"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const craneType = watch("craneType")

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
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Request a Quote
          </CardTitle>
          <CardDescription>Tell us about your project and we'll provide a customized solution</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className={errors.fullName ? "border-red-500" : ""}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  className={errors.phone ? "border-red-500" : ""}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="craneType">Crane Type *</Label>
                <Select value={craneType} onValueChange={(value) => setValue("craneType", value)}>
                  <SelectTrigger className={errors.craneType ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select crane type" />
                  </SelectTrigger>
                  <SelectContent>
                    {craneTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.craneType && <p className="text-sm text-red-500">{errors.craneType.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description *</Label>
              <Textarea
                id="projectDescription"
                {...register("projectDescription")}
                className={errors.projectDescription ? "border-red-500" : ""}
                placeholder="Please describe your project, timeline, location, and any specific requirements..."
                rows={4}
              />
              {errors.projectDescription && <p className="text-sm text-red-500">{errors.projectDescription.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
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
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
