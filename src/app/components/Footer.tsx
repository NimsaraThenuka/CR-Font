import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ REPLACED figma asset with Cloudinary image
const logoImage =
  'https://res.cloudinary.com/dyp247eoh/image/upload/v1769688036/logo_crish_wqkham.png';

export const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
  ];

  const quickLinks = [
    { name: 'Brand Story', path: '/brand-story' },
    { name: 'About Us', path: '/about' },
    { name: 'Collections', path: '/collections/gems' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-16 pb-8 border-t border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img
                src={logoImage}
                alt="Chrish Royal"
                className="h-16 w-auto mb-4 cursor-pointer"
              />
            </Link>
            <p className="text-white mb-4 text-sm leading-relaxed">
              Nature's Luxury, Crafted for Royalty. Exquisite Sri Lankan gems and jewelry for the discerning global clientele.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-teal-500/20 hover:bg-teal-500 flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 5, color: '#14b8a6' }}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Custom Design', 'Repair & Restoration', 'Appraisal', 'Ring Resizing', 'Cleaning', 'Engraving'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: '#14b8a6' }}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-white text-sm">Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+94778438570" className="text-white hover:text-teal-400 text-sm">
                  +94 77 843 8570
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@chrishroyal.com" className="text-white hover:text-teal-400 text-sm">
                  info@chrishroyal.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800/50 border border-teal-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition-colors text-sm font-medium"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-teal-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2026 Chrish Royal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a href="#" whileHover={{ color: '#14b8a6' }} className="text-gray-400 hover:text-teal-400">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#14b8a6' }} className="text-gray-400 hover:text-teal-400">
              Terms of Service
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#14b8a6' }} className="text-gray-400 hover:text-teal-400">
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};