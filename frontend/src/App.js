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
=======
    axios.get("http://localhost:8000/api/ratings/")
>>>>>>> 04098f473d61f164a911c8821b5ee61d51679419
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 
  });

  // enes is paranoid

  

  const newItems = list.map((value) => value.username);

  return (
<<<<<<< HEAD
    <div>
=======
    <div className="App">
>>>>>>> 04098f473d61f164a911c8821b5ee61d51679419
        {newItems}
    </div>
  );
}

export default App;
