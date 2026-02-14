import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Award, Sparkles, Heart, Share2, ZoomIn } from 'lucide-react';
import { allProducts } from '@/app/data/products';
import { ProductCard } from '@/app/components/ProductCard';
import { useState } from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  
  const product = allProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-teal-100 mb-4">Product Not Found</h1>
          <Link to="/" className="text-teal-400 hover:text-teal-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && (p.type === product.type || p.category === product.category))
    .slice(0, 4);

  const benefits = [
    { icon: Shield, text: 'Lifetime Warranty' },
    { icon: Award, text: 'Certified Authentic' },
    { icon: Sparkles, text: 'Premium Quality' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden group cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4f4d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {product.type === 'gem' ? 'Premium Gemstone' : 'Luxury Jewelry'}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </motion.div>

              {/* Thumbnail Gallery (Mock) */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-lg overflow-hidden cursor-pointer border-2 border-teal-500/30 hover:border-teal-400 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-3"
                >
                  <span className="text-teal-400 text-sm font-medium px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20">
                    {product.category}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-serif text-teal-100 mb-4"
                >
                  {product.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-teal-400 mb-6"
                >
                  {product.price}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="border-t border-b border-teal-500/20 py-6"
              >
                <p className="text-teal-200 leading-relaxed text-lg">
                  {product.description}
                </p>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-6 rounded-xl border border-teal-500/20"
              >
                <h3 className="text-xl font-semibold text-teal-100 mb-4">Product Details</h3>
                <div className="space-y-3">
                  {Object.entries(product.details).map(([key, value], index) => (
                    value && (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-teal-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-teal-100 font-medium">{value}</span>
                      </div>
                    )
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-semibold text-teal-100">Key Features</h3>
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-200">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-4"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-teal-500/10 to-transparent p-4 rounded-xl border border-teal-500/20 text-center"
                    >
                      <Icon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                      <p className="text-teal-200 text-sm">{benefit.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(94, 234, 212, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full hover:from-teal-400 hover:to-teal-500 transition-all duration-300 shadow-lg"
                >
                  Inquire Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 border-2 border-teal-400 text-teal-300 rounded-full hover:bg-teal-400/10 transition-all duration-300"
                >
                  <Heart className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 border-2 border-teal-400 text-teal-300 rounded-full hover:bg-teal-400/10 transition-all duration-300"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">
                You May Also Like
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 text-center"
            >
              <Shield className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-teal-100 mb-3">Secure Purchase</h3>
              <p className="text-teal-200 text-sm">All transactions are encrypted and secure</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 text-center"
            >
              <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-teal-100 mb-3">Authenticity Guaranteed</h3>
              <p className="text-teal-200 text-sm">Every piece comes with certification</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#0a4f4d] to-[#083a38] p-8 rounded-2xl border border-teal-500/20 text-center"
            >
              <Sparkles className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-teal-100 mb-3">Expert Consultation</h3>
              <p className="text-teal-200 text-sm">Our specialists are here to help</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
