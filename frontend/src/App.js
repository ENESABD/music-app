//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";

function App() {
  
  const [list,setList] = useState([]);
  const [list1,setList1] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/ratings/")
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 

    axios.get("http://localhost:8000/api/users/")
    .then(res => console.log(res.data))
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
