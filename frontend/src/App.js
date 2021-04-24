//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";

function App() {
  
  const [lst,setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/ratings/")
      .then(res => {
          console.log(res.data);
          setList(res.data)
      })
      .catch(err => console.log(err)); 
  });

  return (
    <div className="App">
        {lst}
    </div>
  );
}

export default App;
