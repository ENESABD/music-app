import './App.css';
import React, { useState } from "react";
//import axios from "axios";
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import SongUpdate from './components/SongUpdate';
import SongDelete from './components/SongDelete';
import Welcome from './components/Welcome';

function App() {
  const [addSong,setAddSong] = useState(false);
  const [songAdded,setSongAdded] = useState(false);
  const [songName, setSongName] = useState("");
  const [rightColumn, setRightColumn] = useState("Welcome!");


  const handleClickSong = () => {
    setAddSong(!addSong);
  }


  return (
    <div className = "song-rater">
      <h1>Song Rater</h1>
      <button onClick = {handleClickSong}>Add a new song</button>
      {addSong ? <SongForm songAdded = {songAdded} setSongAdded={setSongAdded} /> : null}
      <SongList songAdded={songAdded} setRightColumn = {setRightColumn} setSongName = {setSongName} />
      {rightColumn == "Welcome!" ? <Welcome /> : null}
      {rightColumn == "song_details" ? <SongDetail songName = {songName} /> : null}
      {rightColumn == "song_update" ? <SongUpdate songName = {songName} setRightColumn = {setRightColumn} /> : null}
      {rightColumn == "song_delete" ? <SongDelete songName = {songName} setRightColumn = {setRightColumn} /> : null}

    </div>
  );
}

export default App;
