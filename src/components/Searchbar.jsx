import React, { useState } from "react";
import Navbar from "./Navbar";
const Searchbar = () => {
  const [query, setquery] = useState();
  const [city, setcity] = useState();

  const handelchange = e => {
    setquery(e.target.value);
  };
  const handelclick = e => {
    e.preventDefault();
    setcity(query);
    console.log(city);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <form onSubmit={handelclick} className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              value={query}
              type="text"
              onChange={handelchange}
              className="form-control"
              placeholder="City"
            />
            <input
              type="submit"
              className="btn btn-success ml-1"
              value="Search"
            />
          </div>
        </form>
      </nav>

      {/* <Navbar mycity={city} /> */}
    </div>
  );
};
export default Searchbar;
