import React from 'react'
import { useFavourite } from '../../components/Contexts'
export default function Collection() {
  const {favHero} = useFavourite()
  console.log(favHero)
  return (
    <>
    <div>Collection</div>

    {favHero.map(hero => (
            <div key={hero.id} >
              <h1>{hero.name}</h1>
            </div>
          ))}
    </>
  )
}
{/* <div key={hero.id} className='show-card'>
              <h3>{hero.name} ({hero.appearance.gender })</h3>
              <img src={hero.images.sm} alt={hero.name} />
              <Button hero = {hero} />
              <ReadStory/>
            </div> */}