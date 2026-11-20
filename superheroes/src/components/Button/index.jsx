import { useFavourite } from '../Contexts';

export default function Button({ hero }) {
  const { favHero, setFavHero } = useFavourite();

  const clickLike = favHero.some(item => item.id === hero.id);

  function addToCollection() {
    if (clickLike) {
      setFavHero(favHero.filter(item => item.id !== hero.id));
    } else {
      setFavHero([...favHero, hero]);
    }
  }

  return (
    <div>
      <button type="button" onClick={addToCollection}>
        {clickLike ? "Remove from collection" : "Add to Collection"}
      </button>
    </div>
  );
}