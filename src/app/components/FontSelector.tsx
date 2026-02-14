import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Type, ChevronDown } from 'lucide-react';
import { useFont, fontOptions } from '../contexts/FontContext';

export const FontSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentFont, setFont } = useFont();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black/50 backdrop-blur-sm border border-teal-500/30 rounded-lg text-white hover:border-teal-400/60 transition-colors"
      >
        <Type className="w-4 h-4 text-teal-400" />
        <span className="text-sm font-medium hidden lg:inline">Font</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-teal-500/30 rounded-lg shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-teal-400 border-b border-teal-500/20 mb-1">
                SELECT FONT FAMILY
              </div>
              <div className="max-h-96 overflow-y-auto custom-scrollbar">
                {fontOptions.map((font, index) => (
                  <motion.button
                    key={font.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => {
                      setFont(font.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-md transition-all mb-1 ${
                      currentFont.id === font.id
                        ? 'bg-teal-500/20 border border-teal-400/50 text-teal-300'
                        : 'text-white hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="font-medium text-sm">{font.displayName}</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {font.bodyFont === font.headingFont 
                        ? `${font.bodyFont}` 
                        : `Heading: ${font.headingFont} • Body: ${font.bodyFont}`
                      }
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 184, 166, 0.7);
        }
      `}</style>
    </div>
  );
};
