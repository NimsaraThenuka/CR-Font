import { motion } from 'motion/react';
import { Award, Users, Globe, Heart, Sparkles, Shield, CheckCircle, Target, Eye, Gem } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Gem,
      title: 'Quality & Authenticity',
      description: 'We are committed to providing only the finest, genuine Sri Lankan gemstones and jewelry. Every gem is meticulously sourced and each piece is crafted to the highest standards of quality.',
    },
    {
      icon: Sparkles,
      title: 'Luxury & Elegance',
      description: 'We believe that luxury is in the details. Our designs embody elegance and sophistication, crafted for clients who seek the ultimate in exclusivity and refinement.',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Trust is the foundation of our brand. We build long-term relationships with our clients by offering transparency, authenticity, and a commitment to delivering only the best.',
    },
    {
      icon: Heart,
      title: 'Customer-Centricity',
      description: 'Our clients are at the heart of everything we do. We are dedicated to providing exceptional service and creating personalized experiences that exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Sustainability & Ethics',
      description: 'We value ethical sourcing and sustainable practices. We are dedicated to supporting the local community and ensuring that our gemstones are sourced responsibly.',
    },
    {
      icon: Award,
      title: 'Innovation & Craftsmanship',
      description: 'We blend traditional craftsmanship with modern design to create timeless pieces. Our artisans continuously innovate while maintaining the essence of Sri Lanka\'s rich gem-making heritage.',
    },
  ];

  const highlights = [
    {
      icon: Gem,
      title: 'Gemstone Collections',
      description: 'From the iconic Ceylon sapphires to captivating rubies and emeralds, each gem is handpicked for its exceptional brilliance and expertly crafted into exquisite jewelry.',
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Every gemstone undergoes rigorous quality checks to ensure that only the most brilliant and flawless gems make it into our jewelry collections.',
    },
    {
      icon: Shield,
      title: 'Trust Built on Excellence',
      description: 'We provide only genuine Ceylon gemstones, incorporated into jewelry pieces crafted with integrity and authenticity. Our transparent processes ensure peace of mind.',
    },
    {
      icon: Heart,
      title: 'Exceptional Service',
      description: 'From personalized consultations to custom-designed pieces, we guide you every step of the way to create jewelry that meets your specific desires.',
    },
    {
      icon: Sparkles,
      title: 'Exclusivity & Luxury',
      description: 'Each piece is designed for those who appreciate the rare and extraordinary, adding a touch of sophistication and elegance to your collection.',
    },
    {
      icon: Globe,
      title: 'Heritage & Craftsmanship',
      description: 'With deep roots in Sri Lanka\'s rich gem heritage, we blend traditional craftsmanship with modern design innovation to create timeless masterpieces.',
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-teal-100 mb-6"
            >
              About Us
            </motion.h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-teal-200 leading-relaxed"
            >
              Where luxury, quality, and trust come together
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main About Story */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 rounded-3xl p-8 md:p-12 border border-teal-500/20"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white text-lg leading-relaxed mb-6">
                Welcome to <strong>Chrish Royal</strong>, a prestigious brand under CSK Agro Home Pvt Ltd, established in 2022. We specialize in exporting high-quality Sri Lankan gems and jewelry to discerning clients around the globe. Our journey began with a vision to bring the exquisite beauty and timeless elegance of Sri Lanka's renowned gemstones to the world stage, and we have since built a reputation as a trusted brand within Sri Lanka's luxurious gem and jewelry industry.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                At Chrish Royal, we pride ourselves on offering only the finest, genuine gemstones sourced directly from Sri Lanka's most celebrated mines. Our collection showcases the brilliance and richness of <strong>Ceylon sapphires, rubies</strong>, and other precious stones, which are meticulously crafted into premium, unique, and luxury designs by our master artisans. Each piece of jewelry is a blend of traditional craftsmanship and contemporary design, ensuring that our creations are not only visually stunning but also a true testament to quality.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                Our commitment to excellence, integrity, and customer satisfaction sets us apart in the competitive world of luxury gems. We understand that our clients seek more than just gemstones—they seek a symbol of trust, elegance, and exclusivity. That's why every piece from Chrish Royal is carefully curated to meet the highest standards of quality and authenticity.
              </p>

              <p className="text-white text-lg leading-relaxed">
                Whether you are an individual looking for a statement piece or a business in need of premium gemstones for your collection, Chrish Royal offers a world of elegance and refinement, where each gem tells a unique story of Sri Lanka's rich heritage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-8 md:p-12 text-white"
            >
              <Eye className="w-12 h-12 mb-6" />
              <h3 className="text-3xl font-serif mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the leading global provider of premium Sri Lankan gemstones and jewelry, known for our commitment to quality, authenticity, and timeless luxury. We aim to bring the unmatched beauty and elegance of Ceylon gems to the world, creating lasting relationships with our clients through trust, excellence, and superior craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] rounded-3xl p-8 md:p-12 border border-teal-500/20"
            >
              <Target className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-3xl font-serif text-teal-100 mb-4">Our Mission</h3>
              <p className="text-teal-200 leading-relaxed">
                At Chrish Royal, our mission is to offer the highest quality, genuine Sri Lankan gemstones and jewelry, crafted with precision and artistry. We are dedicated to delivering exclusive, luxury designs that reflect our heritage and commitment to excellence. By prioritizing customer satisfaction, ethical practices, and innovation, we seek to redefine luxury in the global jewelry market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      {value.title}
                    </h3>
                    
                    <p className="text-teal-200 text-center text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-teal-100 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-teal-200 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '2022', label: 'Established' },
                { value: '100%', label: 'Genuine Gems' },
                { value: 'Global', label: 'Reach' },
                { value: 'Premium', label: 'Quality' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 rounded-3xl p-8 md:p-12 border border-teal-500/20"
          >
            <Sparkles className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-teal-100 mb-6">
              Discover the brilliance of Sri Lanka
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              Crafted for those who appreciate the finest—Chrish Royal, where luxury, quality, and trust come together.
            </p>
            <p className="text-teal-300 text-xl font-serif italic">
              At Chrish Royal, we are more than just a jewelry brand—we are a symbol of timeless luxury, impeccable quality, and trust.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}