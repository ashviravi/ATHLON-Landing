import { motion } from 'framer-motion';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';

export const AISearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    setIsLoading(true);
    setSuggestions([]);

    // Simulate an API call or AI processing
    setTimeout(() => {
      setSuggestions([
        'Available basketball courts this Sunday between 2-6 PM',
        'Popular time slots for basketball on weekends',
        'Indoor basketball courts near you',
        'Basketball courts with lighting for night games',
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full px-6 py-4 border border-white/10">
        <Search className="w-5 h-5 text-gray-300" />
        <input
          type="text"
          placeholder="Find available basketball courts on Sunday..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-300"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSearch}
          className="text-gray-300 hover:text-white transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Suggestions in Card Layout */}
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <p className="text-sm text-gray-300">{suggestion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};