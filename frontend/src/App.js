//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";
import SongForm from './components/SongForm';

function App() {
  
  const [list,setList] = useState([]);
  const [list1,setList1] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/artists/")
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 
  });


  return (
    <div className = "song-rater">
      <h1>Song Rater</h1>
      <SongForm />
      <ul>
        {lst.map(value => (
          <li>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
