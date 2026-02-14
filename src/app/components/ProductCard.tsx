import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id?: string;
  image: string;
  name: string;
  price: string;
  category: string;
  index: number;
}

export const ProductCard = ({ id, image, name, price, category, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewProduct = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-800 hover:border-teal-500/50"
      onClick={handleViewProduct}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
        />

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              // Handle add to cart
            }}
            className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              // Handle add to wishlist
            }}
            className="w-12 h-12 rounded-full bg-white hover:bg-teal-50 text-teal-600 flex items-center justify-center shadow-lg"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleViewProduct}
            className="w-12 h-12 rounded-full bg-white hover:bg-teal-50 text-teal-600 flex items-center justify-center shadow-lg"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <motion.h3
          animate={{ color: isHovered ? '#14b8a6' : '#ffffff' }}
          className="text-xl font-medium mb-2 truncate"
        >
          {name}
        </motion.h3>
        
        <div className="flex items-center justify-between">
          <motion.p
            animate={{
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? '#14b8a6' : '#ffffff',
            }}
            className="text-2xl font-semibold"
          >
            {price}
          </motion.p>
          
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
            }}
            className="flex items-center gap-1 text-yellow-400"
          >
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 right-0 w-20 h-20"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-400/20 to-transparent rounded-tl-full" />
      </motion.div>
    </motion.div>
  );
};