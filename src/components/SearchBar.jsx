import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="glass-effect card-shadow rounded-2xl p-2 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 px-4">
          <MapPin className="text-purple-600" size={24} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a city..."
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none py-3 text-lg"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-xl px-6 py-3 flex items-center gap-2 text-white font-medium"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
