import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FontSelector } from './FontSelector';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections/gems' },
    { name: 'Journal', path: '/journal' },
    { name: 'Brand Story', path: '/brand-story' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isHomePage 
          ? 'bg-transparent' 
          : 'bg-black/95 backdrop-blur-md border-b border-teal-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
            >
              <img 
                src="https://res.cloudinary.com/dyp247eoh/image/upload/v1769688036/logo_crish_wqkham.png" 
                alt="Chrish Royal" 
                className="h-16 w-auto" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`transition-colors font-medium tracking-wide ${
                    isActive(item.path)
                      ? 'text-teal-400'
                      : 'text-white hover:text-teal-400'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="h-0.5 bg-teal-400 mt-1"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <FontSelector />
            <motion.button
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-teal-400 transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-teal-400 transition-colors"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-teal-400 transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                0
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-teal-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black border-t border-teal-500/20"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Font Selector for Mobile */}
            <div className="pb-4 border-b border-teal-500/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-teal-400 font-medium">Select Font</span>
                <FontSelector />
              </div>
            </div>
            
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-lg ${
                  isActive(item.path) ? 'text-teal-400' : 'text-white hover:text-teal-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};