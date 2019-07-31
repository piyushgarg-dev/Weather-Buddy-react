import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
const Navbar = ({mycity}) => {
  const [data, setdata] = useState([]);
  const [city,setcity]=useState();
  const option = {
    methos: "GET",
    headers: new Headers({
      "x-rapidapi-key": "55816bf15emshbef5892f101cc0cp1f2484jsnd49b93aef792",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    })
  };
  useEffect(() => {
      let URL = '';
      if(mycity!==undefined){
        
        URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${mycity}`;
        
      }
      else{
        URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=patiala`;
       
      }
    fetch(URL, option)
      .then(res => res.json())
      .then(data => {
        setdata(data);
      });
     
  }, []);
  if (data.length != 0) {
    return (
      <div>
        <Card info={data} />
      </div>
    );
  } else {
    return <div />;
  }
};

export default Navbar;
