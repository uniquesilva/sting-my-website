'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  ArrowRight,
  Shield,
  BookOpen,
  Play
} from 'lucide-react'

interface StingLevel {
  id: number
  name: string
  scientificName: string
  painIndex: number
  description: string
  risks: string[]
  educational: string[]
  status: 'completed' | 'in-progress' | 'upcoming'
  date?: string
  image?: string
}

const stingLevels: StingLevel[] = [
  {
    id: 1,
    name: 'Sweat Bee',
    scientificName: 'Halictidae family',
    painIndex: 1.0,
    description: 'A gentle introduction to insect stings. Small, metallic bees that are attracted to human sweat. Their sting is described as a sharp, burning sensation that lasts only a few minutes.',
    risks: ['Localized pain and swelling', 'Risk of allergic reaction in sensitive individuals'],
    educational: ['Bee anatomy and behavior', 'Why bees sting', 'Importance of pollinators'],
    status: 'completed',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Fire Ant',
    scientificName: 'Solenopsis invicta',
    painIndex: 1.2,
    description: 'The imported red fire ant delivers a painful sting that feels like a burning match. They often sting multiple times, creating a characteristic pattern of small blisters.',
    risks: ['Multiple stings possible', 'Blisters and itching', 'Risk of secondary infection'],
    educational: ['Ant colony structure', 'Fire ant invasion biology', 'Pain mechanism in ant stings'],
    status: 'completed',
    date: '2024-02-20'
  },
  {
    id: 3,
    name: 'Paper Wasp',
    scientificName: 'Polistes dominula',
    painIndex: 2.0,
    description: 'Paper wasps build distinctive umbrella-shaped nests. Their sting is more intense than bees, with a sharp, burning pain that can last 30-60 minutes.',
    risks: ['More intense pain than previous levels', 'Swelling and redness', 'Potential for multiple stings'],
    educational: ['Wasp vs bee differences', 'Paper nest construction', 'Social wasp behavior'],
    status: 'in-progress',
    date: '2024-03-25'
  },
  {
    id: 4,
    name: 'Bald-faced Hornet',
    scientificName: 'Dolichovespula maculata',
    painIndex: 2.5,
    description: 'Large, aggressive wasps with distinctive white markings. Their sting is significantly more painful than paper wasps, with intense burning and throbbing pain.',
    risks: ['Intense pain lasting hours', 'Significant swelling', 'Risk of systemic reactions'],
    educational: ['Hornet evolution and ecology', 'Defensive behavior patterns', 'Venom composition differences'],
    status: 'upcoming'
  },
  {
    id: 5,
    name: 'Velvet Ant (Cow Killer)',
    scientificName: 'Dasymutilla occidentalis',
    painIndex: 3.0,
    description: 'Despite the name, this is actually a wingless wasp. The female delivers an extremely painful sting described as "unbearable" - hence the nickname "cow killer."',
    risks: ['Extremely intense pain', 'Long-lasting discomfort (up to 30 minutes)', 'Psychological impact'],
    educational: ['Mimicry and warning coloration', 'Wingless wasp evolution', 'Pain threshold research'],
    status: 'upcoming'
  },
  {
    id: 6,
    name: 'Tarantula Hawk Wasp',
    scientificName: 'Pepsis grossa',
    painIndex: 4.0,
    description: 'One of the most painful stings known to science. The pain is immediate, intense, and can cause temporary paralysis. However, the pain subsides relatively quickly.',
    risks: ['Extremely intense pain', 'Temporary paralysis', 'Risk of fainting'],
    educational: ['Parasitoid wasp biology', 'Tarantula hunting behavior', 'Pain research applications'],
    status: 'upcoming'
  },
  {
    id: 7,
    name: 'Bullet Ant',
    scientificName: 'Paraponera clavata',
    painIndex: 4.0,
    description: 'The ultimate test - often considered the most painful insect sting. The pain is described as "pure, intense, brilliant pain" that can last 24 hours or more.',
    risks: ['Most intense pain possible', 'Long-lasting pain (24+ hours)', 'Potential for shock'],
    educational: ['Amazon rainforest ecology', 'Indigenous pain rituals', 'Pain neuroscience research'],
    status: 'upcoming'
  }
]

export default function LevelsPage() {
  const [selectedLevel, setSelectedLevel] = useState<StingLevel | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case 'in-progress':
        return <Clock className="h-6 w-6 text-red-500" />
      case 'upcoming':
        return <AlertTriangle className="h-6 w-6 text-gray-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'in-progress':
        return 'border-red-500 bg-red-50'
      case 'upcoming':
        return 'border-gray-300 bg-gray-50'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  const getPainColor = (painIndex: number) => {
    if (painIndex <= 1.5) return 'text-green-600 bg-green-100'
    if (painIndex <= 2.5) return 'text-yellow-600 bg-yellow-100'
    if (painIndex <= 3.5) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The 7 Sting Levels
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey through the Schmidt Sting Pain Index, from mild discomfort 
            to the most intense pain known to science. Each level is carefully selected 
            for educational value and safety.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Challenge Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {stingLevels.map((level) => (
                <motion.div
                  key={level.id}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border-2 text-center cursor-pointer transition-all duration-200 ${getStatusColor(level.status)}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    Level {level.id}
                  </div>
                  <div className="text-sm text-gray-700 mb-2">{level.name}</div>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getPainColor(level.painIndex)}`}>
                    Pain: {level.painIndex}
                  </div>
                  <div className="flex justify-center">
                    {getStatusIcon(level.status)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Level Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stingLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                level.status === 'completed' ? 'border-green-500' :
                level.status === 'in-progress' ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Level {level.id}: {level.name}
                  </h3>
                  <p className="text-sm text-gray-600 italic">{level.scientificName}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(level.status)}
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPainColor(level.painIndex)}`}>
                    Pain: {level.painIndex}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{level.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-red-500" />
                    Risks
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {level.risks.map((risk, idx) => (
                      <li key={idx}>• {risk}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    Educational Value
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {level.educational.map((topic, idx) => (
                      <li key={idx}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {level.date && (
                <div className="text-sm text-gray-500 mb-4">
                  Completed: {new Date(level.date).toLocaleDateString()}
                </div>
              )}

              <div className="flex space-x-2">
                {level.status === 'completed' && (
                  <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    <Play className="h-4 w-4" />
                    <span>Watch Video</span>
                  </button>
                )}
                {level.status === 'in-progress' && (
                  <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    <Clock className="h-4 w-4" />
                    <span>Live Now</span>
                  </button>
                )}
                {level.status === 'upcoming' && (
                  <button className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Coming Soon</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedLevel(level)}
                  className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Important Safety Notice
              </h3>
              <p className="text-red-800">
                All insect stings in this challenge are conducted under medical supervision 
                with proper safety protocols. These insects are selected because they are 
                non-lethal to healthy adults, but risks include allergic reactions, 
                secondary infections, and intense pain. Always consult medical professionals 
                before attempting any similar activities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Follow the Journey?
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Join our community, earn tokens, and be part of the most educational 
            sting experience on the internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Tokens
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>

      {/* Level Detail Modal */}
      <AnimatePresence>
        {selectedLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedLevel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Level {selectedLevel.id}: {selectedLevel.name}
                    </h3>
                    <p className="text-gray-600 italic">{selectedLevel.scientificName}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLevel(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">{selectedLevel.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-red-500" />
                        Safety Considerations
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {selectedLevel.risks.map((risk, idx) => (
                          <li key={idx}>• {risk}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                        Educational Topics
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {selectedLevel.educational.map((topic, idx) => (
                          <li key={idx}>• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {selectedLevel.date && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        <strong>Completed:</strong> {new Date(selectedLevel.date).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
