import { useEffect, useState } from 'react';
import Button from '../Button';
import ReadStory from '../ReadStory';
import Filter from '../Filter';

export default function SearchForm() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('');
    const [heroData, setHeroData] = useState([]);
    const [gender, setGender] = useState('')


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
 
  

  let searchedHeroes = 

    gender == 'All' ?  heroData.filter(hero => hero.name.toLowerCase().includes(searchString.toLocaleLowerCase()))
    : heroData
        .filter(hero => hero.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
        .filter(hero => hero.appearance.gender == gender)
            
    console.log(searchedHeroes.length)
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

      <Filter
   
      gender = {gender}
      setGender = {setGender}
  
      />

      
        

      {searchedHeroes.map(hero => (
        <div key={hero.id}>
          <h3>{hero.name} ({hero.appearance.gender })</h3>
          <img src={hero.images.sm} alt={hero.name} />
          <Button hero = {hero} />
          <ReadStory/>
        </div>
      ))}. 
    </>
  );
}

//last map of searchHeroes to be reused in useParams for the HeroInfoDashboard