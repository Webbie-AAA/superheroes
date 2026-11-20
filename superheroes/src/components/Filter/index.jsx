export default function Filter({gender, setGender}) {
  


    return (
        <>
            <div className="col-6 col-md-3 my-3">
            <label htmlFor="heroGender" className="form-label">
                Gender
            </label>

            <select
                id="heroGender"
                className="form-select form-select-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>

                <option value="" disabled>Select gender</option>
                <option value='All'>All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

            </select>
            </div>
        </>
    );
    }
