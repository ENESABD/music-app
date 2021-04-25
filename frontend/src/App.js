import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import SongForm from './components/SongForm';
import SongList from './components/SongList';

function App() {
  const [addSong,setAddSong] = useState(false);
  const [songAdded,setSongAdded] = useState(false);



  const handleClickSong = () => {
    setAddSong(!addSong);
  }


  return (
    <div className = "song-rater">
      <h1>Song Rater</h1>
      <button onClick = {handleClickSong}>Add a new song</button>
      {addSong ? <SongForm songAdded = {songAdded} setSongAdded={setSongAdded}/> : null}
      <SongList songAdded={songAdded}/>
      <Welcome />
      <SongDetail />
      <SongUpdate />
      <SongDelete />

    </div>
  );
}

export default App;
