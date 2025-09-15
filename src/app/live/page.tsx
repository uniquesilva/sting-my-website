'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Clock, 
  Users, 
  Calendar, 
  Video, 
  Archive,
  Radio,
  CheckCircle,
  MessageCircle,
  Heart,
  Share2,
  Download
} from 'lucide-react'

interface StreamEvent {
  id: string
  title: string
  description: string
  level: number
  insect: string
  date: string
  time: string
  duration: string
  status: 'upcoming' | 'live' | 'completed'
  viewers?: number
  thumbnail?: string
  category: 'challenge' | 'education' | 'qa' | 'behind-scenes'
}

interface ArchiveVideo {
  id: string
  title: string
  description: string
  level: number
  insect: string
  date: string
  duration: string
  views: number
  likes: number
  thumbnail?: string
  category: 'challenge' | 'education' | 'qa' | 'behind-scenes'
}

const upcomingStreams: StreamEvent[] = [
  {
    id: 'level-3-paper-wasp',
    title: 'Level 3: Paper Wasp Challenge',
    description: 'Join us for the Level 3 sting challenge featuring the Paper Wasp (Polistes dominula). Learn about wasp behavior, nest construction, and pain mechanisms.',
    level: 3,
    insect: 'Paper Wasp',
    date: '2024-04-20',
    time: '14:00',
    duration: '2 hours',
    status: 'upcoming',
    category: 'challenge'
  },
  {
    id: 'level-4-prep',
    title: 'Level 4 Preparation Session',
    description: 'Educational session preparing for Level 4 (Bald-faced Hornet). Medical team discussion, safety protocols, and community Q&A.',
    level: 4,
    insect: 'Bald-faced Hornet',
    date: '2024-04-22',
    time: '19:00',
    duration: '1.5 hours',
    status: 'upcoming',
    category: 'education'
  },
  {
    id: 'community-qa',
    title: 'Community Q&A Session',
    description: 'Weekly community Q&A with the medical team and entomology experts. Ask questions about safety, insects, and the challenge progress.',
    level: 0,
    insect: 'General',
    date: '2024-04-25',
    time: '20:00',
    duration: '1 hour',
    status: 'upcoming',
    category: 'qa'
  }
]

const archiveVideos: ArchiveVideo[] = [
  {
    id: 'level-2-fire-ant',
    title: 'Level 2: Fire Ant Challenge - COMPLETED',
    description: 'Watch the complete Level 2 challenge featuring the imported red fire ant. Includes educational content, safety protocols, and post-sting analysis.',
    level: 2,
    insect: 'Fire Ant',
    date: '2024-02-20',
    duration: '1h 45m',
    views: 15420,
    likes: 892,
    category: 'challenge'
  },
  {
    id: 'level-1-sweat-bee',
    title: 'Level 1: Sweat Bee Challenge - COMPLETED',
    description: 'The beginning of our journey! Level 1 featuring the gentle sweat bee. Perfect introduction to insect stings and educational content.',
    level: 1,
    insect: 'Sweat Bee',
    date: '2024-01-15',
    duration: '1h 20m',
    views: 22150,
    likes: 1205,
    category: 'challenge'
  },
  {
    id: 'safety-protocols',
    title: 'Safety Protocols & Medical Preparation',
    description: 'Behind-the-scenes look at our medical team\'s safety protocols, equipment, and preparation procedures for each sting challenge.',
    level: 0,
    insect: 'General',
    date: '2024-02-10',
    duration: '45m',
    views: 8950,
    likes: 456,
    category: 'behind-scenes'
  },
  {
    id: 'schmidt-index-explained',
    title: 'Understanding the Schmidt Sting Pain Index',
    description: 'Educational deep-dive into Dr. Justin Schmidt\'s groundbreaking research on insect sting pain quantification.',
    level: 0,
    insect: 'General',
    date: '2024-01-25',
    duration: '1h 10m',
    views: 12680,
    likes: 678,
    category: 'education'
  },
  {
    id: 'level-2-prep',
    title: 'Level 2 Preparation: Fire Ant Biology',
    description: 'Educational session covering fire ant biology, behavior, and what to expect from their sting before the actual challenge.',
    level: 2,
    insect: 'Fire Ant',
    date: '2024-02-15',
    duration: '35m',
    views: 7230,
    likes: 334,
    category: 'education'
  },
  {
    id: 'community-qa-1',
    title: 'Community Q&A #1 - January',
    description: 'First community Q&A session answering questions about the project, safety concerns, and upcoming challenges.',
    level: 0,
    insect: 'General',
    date: '2024-01-30',
    duration: '55m',
    views: 4560,
    likes: 189,
    category: 'qa'
  }
]

export default function LivePage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'live' | 'archive'>('upcoming')
  const [selectedVideo, setSelectedVideo] = useState<ArchiveVideo | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="h-5 w-5 text-blue-500" />
      case 'live':
        return <Radio className="h-5 w-5 text-red-500" />
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'border-blue-500 bg-blue-50'
      case 'live':
        return 'border-red-500 bg-red-50'
      case 'completed':
        return 'border-green-500 bg-green-50'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'challenge':
        return 'bg-red-100 text-red-800'
      case 'education':
        return 'bg-blue-100 text-blue-800'
      case 'qa':
        return 'bg-green-100 text-green-800'
      case 'behind-scenes':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Streams & Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch live sting challenges, educational content, and community sessions. 
            Access our complete archive of past streams and educational materials.
          </p>
        </div>

        {/* Live Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Radio className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Currently Offline</h2>
                <p className="text-red-100">Next stream: Level 3 Paper Wasp Challenge - April 20, 2:00 PM</p>
              </div>
            </div>
            <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Set Reminder
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'upcoming', label: 'Upcoming', icon: Calendar },
                { id: 'live', label: 'Live Now', icon: Radio },
                { id: 'archive', label: 'Archive', icon: Archive }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'upcoming' | 'live' | 'archive')}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Upcoming Streams */}
            {activeTab === 'upcoming' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Streams</h3>
                <div className="space-y-6">
                  {upcomingStreams.map((stream, index) => (
                    <motion.div
                      key={stream.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-xl border-2 ${getStatusColor(stream.status)}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(stream.status)}
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(stream.category)}`}>
                              {stream.category}
                            </span>
                            {stream.level > 0 && (
                              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                                Level {stream.level}
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {stream.title}
                          </h4>
                          <p className="text-gray-700 mb-4">{stream.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(stream.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{stream.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Video className="h-4 w-4" />
                              <span>{stream.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                            Set Reminder
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Share
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Now */}
            {activeTab === 'live' && (
              <div className="text-center py-12">
                <Radio className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Live Streams</h3>
                <p className="text-gray-600 mb-6">There are currently no live streams. Check back later or view our upcoming schedule.</p>
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  View Upcoming Streams
                </button>
              </div>
            )}

            {/* Archive */}
            {activeTab === 'archive' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Video Archive</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {archiveVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Play className="h-12 w-12 mx-auto mb-2 text-red-500" />
                          <p className="text-sm">{video.duration}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(video.category)}`}>
                            {video.category}
                          </span>
                          {video.level > 0 && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                              Level {video.level}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Video className="h-3 w-3" />
                              <span>{video.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{video.likes}</span>
                            </div>
                          </div>
                          <span>{new Date(video.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Community Engagement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Engagement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h4>
              <p className="text-gray-600">Join the conversation during live streams with other community members.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Support & Tips</h4>
              <p className="text-gray-600">Show your support and tip the team during challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Share2 className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Share & Discuss</h4>
              <p className="text-gray-600">Share your thoughts and discuss with the community on social media.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Miss the Next Challenge
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Subscribe to notifications and be the first to know when we go live 
            with the next sting challenge or educational session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enable Notifications
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedVideo.category)}`}>
                      {selectedVideo.category}
                    </span>
                    {selectedVideo.level > 0 && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Level {selectedVideo.level}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedVideo.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedVideo.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Video className="h-4 w-4" />
                      <span>{selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{selectedVideo.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 text-red-500" />
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm text-gray-400">Click to play {selectedVideo.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">{selectedVideo.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{selectedVideo.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
