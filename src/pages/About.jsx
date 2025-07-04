"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Award, Users, Shield, Target, Eye } from "lucide-react"

export default function About() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    cranes: 0,
  })

  const finalCounts = {
    projects: 2500,
    clients: 450,
    years: 15,
    cranes: 85,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalCounts).map((key) => {
      const finalCount = finalCounts[key]
      const increment = finalCount / steps

      return setInterval(() => {
        setCounters((prev) => {
          const newValue = Math.min(prev[key] + increment, finalCount)
          return { ...prev, [key]: Math.floor(newValue) }
        })
      }, stepDuration)
    })

    setTimeout(() => {
      intervals.forEach(clearInterval)
      setCounters(finalCounts)
    }, duration)

    return () => intervals.forEach(clearInterval)
  }, [])

  const team = [
    {
      name: "John Mitchell",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "20+ years in construction and crane operations",
    },
    {
      name: "Sarah Rodriguez",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Expert in logistics and fleet management",
    },
    {
      name: "Mike Thompson",
      role: "Safety Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Certified safety engineer with impeccable record",
    },
    {
      name: "Lisa Chen",
      role: "Customer Relations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Dedicated to exceptional customer service",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every operation prioritizes the safety of our team, clients, and the public.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in equipment, service, and professionalism.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Our clients trust us to deliver on time, every time, without compromise.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously invest in the latest technology and best practices.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CraneHirePro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building the future, one lift at a time. We're the trusted partner for construction professionals who
              demand excellence, safety, and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { key: "projects", label: "Projects Completed", suffix: "+" },
              { key: "clients", label: "Happy Clients", suffix: "+" },
              { key: "years", label: "Years Experience", suffix: "" },
              { key: "cranes", label: "Fleet Size", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {counters[stat.key]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To provide safe, reliable, and cost-effective crane rental services that enable our clients to
                    achieve their construction goals efficiently and successfully. We are committed to excellence in
                    every aspect of our operations.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-purple-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-gray-600">
                    To be the leading crane rental company in the region, recognized for our unwavering commitment to
                    safety, innovation, and customer satisfaction. We envision a future where every project is lifted to
                    success.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Construction site with crane"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white p-6">
                  <div className="mx-auto bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced professionals behind our success, dedicated to delivering exceptional service and
              maintaining the highest safety standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg bg-white">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
