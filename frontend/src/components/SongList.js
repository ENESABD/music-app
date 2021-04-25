import React, { useState, useEffect } from "react";
import axios from "axios";


function Songlist({songAdded, setSongName, setRightColumn}) {
    const [list,setList] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/artists/")
        .then(res => setList(res.data))
        .catch(err =>console.log(err)); 
    },[songAdded]);

    const handleClickDetails = (song_name) => {
        setRightColumn("song_details");
        setSongName(song_name)
    }

    const handleClickUpdate = (song_name) => {
        setRightColumn("song_update");
        setSongName(song_name)
    }

    const handleClickDelete = (song_name) => {
        setRightColumn("song_delete");
        setSongName(song_name)
    }

    return (
        <div>
            <ul>
            {list.map(value => (
                <li>
                    <button className = "song-button" onClick = {(e) => handleClickDetails(value.title, e)}>{value.title}</button> 
                    <button className = "song-button" onClick = {handleClickUpdate}>Update</button> 
                    <button className = "song-button" onClick = {handleClickDelete}>Delete</button>
                </li>))}
            </ul>
        </div>

    )
}

export default Songlist

// pass song name variable to song list
//change onclick button from value.title
//replace update, delete, value.title with buttons and write onClick for them 
// the onClick function will set the value of the right column to song detail - then we write conditional - if it is song detail then give song detail - if right column =- song detail ? <song detail /> : null 