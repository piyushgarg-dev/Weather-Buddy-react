import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
const Navbar = () => {
  const [query, setquery] = useState();
  let URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=patiala`;
  const handelchange = e => {
    setquery(e.target.value);
  };
  const handelclick = e => {
    e.preventDefault();
    URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`;
    fetch(URL, option)
      .then(res => res.json())
      .then(data => {
        setdata(data);
      });
  };

  const [data, setdata] = useState([]);

  const option = {
    methos: "GET",
    headers: new Headers({
      "x-rapidapi-key": "55816bf15emshbef5892f101cc0cp1f2484jsnd49b93aef792",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    })
  };
  useEffect(() => {
    console.log('URL:',query);
    fetch(URL, option)
      .then(res => res.json())
      .then(data => {
        setdata(data);
      });
  }, [URL]);
  if (data.length != 0) {
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

        <Card info={data} />
      </div>
    );
  } else {
    return <div />;
  }
};

export default Navbar;
