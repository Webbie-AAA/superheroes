
import React, { useState, useEffect } from "react";

export default function Filter() {
  const [chosenOption, setChosenOption] = useState("");
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    async function callAllHeroes() {
        try{
            const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`)
            const result = await response.json()
            const filterByGender = result.filter((hero) => hero.appearance.gender === `${chosenOption}`)
            setFilteredData(filterByGender)

        } catch(error){

        }
    }
    callAllHeroes()
  }, [chosenOption])


    console.log(filteredData)

  return (
    <div className="col-6 col-md-3 my-3">
      <label htmlFor="heroGender" className="form-label">
        Gender
      </label>

      <select
        id="heroGender"
        className="form-select form-select-sm"
        value={chosenOption}
        onChange={(e) => setChosenOption(e.target.value)}
      >
        <option value="" disabled>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
}
