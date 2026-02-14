import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { Gem, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import { gemsProducts, jewelryProducts } from '@/app/data/products';
import { ProductCard } from '@/app/components/ProductCard';
import { useState } from 'react';

export function CollectionPage() {
  const { type } = useParams<{ type: 'gems' | 'jewelry' }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const products = type === 'gems' ? gemsProducts : jewelryProducts;
  const isGems = type === 'gems';

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and sort products
  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => 
      parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
    );
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => 
      parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
    );
  }

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
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              {isGems ? (
                <Gem className="w-16 h-16 text-teal-400 mx-auto" />
              ) : (
                <Sparkles className="w-16 h-16 text-teal-400 mx-auto" />
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-teal-100 mb-6"
            >
              {isGems ? 'Premium Gemstones' : 'Luxury Jewelry'}
            </motion.h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-teal-200 leading-relaxed"
            >
              {isGems 
                ? 'Discover our curated selection of rare and precious gemstones from around the world'
                : 'Handcrafted jewelry pieces that celebrate life\'s most precious moments'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 sticky top-20 z-10 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
          >
            {/* Category Filter */}
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center gap-2 min-w-fit">
                <Filter className="w-4 h-4 text-teal-400" />
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Filter</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${ 
                      selectedCategory === category
                        ? 'bg-teal-500 text-black border-teal-500 shadow-lg shadow-teal-500/30'
                        : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-10 bg-white/10" />

            {/* Sort Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-fit">
                <SlidersHorizontal className="w-4 h-4 text-teal-400" />
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Sort</span>
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-6 py-2.5 pr-10 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-white/20"
                  style={{ minWidth: '200px' }}
                >
                  <option value="featured" className="bg-black">Featured</option>
                  <option value="price-low" className="bg-black">Price: Low to High</option>
                  <option value="price-high" className="bg-black">Price: High to Low</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="hidden lg:block w-px h-10 bg-white/10" />
            
            <div className="lg:min-w-fit">
              <p className="text-white/50 text-sm">
                <span className="font-semibold text-teal-400">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-teal-200 text-lg">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
                Our experts can help you create a custom piece or find exactly what you need
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-teal-600 font-medium rounded-full hover:bg-teal-50 transition-all duration-300 shadow-lg"
              >
                Contact Our Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}