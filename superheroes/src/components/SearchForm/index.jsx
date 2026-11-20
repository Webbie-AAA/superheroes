import { useEffect, useState } from 'react';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const [searchString, setSearchString] = useState('');
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    async function fetchHeroes() {
      const response = await fetch(
        'https://akabab.github.io/superhero-api/api/all.json'
      );

      const data = await response.json();
      setHeroData(data);
    }

    fetchHeroes();
  }, []);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue('');
  }

  const SearchedHeroes = heroData.filter(hero =>
    hero.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Search Your Favourite Hero"
          required
        />
        <button type="submit">Search</button>
      </form>

      {SearchedHeroes.map(hero => (
        <div key={hero.id}>
          <h3>{hero.name}</h3>
          <img src={hero.images.sm} alt={hero.name} />
        </div>
      ))}
    </>
  );
}