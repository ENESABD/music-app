import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import SongUpdate from './components/SongUpdate';
import SongDelete from './components/SongDelete';
import Welcome from './components/Welcome';

function App() {
  const [addSong,setAddSong] = useState(false);
  const [songAdded,setSongAdded] = useState(false);
  const [songID, setSongID] = useState(0);
  const [rightColumn, setRightColumn] = useState("Welcome!");
//  const [id1,setID] = useState(0);

  const handleClickSong = () => {
    setAddSong(!addSong);
  }


/*  useEffect(() =>{
    axios.get("http://localhost:8000/api/artists/")
    .then(res => {
      setID(1 + res.data.map(value => (value.no)).slice(-1)[0]);
  })
  },[songAdded]
  );
*/



  return (
    <div className = "song-rater">
      <h1 className = "heading">Song Rater</h1>
      <div className = "add-song-button">
        <button className = "add-song-button1" onClick = {handleClickSong}>Add a new song</button>
      </div>
      {addSong ? <SongForm songAdded = {songAdded} setSongAdded={setSongAdded}/> : null} 

      {rightColumn == "Welcome!" ? <Welcome /> : null}
      {rightColumn == "song_details" ? <SongDetail songID = {songID} /> : null}
      {rightColumn == "song_update" ? <SongUpdate songID = {songID} setRightColumn = {setRightColumn} /> : null}
      {rightColumn == "song_delete" ? <SongDelete songID = {songID} setRightColumn = {setRightColumn} /> : null}

      <SongList songAdded={songAdded} setSongAdded={setSongAdded} 
                setRightColumn = {setRightColumn} setSongID = {setSongID} rightColumn = {rightColumn} />
      


    </div>
  );
}

export default App;
