'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Play, 
  Zap, 
  Shield, 
  BookOpen, 
  Users, 
  TrendingUp,
  ArrowRight,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  const [currentLevel, setCurrentLevel] = useState(0)
  
  const stingLevels = [
    { name: 'Fire Ant', pain: '1.2', status: 'completed' },
    { name: 'Paper Wasp', pain: '2.0', status: 'in-progress' },
    { name: 'Bald-faced Hornet', pain: '2.5', status: 'upcoming' },
    { name: 'Velvet Ant', pain: '3.0', status: 'upcoming' },
    { name: 'Tarantula Hawk', pain: '4.0', status: 'upcoming' },
    { name: 'Bullet Ant', pain: '4.0+', status: 'upcoming' },
    { name: 'Mystery Sting', pain: 'TBD', status: 'upcoming' },
  ]

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All insects selected are non-lethal to healthy adults, with medical supervision and safety protocols.',
    },
    {
      icon: BookOpen,
      title: 'Educational',
      description: 'Learn about entomology, venom, pain mechanisms, and insect ecology through real experiences.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Vote on challenges, unlock content, and earn tokens through community engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Tokenized Rewards',
      description: 'Earn and trade tokens based on participation, voting, and milestone achievements.',
    },
  ]

  const stats = [
    { label: 'Sting Levels', value: '7', icon: Zap },
    { label: 'Pain Scale', value: '1-4+', icon: AlertTriangle },
    { label: 'Community Members', value: '1,247', icon: Users },
    { label: 'Tokens Earned', value: '50,000+', icon: TrendingUp },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLevel((prev) => (prev + 1) % stingLevels.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stingLevels.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Sting.my
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The ultimate insect sting challenge streamed live on pump.fun via our STING token. 
                Educational, entertaining, and tokenized experiences that push the boundaries 
                of pain tolerance while promoting entomology education.
                <span className="block text-sm text-red-500 mt-2">🧪 Connection Test - Live Update Successful! ✅ GitHub Sync Working!</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Start Challenge</span>
              </a>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Buy STING Token</span>
              </a>
            </motion.div>

            {/* Teaser Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-4xl mx-auto"
            >
              <a 
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 text-red-500" />
                    <p className="text-lg">Live on pump.fun</p>
                    <p className="text-sm text-gray-400">Watch Level 3 Paper Wasp Challenge</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Progress */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Progress
            </h2>
            <p className="text-lg text-gray-600">
              Follow our journey through the 7 levels of the Schmidt Sting Pain Index
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
            {stingLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-lg border-2 text-center ${
                  level.status === 'completed'
                    ? 'border-green-500 bg-green-50'
                    : level.status === 'in-progress'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  Level {index + 1}
                </div>
                <div className="text-xs text-gray-600 mb-2">{level.name}</div>
                <div className="text-xs font-bold text-gray-800 mb-2">
                  Pain: {level.pain}
                </div>
                <div className="flex justify-center">
                  {level.status === 'completed' && (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  )}
                  {level.status === 'in-progress' && (
                    <Clock className="h-4 w-4 text-red-500" />
                  )}
                  {level.status === 'upcoming' && (
                    <div className="h-4 w-4 rounded-full bg-gray-300" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/levels"
              className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold"
            >
              <span>View All Levels</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sting.my?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combining education, entertainment, and community engagement through 
              carefully planned and safe insect sting experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                    <Icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Challenge?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get your tokens, vote on upcoming challenges, and be part of the 
            most educational sting experience on the internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Buy STING Token on pump.fun
            </a>
            <Link
              href="/safety"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-500 transition-all duration-200"
            >
              Safety Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}