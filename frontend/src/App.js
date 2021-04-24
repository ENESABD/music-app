import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";

function App() {
  
  const [list,setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/")
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 
  });

  

  const newItems = list.map((value) => value.username);

  return (
    <div>
        {newItems}
    </div>
  );
}

export default App;
