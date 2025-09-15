'use client'

import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Shield, 
  Heart, 
  Phone, 
  FileText, 
  Users, 
  Clock,
  Info
} from 'lucide-react'

interface SafetyProtocol {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  critical: boolean
}

interface MedicalInfo {
  condition: string
  symptoms: string[]
  action: string
  urgency: 'low' | 'medium' | 'high' | 'emergency'
}

const safetyProtocols: SafetyProtocol[] = [
  {
    title: 'Medical Supervision',
    description: 'All sting challenges are conducted under direct medical supervision with qualified healthcare professionals present.',
    icon: Heart,
    critical: true
  },
  {
    title: 'Pre-Challenge Screening',
    description: 'Complete medical screening and allergy testing before any sting challenge participation.',
    icon: FileText,
    critical: true
  },
  {
    title: 'Emergency Equipment',
    description: 'Full medical kit including epinephrine, antihistamines, and emergency communication equipment on-site.',
    icon: Shield,
    critical: true
  },
  {
    title: 'Recovery Protocols',
    description: 'Structured recovery periods between challenges with monitoring for delayed reactions.',
    icon: Clock,
    critical: true
  },
  {
    title: 'Legal Compliance',
    description: 'All activities comply with local wildlife and safety regulations, with proper permits and documentation.',
    icon: FileText,
    critical: false
  },
  {
    title: 'Community Guidelines',
    description: 'Clear guidelines for community members about safety expectations and emergency procedures.',
    icon: Users,
    critical: false
  }
]

const medicalInfo: MedicalInfo[] = [
  {
    condition: 'Local Reaction',
    symptoms: ['Pain at sting site', 'Redness and swelling', 'Warmth to touch'],
    action: 'Apply ice, take antihistamines, monitor for worsening symptoms',
    urgency: 'low'
  },
  {
    condition: 'Allergic Reaction',
    symptoms: ['Hives or rash', 'Swelling beyond sting site', 'Difficulty breathing', 'Dizziness'],
    action: 'Use epinephrine if available, call emergency services immediately',
    urgency: 'emergency'
  },
  {
    condition: 'Systemic Reaction',
    symptoms: ['Fever', 'Nausea and vomiting', 'Headache', 'Muscle aches'],
    action: 'Seek immediate medical attention, monitor vital signs',
    urgency: 'high'
  },
  {
    condition: 'Secondary Infection',
    symptoms: ['Increasing redness', 'Pus or discharge', 'Fever', 'Warmth spreading'],
    action: 'Clean wound, apply antibiotic ointment, consult healthcare provider',
    urgency: 'medium'
  }
]

const insects = [
  {
    name: 'Sweat Bee',
    riskLevel: 'Low',
    description: 'Minimal risk of severe reaction. Local pain and swelling expected.',
    precautions: ['Clean sting site', 'Apply ice', 'Monitor for allergies']
  },
  {
    name: 'Fire Ant',
    riskLevel: 'Low-Medium',
    description: 'Multiple stings possible. Risk of blisters and secondary infection.',
    precautions: ['Wash thoroughly', 'Avoid scratching', 'Monitor for blisters']
  },
  {
    name: 'Paper Wasp',
    riskLevel: 'Medium',
    description: 'More intense pain than bees. Risk of allergic reactions increases.',
    precautions: ['Immediate ice application', 'Antihistamines ready', 'Watch for swelling']
  },
  {
    name: 'Bald-faced Hornet',
    riskLevel: 'Medium-High',
    description: 'Significant pain and swelling. Higher risk of systemic reactions.',
    precautions: ['Medical supervision required', 'Emergency equipment ready', 'Extended monitoring']
  },
  {
    name: 'Velvet Ant',
    riskLevel: 'High',
    description: 'Extremely intense pain. Risk of shock and psychological trauma.',
    precautions: ['Full medical team', 'Pain management protocol', 'Psychological support']
  },
  {
    name: 'Tarantula Hawk',
    riskLevel: 'High',
    description: 'Most intense pain known. Risk of temporary paralysis and fainting.',
    precautions: ['Hospital-grade medical support', 'Recovery protocols', 'Extended observation']
  },
  {
    name: 'Bullet Ant',
    riskLevel: 'Maximum',
    description: 'Ultimate pain challenge. Risk of shock, extended pain, psychological impact.',
    precautions: ['Full medical facility', '24-hour monitoring', 'Comprehensive recovery plan']
  }
]

export default function SafetyPage() {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'low': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'high': return 'text-orange-600 bg-orange-100'
      case 'emergency': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100'
      case 'Low-Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Medium': return 'text-orange-600 bg-orange-100'
      case 'Medium-High': return 'text-red-600 bg-red-100'
      case 'High': return 'text-red-700 bg-red-200'
      case 'Maximum': return 'text-red-800 bg-red-300'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Safety & Medical Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our top priority. All sting challenges are conducted under 
            strict medical supervision with comprehensive safety protocols.
          </p>
        </div>

        {/* Critical Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-red-500 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                ⚠️ CRITICAL SAFETY NOTICE ⚠️
              </h2>
              <div className="text-red-800 space-y-2">
                <p>
                  <strong>DO NOT ATTEMPT THESE ACTIVITIES WITHOUT PROPER MEDICAL SUPERVISION.</strong>
                </p>
                <p>
                  Insect stings can cause severe allergic reactions, anaphylaxis, and in rare cases, death. 
                  Even &quot;non-lethal&quot; insects can be dangerous to individuals with allergies or underlying health conditions.
                </p>
                <p>
                  This content is for educational purposes only and should not be replicated without 
                  professional medical supervision and proper safety protocols.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Safety Protocols */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Safety Protocols
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProtocols.map((protocol, index) => {
              const Icon = protocol.icon
              return (
                <motion.div
                  key={protocol.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 ${
                    protocol.critical 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className={`p-3 rounded-lg w-fit mb-4 ${
                    protocol.critical ? 'bg-red-500' : 'bg-gray-300'
                  }`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {protocol.title}
                  </h3>
                  <p className="text-gray-700">{protocol.description}</p>
                  {protocol.critical && (
                    <div className="mt-3 flex items-center text-red-600 text-sm font-semibold">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Critical Protocol
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Medical Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Medical Information & Response
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {medicalInfo.map((info, index) => (
                <motion.div
                  key={info.condition}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {info.condition}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getUrgencyColor(info.urgency)}`}>
                      {info.urgency.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Symptoms:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {info.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recommended Action:</h4>
                      <p className="text-gray-700">{info.action}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Insect Risk Assessment */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Insect Risk Assessment
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Insect
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precautions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {insects.map((insect) => (
                    <tr key={insect.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {insect.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(insect.riskLevel)}`}>
                          {insect.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {insect.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-1">
                          {insect.precautions.map((precaution, idx) => (
                            <li key={idx}>{precaution}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emergency Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-red-900">Emergency Services</h3>
              </div>
              <div className="space-y-2 text-red-800">
                <p><strong>Emergency:</strong> 911 (US) / 999 (UK) / 000 (AU)</p>
                <p><strong>Poison Control:</strong> 1-800-222-1222 (US)</p>
                <p><strong>Medical Emergency:</strong> Call immediately for severe reactions</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Info className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-900">Important Reminders</h3>
              </div>
              <div className="space-y-2 text-blue-800">
                <p>• Always inform medical professionals about insect stings</p>
                <p>• Carry emergency medical information if you have known allergies</p>
                <p>• Never attempt these activities alone or without supervision</p>
                <p>• Consult healthcare providers before any participation</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Legal Disclaimer
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              <strong>Educational Purpose Only:</strong> The content on Sting.my is provided for educational 
              and entertainment purposes only. It is not intended as medical advice, safety guidance, 
              or instruction for replicating these activities.
            </p>
            <p>
              <strong>No Medical Advice:</strong> Nothing on this website constitutes medical advice. 
              Always consult with qualified healthcare professionals before making any decisions 
              related to your health or safety.
            </p>
            <p>
              <strong>Assumption of Risk:</strong> Viewing or participating in any activities related 
              to this content is done at your own risk. We strongly discourage any attempt to 
              replicate these activities without proper medical supervision.
            </p>
            <p>
              <strong>Limitation of Liability:</strong> Sting.my and its operators are not responsible 
              for any injuries, allergic reactions, or other medical conditions that may result 
              from viewing this content or attempting similar activities.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 mt-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Safety First, Always
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            If you have any questions about safety protocols or medical considerations, 
            please consult with qualified healthcare professionals before proceeding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Medical Team
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Safety Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
