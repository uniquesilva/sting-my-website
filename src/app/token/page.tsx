'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Award, 
  Vote, 
  Gift, 
  Clock, 
  CheckCircle,
  Star,
  Trophy,
  Coins,
  Target
} from 'lucide-react'

interface TokenReward {
  id: string
  title: string
  description: string
  tokens: number
  icon: React.ComponentType<{ className?: string }>
  category: 'participation' | 'voting' | 'milestone' | 'community'
  completed?: boolean
}

interface Poll {
  id: string
  question: string
  options: string[]
  votes: number[]
  endDate: string
  status: 'active' | 'completed'
}

const tokenRewards: TokenReward[] = [
  {
    id: 'daily-visit',
    title: 'Daily Visit',
    description: 'Visit the site and check progress',
    tokens: 10,
    icon: Clock,
    category: 'participation',
    completed: true
  },
  {
    id: 'level-complete',
    title: 'Watch Level Completion',
    description: 'Watch a full sting level video',
    tokens: 50,
    icon: CheckCircle,
    category: 'participation',
    completed: true
  },
  {
    id: 'vote-poll',
    title: 'Vote in Polls',
    description: 'Participate in community polls',
    tokens: 25,
    icon: Vote,
    category: 'voting',
    completed: false
  },
  {
    id: 'share-content',
    title: 'Share Content',
    description: 'Share educational content on social media',
    tokens: 30,
    icon: Users,
    category: 'community',
    completed: false
  },
  {
    id: 'milestone-3',
    title: 'Level 3 Milestone',
    description: 'Reach Level 3 completion',
    tokens: 100,
    icon: Trophy,
    category: 'milestone',
    completed: true
  },
  {
    id: 'referral',
    title: 'Refer a Friend',
    description: 'Bring new community members',
    tokens: 75,
    icon: Gift,
    category: 'community',
    completed: false
  }
]

const activePolls: Poll[] = [
  {
    id: 'level-4-timing',
    question: 'When should we schedule Level 4 (Bald-faced Hornet)?',
    options: ['This weekend', 'Next week', 'Wait for better weather', 'Let the team decide'],
    votes: [45, 32, 18, 5],
    endDate: '2024-04-15',
    status: 'active'
  },
  {
    id: 'level-5-prep',
    question: 'How should we prepare for Level 5 (Velvet Ant)?',
    options: ['Medical consultation', 'Pain management prep', 'Psychological prep', 'All of the above'],
    votes: [12, 8, 15, 65],
    endDate: '2024-04-20',
    status: 'active'
  }
]

const completedPolls: Poll[] = [
  {
    id: 'level-3-insect',
    question: 'Which insect should we use for Level 3?',
    options: ['Paper Wasp', 'Yellowjacket', 'Mud Dauber'],
    votes: [78, 22, 0],
    endDate: '2024-03-01',
    status: 'completed'
  }
]

export default function TokenPage() {
  const [activeTab, setActiveTab] = useState<'rewards' | 'polls' | 'leaderboard'>('rewards')
  const [userTokens] = useState(285)
  const [userLevel] = useState(3)

  const totalTokens = tokenRewards.reduce((sum, reward) => 
    reward.completed ? sum + reward.tokens : sum, 0
  )

  const categoryColors = {
    participation: 'bg-blue-100 text-blue-800',
    voting: 'bg-green-100 text-green-800',
    milestone: 'bg-purple-100 text-purple-800',
    community: 'bg-orange-100 text-orange-800'
  }


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            STING Token on pump.fun
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade STING tokens on pump.fun, vote on community decisions, 
            and unlock exclusive content. Be part of shaping the Sting.my experience live on-chain.
          </p>
        </div>

        {/* Token Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 mb-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your STING Token Balance</h2>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold">{userTokens}</div>
                <div className="flex items-center space-x-2">
                  <Coins className="h-8 w-8" />
                  <span className="text-lg">STING tokens</span>
                </div>
              </div>
              <p className="text-red-100 mt-2">Level {userLevel} Community Member • Trading on pump.fun</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{totalTokens}</div>
              <div className="text-red-100">Total Earned</div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'rewards', label: 'Rewards', icon: Award },
                { id: 'polls', label: 'Voting', icon: Vote },
                { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'rewards' | 'polls' | 'leaderboard')}
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
            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Earn Tokens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tokenRewards.map((reward, index) => {
                    const Icon = reward.icon
                    return (
                      <motion.div
                        key={reward.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-6 rounded-xl border-2 ${
                          reward.completed 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg ${
                            reward.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              {reward.tokens}
                            </div>
                            <div className="text-sm text-gray-500">tokens</div>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {reward.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{reward.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[reward.category]
                          }`}>
                            {reward.category}
                          </span>
                          {reward.completed && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Polls Tab */}
            {activeTab === 'polls' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Voting</h3>
                
                {/* Active Polls */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Vote className="h-5 w-5 mr-2 text-red-500" />
                    Active Polls
                  </h4>
                  <div className="space-y-6">
                    {activePolls.map((poll, index) => (
                      <motion.div
                        key={poll.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h5 className="text-lg font-semibold text-gray-900">
                            {poll.question}
                          </h5>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Active
                          </span>
                        </div>
                        <div className="space-y-3 mb-4">
                          {poll.options.map((option, idx) => {
                            const totalVotes = poll.votes.reduce((sum, vote) => sum + vote, 0)
                            const percentage = totalVotes > 0 ? (poll.votes[idx] / totalVotes) * 100 : 0
                            return (
                              <div key={idx} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-700">{option}</span>
                                  <span className="text-sm text-gray-500">
                                    {poll.votes[idx]} votes ({percentage.toFixed(1)}%)
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">
                            Ends: {new Date(poll.endDate).toLocaleDateString()}
                          </p>
                          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                            Vote Now (25 tokens)
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Completed Polls */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-gray-500" />
                    Recent Results
                  </h4>
                  <div className="space-y-4">
                    {completedPolls.map((poll, index) => (
                      <motion.div
                        key={poll.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-gray-900">{poll.question}</h5>
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            Completed
                          </span>
                        </div>
                        <div className="space-y-2">
                          {poll.options.map((option, idx) => {
                            const totalVotes = poll.votes.reduce((sum, vote) => sum + vote, 0)
                            const percentage = totalVotes > 0 ? (poll.votes[idx] / totalVotes) * 100 : 0
                            const isWinner = poll.votes[idx] === Math.max(...poll.votes)
                            return (
                              <div key={idx} className={`flex items-center justify-between p-2 rounded ${
                                isWinner ? 'bg-green-50' : 'bg-white'
                              }`}>
                                <span className={`${isWinner ? 'font-semibold text-green-800' : 'text-gray-700'}`}>
                                  {option} {isWinner && '👑'}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {poll.votes[idx]} votes ({percentage.toFixed(1)}%)
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Leaderboard</h3>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rank
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Member
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tokens
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Level
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Badges
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { rank: 1, name: 'StingMaster', tokens: 1250, level: 7, badges: ['Early Adopter', 'Level 3 Complete'] },
                          { rank: 2, name: 'BugHunter', tokens: 980, level: 6, badges: ['Active Voter', 'Community Helper'] },
                          { rank: 3, name: 'EntomologyFan', tokens: 875, level: 5, badges: ['Content Creator'] },
                          { rank: 4, name: 'PainTolerance', tokens: 720, level: 4, badges: ['Daily Visitor'] },
                          { rank: 5, name: 'InsectLover', tokens: 650, level: 4, badges: ['Social Sharer'] }
                        ].map((member) => (
                          <tr key={member.rank} className={member.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <div className="flex items-center">
                                {member.rank === 1 && <Trophy className="h-5 w-5 text-yellow-500 mr-2" />}
                                {member.rank === 2 && <Star className="h-5 w-5 text-gray-400 mr-2" />}
                                {member.rank === 3 && <Star className="h-5 w-5 text-orange-500 mr-2" />}
                                #{member.rank}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {member.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <div className="flex items-center">
                                <Coins className="h-4 w-4 text-yellow-500 mr-1" />
                                {member.tokens}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Level {member.level}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex flex-wrap gap-1">
                                {member.badges.map((badge, idx) => (
                                  <span key={idx} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {badge}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Token Utility */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Token Utility</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Vote & Decide</h4>
              <p className="text-gray-600">Use tokens to vote on upcoming sting challenges and community decisions.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Gift className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Content</h4>
              <p className="text-gray-600">Unlock behind-the-scenes content, educational materials, and premium features.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Status</h4>
              <p className="text-gray-600">Higher token balances unlock community privileges and recognition.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Earning Tokens Today
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Join our community, participate in polls, and earn tokens through 
            educational engagement and community building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Trade on pump.fun
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
