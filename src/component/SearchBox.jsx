// components/SearchBox.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SearchBox = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
    

  };

  return (
    <form 
    onSubmit={handleSearch}
     action="/search" method="GET">
      <input
        type="text"
        name='query'
        placeholder="Search Brand..."
        className=' bg-gray-50 w-24'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
     

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
