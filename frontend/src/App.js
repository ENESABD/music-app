import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddSongForm from './components/AddSongForm';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import SongUpdate from './components/SongUpdate';
import SongDelete from './components/SongDelete';
import Welcome from './components/Welcome';

function App() {
  const [addSong,setAddSong] = useState(false); // boolean that reverses value when add song button is clicked
  const [songAdded,setSongAdded] = useState(false);
  const [songID, setSongID] = useState(0);
  const [rightColumn, setRightColumn] = useState("Welcome!");
  const [hideForm,setHideForm] = useState(true);


  const handleClickSong = () => {
    setAddSong(!addSong);
    setHideForm(false);
  }




  return (
    <div className = "song-rater">
      <h1 className = "heading">Song Rater</h1>
      <div className = "add-song-button">
        <button className = "add-song-button1" onClick = {handleClickSong}>Add a new song</button>
      </div>

      {/*ensures that form is displayed when the button is clicked and hides when clicked again*/}
      {addSong && !hideForm ? <AddSongForm setSongAdded={setSongAdded} songAdded = {songAdded} 
                  setHideForm = {setHideForm} setAddSong = {setAddSong}/> : null} 

      {rightColumn == "Welcome!" ? <Welcome /> : null}
      {rightColumn == "song_details" ? <SongDetail songID = {songID} /> : null}
      {rightColumn == "song_update" ? <SongUpdate songID = {songID} setRightColumn = {setRightColumn} /> : null}
      {rightColumn == "song_delete" ? <SongDelete songID = {songID} setRightColumn = {setRightColumn} /> : null}

      <SongList songAdded={songAdded} setSongAdded={setSongAdded} setRightColumn = {setRightColumn} 
              setSongID = {setSongID} rightColumn = {rightColumn}/>
      


    </div>
  );
}

export default App;
