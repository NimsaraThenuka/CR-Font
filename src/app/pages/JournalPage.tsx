import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function JournalPage() {
  const blogs = [
    {
      id: 1,
      title: 'The Timeless Beauty and Rich History of Sri Lankan Gems',
      excerpt: "Sri Lanka, known as the 'Island of Gems,' has a rich history of gemstone mining dating back over 2,000 years. Discover the fascinating journey of Ceylon sapphires, rubies, and more...",
      date: 'January 15, 2026',
      readTime: '8 min read',
      category: 'Heritage',
      image: 'https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwcmluZ3xlbnwxfHx8fDE3Njk1OTIzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Gemstone for Your Jewelry',
      excerpt: 'Selecting the perfect gemstone is a personal journey. Learn about the key factors: color, clarity, cut, and carat, and how they determine the beauty and value of your jewelry...',
      date: 'January 10, 2026',
      readTime: '6 min read',
      category: 'Guide',
      image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbWVyYWxkJTIwbmVja2xhY2V8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'The Art of Gemstone Cutting and Crafting Fine Jewelry',
      excerpt: 'From rough gemstone to stunning jewelry, explore the intricate process of cutting, polishing, and crafting that transforms natural stones into exquisite works of art...',
      date: 'January 5, 2026',
      readTime: '7 min read',
      category: 'Craftsmanship',
      image: 'https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Why Sri Lankan Gems Are Among the Most Coveted in the World',
      excerpt: 'Discover what makes Sri Lankan gemstones so highly sought after — from their unmatched clarity and brilliant colors to their rich historical significance and ethical sourcing...',
      date: 'December 28, 2025',
      readTime: '5 min read',
      category: 'Excellence',
      image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXlsb24lMjBzYXBwaGlyZSUyMGpld2VscnklMjBsdXh1cnl8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 mb-6"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6"
            >
              Our Journal
            </motion.h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-teal-200 leading-relaxed"
            >
              Explore the world of Sri Lankan gems, discover the art of jewelry craftsmanship, and learn about our heritage
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/journal/${blog.id}`}>
                  <div className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a4f4d] via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-teal-300 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-serif text-teal-100 mb-3 group-hover:text-teal-300 transition-colors">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-teal-200 text-sm leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-teal-400 font-medium group-hover:gap-4 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our journal for the latest insights on gems, jewelry, and craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
