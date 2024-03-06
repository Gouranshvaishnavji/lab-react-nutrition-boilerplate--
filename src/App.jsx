import React, { useState, useEffect } from 'react';
import Food from './components/Food';
import FoodData from './components/resources/FoodData';
import './App.css';
import Search from './components/Search';

const App = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Optional: Perform any side effects here, like fetching data from an API
  }, []);

  const handleSearch = (value) => {
    setSearch(value.toLowerCase()); // Search should be case-insensitive
  };

  const filteredFood = FoodData.filter((el) =>
    el.name.toLowerCase().includes(search)
  );

  return (
    <div className="App">
      <Search handleSearch={handleSearch} search={search} />
      {filteredFood.map((el) => (
        <div key={el.id}>
          <Food food={el} />
        </div>
      ))}
    </div>
  );
};

export default App;
