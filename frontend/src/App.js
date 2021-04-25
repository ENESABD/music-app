//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";
import SongForm from './components/SongForm';

function App() {
  
  const [list,setList] = useState([]);
  const [addSong,setAddSong] = useState(false);
  const [songAdded,setSongAdded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/artists/")
      .then(res => setList(res.data))
      .catch(err =>console.log(err)); 
  },[songAdded]);

  const handleClickSong = () => {
    setAddSong(!addSong);
  }


  return (
    <div className = "song-rater">
      <h1>Song Rater</h1>
      <button onClick = {handleClickSong}>Add a new song</button>
      {addSong ? <SongForm songAdded = {songAdded} setSongAdded={setSongAdded}/> : null}
      <ul>
        {list.map(value => (
          <li>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
