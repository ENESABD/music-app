//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";

function App() {
  
  const [lst,setList] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get("http://localhost:8000/api/users/")
      .then(res => setList(res.data))
=======
    axios.get("http://localhost:8000/api/ratings/")
      .then(res => {
          console.log(res.data);
          setList(res.data)
      })
>>>>>>> f1c5922a2e4476e176a3eb9e39e00904a5700c51
      .catch(err => console.log(err)); 
  });

  

  const newItems = list.map((value) => value.username);

  return (
<<<<<<< HEAD
    <div>
        {newItems}
=======
    <div className="App">
        {lst}
>>>>>>> f1c5922a2e4476e176a3eb9e39e00904a5700c51
    </div>
  );
}

export default App;
