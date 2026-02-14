import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const slides = [
  {
    id: 1,
    title: 'Timeless Elegance',
    subtitle: "Nature's Luxury, Crafted for Royalty",
    description: "Discover Ceylon's finest gemstones transformed into exquisite masterpieces",
    image: 'https://res.cloudinary.com/dyp247eoh/image/upload/v1769610924/royal1_gxftoo.jpg',
    cta: 'Explore Collection',
  },
  {
    id: 2,
    title: 'Radiant Brilliance',
    subtitle: 'Handcrafted Diamond Excellence',
    description: 'Each piece tells a story of heritage and unmatched craftsmanship',
    image: 'https://images.unsplash.com/photo-1763256614634-7feb3ff79ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwcmluZyUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2OTc0MTE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Shop Rings',
  },
  {
    id: 3,
    title: 'Ceylon Sapphires',
    subtitle: 'The Island of Gems',
    description: "Sri Lanka's most celebrated treasures, handpicked for perfection",
    image: 'https://images.unsplash.com/photo-1767921804162-9c55a278768d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMG5lY2tsYWNlJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3Njk3NDExNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'View Necklaces',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % slides.length;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-400 text-sm tracking-wider uppercase">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-serif mb-6 text-white tracking-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <button className="group relative px-8 py-4 bg-teal-500 text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] rounded-sm">
                  <span className="relative z-10 tracking-wider uppercase font-medium">
                    {slides[currentSlide].cta}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 backdrop-blur-sm border border-teal-500/30 rounded-full hover:bg-teal-500/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 backdrop-blur-sm border border-teal-500/30 rounded-full hover:bg-teal-500/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="group"
          >
            <div
              className={`h-1 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 bg-teal-500'
                  : 'w-8 bg-white/30 group-hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-teal-500/50 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-teal-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}