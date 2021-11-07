import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    axios(`https://hidden-ridge-05396.herokuapp.com/search?searchTerm=radius`)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleSearch = (event) => {};

  return (
    <div className="App">
        <div style={{margin: "0 auto", marginTop: '10%'}} >
             <label>Search </label>
             <input type="text" onChange={(e) => handleSearch(e) } />
        </div>
    </div>
  );
}

export default App;
