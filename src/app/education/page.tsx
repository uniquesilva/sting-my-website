'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Search, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Heart,
  Brain,
  Globe,
  Zap
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

const articles: Article[] = [
  {
    id: 'schmidt-pain-index',
    title: 'Understanding the Schmidt Sting Pain Index',
    excerpt: 'Dr. Justin Schmidt\'s groundbreaking research that quantified insect sting pain on a scale of 1-4, revolutionizing our understanding of entomology.',
    content: 'The Schmidt Sting Pain Index, developed by entomologist Dr. Justin Schmidt, is a scale rating the relative pain caused by different hymenopteran stings. Schmidt personally experienced and rated 83 different stings from 78 species, creating one of the most comprehensive pain studies in entomology...',
    author: 'Dr. Sarah Entomologist',
    date: '2024-03-15',
    readTime: '8 min',
    category: 'Science',
    tags: ['Pain Index', 'Research', 'Entomology', 'Schmidt'],
    featured: true
  },
  {
    id: 'bullet-ant-ecology',
    title: 'The Bullet Ant: Amazon\'s Most Feared Insect',
    excerpt: 'Explore the fascinating ecology of Paraponera clavata, from its role in Amazonian ecosystems to indigenous pain rituals.',
    content: 'The bullet ant (Paraponera clavata) is one of the most fascinating insects in the Amazon rainforest. Despite its fearsome reputation, this ant plays crucial roles in ecosystem health...',
    author: 'Prof. Maria Rainforest',
    date: '2024-03-10',
    readTime: '12 min',
    category: 'Ecology',
    tags: ['Bullet Ant', 'Amazon', 'Ecology', 'Indigenous Culture'],
    featured: true
  },
  {
    id: 'venom-mechanisms',
    title: 'How Insect Venom Works: A Biochemical Perspective',
    excerpt: 'Dive deep into the molecular mechanisms that make insect stings so effective, from neurotoxins to inflammatory responses.',
    content: 'Insect venom is a complex cocktail of proteins, peptides, and small molecules designed to incapacitate prey or defend against threats. Understanding these mechanisms helps us appreciate both the danger and the potential medical applications...',
    author: 'Dr. James Biochemist',
    date: '2024-03-08',
    readTime: '10 min',
    category: 'Biochemistry',
    tags: ['Venom', 'Biochemistry', 'Neurotoxins', 'Medical Research'],
    featured: false
  },
  {
    id: 'allergic-reactions',
    title: 'Insect Sting Allergies: Understanding the Risks',
    excerpt: 'A comprehensive guide to allergic reactions, anaphylaxis, and how to stay safe when working with stinging insects.',
    content: 'Allergic reactions to insect stings can range from mild local reactions to life-threatening anaphylaxis. Understanding these reactions is crucial for anyone working with or studying stinging insects...',
    author: 'Dr. Emily Allergist',
    date: '2024-03-05',
    readTime: '7 min',
    category: 'Medical',
    tags: ['Allergies', 'Anaphylaxis', 'Safety', 'Medical'],
    featured: false
  },
  {
    id: 'tarantula-hawk-behavior',
    title: 'Tarantula Hawk Wasp: Nature\'s Ultimate Parasitoid',
    excerpt: 'Discover the incredible hunting behavior of tarantula hawk wasps and their complex relationship with tarantulas.',
    content: 'The tarantula hawk wasp (Pepsis genus) represents one of nature\'s most fascinating examples of parasitoid behavior. These wasps hunt tarantulas not for food, but to provide for their offspring...',
    author: 'Dr. Alex Parasitologist',
    date: '2024-03-01',
    readTime: '9 min',
    category: 'Behavior',
    tags: ['Tarantula Hawk', 'Parasitoid', 'Behavior', 'Hunting'],
    featured: false
  },
  {
    id: 'pain-neuroscience',
    title: 'The Neuroscience of Pain: Why Some Stings Hurt More',
    excerpt: 'Explore the fascinating intersection of entomology and neuroscience in understanding how our brains process different types of pain.',
    content: 'Pain is not just a physical sensation—it\'s a complex neurological process that involves multiple brain regions and neurotransmitter systems. Understanding how different types of insect venom affect these systems...',
    author: 'Dr. Rachel Neuroscientist',
    date: '2024-02-28',
    readTime: '11 min',
    category: 'Neuroscience',
    tags: ['Neuroscience', 'Pain', 'Brain', 'Research'],
    featured: false
  }
]

const categories = ['All', 'Science', 'Ecology', 'Biochemistry', 'Medical', 'Behavior', 'Neuroscience']

export default function EducationPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const categoryIcons = {
    Science: BookOpen,
    Ecology: Globe,
    Biochemistry: Brain,
    Medical: Heart,
    Behavior: Zap,
    Neuroscience: Brain
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the fascinating world of entomology, pain science, and insect ecology. 
            Learn from leading researchers and experts in the field.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => {
              const CategoryIcon = categoryIcons[article.category as keyof typeof categoryIcons] || BookOpen
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <CategoryIcon className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author.split(' ')[1]}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Research
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles on entomology, 
            pain science, and insect ecology research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedArticle.category}
                    </span>
                    {selectedArticle.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedArticle.title}
                  </h1>
                  <div className="flex items-center space-x-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-6">{selectedArticle.excerpt}</p>
                <div className="text-gray-700 leading-relaxed">
                  {selectedArticle.content}
                  <p className="mt-4">
                    This is a preview of the full article. In a real implementation, 
                    this would contain the complete article content with proper formatting, 
                    images, and scientific references.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
