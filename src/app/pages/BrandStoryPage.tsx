import { motion } from 'motion/react';
import { Gem, Crown, Sparkles, Globe2, Heart, Shield } from 'lucide-react';

export function BrandStoryPage() {
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
              <Crown className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif text-teal-100 mb-6"
            >
              Chrish Royal
            </motion.h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-teal-300 leading-relaxed font-serif italic"
            >
              Nature's Luxury, Crafted for Royalty
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Brand Story */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <p className="text-white text-lg leading-relaxed mb-6">
                At Chrish Royal, we believe true luxury begins deep within the earth. Rooted in the heart of Sri Lanka, globally revered as the "Island of Gems" — our brand is built on a legacy of heritage, artistry, and an unwavering commitment to excellence.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                With over a century of tradition in gemstone mining and craftsmanship, Chrish Royal represents more than jewelry; we represent the timeless beauty of nature shaped into enduring elegance. Our gemstones, handpicked from Sri Lanka's most distinguished mines, are known for their vivid hues and remarkable clarity — qualities that have made Ceylon gems among the most sought-after in the world.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                Every stone we select is transformed by master artisans into captivating works of art. With unmatched attention to detail and dedication to perfection, our craftsmen bring each gem to life, creating pieces that embody sophistication, precision, and enduring value.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                Chrish Royal caters to a discerning global clientele — individuals who seek not only beauty but meaning, those who understand that true luxury is defined by heritage, individuality, and an appreciation for craftsmanship that transcends generations. Our collections are more than accessories; they are symbols of power, refinement, and timeless prestige.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                Our pursuit of excellence is evident in every step — from responsible gem sourcing and meticulous design, to the creation of jewelry that stands the test of time. Each Chrish Royal piece is a statement of confidence, culture, and class.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                As we expand globally, we remain passionately committed to preserving the authenticity and natural brilliance of Sri Lanka's gems. Whether worn as a declaration of elegance, a token of love, or a mark of legacy, Chrish Royal is a name that echoes luxury, trust, and heritage.
              </p>

              <p className="text-white text-xl leading-relaxed font-serif italic text-center mt-8">
                From the depths of Ceylon's gem-rich earth to the hands of those who appreciate the extraordinary, Chrish Royal offers more than fine jewelry — we offer treasures to be cherished for generations.
              </p>

              <div className="text-center mt-10">
                <p className="text-teal-300 text-2xl font-serif">
                  Chrish Royal – Timeless. Exquisite. Yours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Pillars */}
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
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gem,
                title: 'Heritage',
                description: 'Over a century of tradition in Sri Lankan gemstone mining and craftsmanship',
              },
              {
                icon: Sparkles,
                title: 'Excellence',
                description: 'Unmatched attention to detail and dedication to perfection in every piece',
              },
              {
                icon: Globe2,
                title: 'Global Reach',
                description: 'Serving discerning clientele worldwide while preserving Sri Lankan authenticity',
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
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
                  <div className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 mx-auto"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-teal-100 mb-3 text-center">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-teal-200 text-center text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
            >
              <Heart className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-serif mb-4">Our Promise</h3>
              <p className="text-white/90 leading-relaxed">
                Each Chrish Royal piece is a statement of confidence, culture, and class. We are committed to preserving the authenticity and natural brilliance of Sri Lanka's gems while creating jewelry that stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] rounded-3xl p-8 md:p-12 border border-teal-500/20"
            >
              <Shield className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-3xl font-serif text-teal-100 mb-4">Responsible Sourcing</h3>
              <p className="text-teal-200 leading-relaxed">
                From responsible gem sourcing and meticulous design to the creation of timeless jewelry, our pursuit of excellence is evident in every step of our process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-teal-100 mb-6">
              A Legacy of Luxury
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Whether worn as a declaration of elegance, a token of love, or a mark of legacy, Chrish Royal is a name that echoes luxury, trust, and heritage. Join us in celebrating the extraordinary beauty of Sri Lankan gems.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
