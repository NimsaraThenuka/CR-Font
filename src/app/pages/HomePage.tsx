import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '@/app/components/HeroSlider';
import { ProductCard } from '@/app/components/ProductCard';
import { Sparkles, Award, Shield, Gem, ArrowRight } from 'lucide-react';
import { gemsProducts, jewelryProducts } from '@/app/data/products';

export function HomePage() {
  const features = [
    {
      icon: Gem,
      title: 'Premium Quality',
      description: 'Handpicked gems and precious metals from around the world',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in jewelry craftsmanship',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Every piece comes with our lifetime guarantee',
    },
    {
      icon: Sparkles,
      title: 'Custom Design',
      description: 'Create your dream jewelry with our master artisans',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <HeroSlider />
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">
              Why Choose Chrish Royal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 mx-auto"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-teal-100 mb-3 text-center">
                      {feature.title}
                    </h3>
                    
                    <p className="text-teal-200 text-center text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gems Collection Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Gem className="w-12 h-12 text-teal-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">
              Premium Gemstone Collection
            </h2>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto">
              Discover our curated selection of rare and precious gemstones from around the world
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemsProducts.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/collections/gems">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(94, 234, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                View All Gemstones
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Jewelry Collection Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-teal-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">
              Luxury Jewelry Collection
            </h2>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto">
              Handcrafted jewelry pieces that celebrate life's most precious moments
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {jewelryProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/collections/jewelry">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(94, 234, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                View All Jewelry
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Crafting Excellence Since 1995
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-transparent mb-6" />
              
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                At Chrish Royal, we believe that every piece of jewelry tells a story. For over 25 years, we've been crafting timeless pieces that celebrate life's most precious moments.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex-1 min-w-[140px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30"
                  >
                    <div className="text-3xl font-bold text-teal-400 mb-1">25+</div>
                    <div className="text-white/70 text-sm">Years Experience</div>
                  </motion.div>
                </div>
                
                <div className="flex-1 min-w-[140px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30"
                  >
                    <div className="text-3xl font-bold text-teal-400 mb-1">50K+</div>
                    <div className="text-white/70 text-sm">Happy Clients</div>
                  </motion.div>
                </div>
                
                <div className="flex-1 min-w-[140px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30"
                  >
                    <div className="text-3xl font-bold text-teal-400 mb-1">100+</div>
                    <div className="text-white/70 text-sm">Master Artisans</div>
                  </motion.div>
                </div>
              </div>

              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-teal-400 text-white font-medium rounded-full hover:bg-teal-400/10 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luxury Jewelry"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-teal-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-teal-400/30 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-serif text-white mb-6"
              >
                Ready to Find Your Perfect Piece?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto"
              >
                Book a consultation with our jewelry experts or visit our showroom to explore our exclusive collection.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-teal-600 font-medium rounded-full hover:bg-teal-50 transition-all duration-300 shadow-lg"
                  >
                    Book Consultation
                  </motion.button>
                </Link>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Visit Showroom
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}