import Link from 'next/link'
import { Zap, Twitter, Youtube, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    main: [
      { name: 'Sting Levels', href: '/levels' },
      { name: 'Education', href: '/education' },
      { name: 'Live Stream', href: '/live' },
      { name: 'Token', href: '/token' },
      { name: 'Safety', href: '/safety' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'YouTube', href: '#', icon: Youtube },
      { name: 'Instagram', href: '#', icon: Instagram },
      { name: 'Email', href: 'mailto:contact@sting.my', icon: Mail },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Sting.my</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The ultimate insect sting challenge inspired by Coyote Peterson. 
              Educational, entertaining, and tokenized experiences that push the boundaries 
              of pain tolerance while promoting entomology education.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sting.my. All rights reserved. Educational content only.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              ⚠️ Warning: This content involves insect stings. Consult medical professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
