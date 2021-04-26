import React, { useState, useEffect } from "react";
import axios from "axios";




function Songlist({songAdded, setSongAdded, setRightColumn, setSongID, rightColumn}) {
    const [list,setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [fixAddSong, setFixAddSong] = useState(false);
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/artists/")
        .then(res => {
            setList(res.data);
            setFixAddSong(true);
        })
        .catch(err =>console.log(err)); 
    },[songAdded,rightColumn]);

    useEffect(() => {
        setSongAdded(false);
    },[fixAddSong]);
    

    const handleClickDetails = (song_id) => {
        setRightColumn("song_details");
        setSongID(song_id);
    }

    const handleClickUpdate = (song_id) => {
        setRightColumn("song_update");
        setSongID(song_id);
    }

    const handleClickDelete = (song_id) => {
        setRightColumn("song_delete");
        setSongID(song_id);
    }

    const handleChangeSearch = event => {
        setSearchTerm(event.target.value)
    }


    return (
        <div className = "container">
            <input type = "text" className = "search-bar" placeholder = "Search..." onChange = {handleChangeSearch} />
            <ul>
            {list.filter(value => {
                if (searchTerm == "") {
                    return value
                } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value
                }
            }).map(value => (
                <li className = "song-list">
                    <button className = "song-name-button" onClick = {(e) => handleClickDetails(value.id, e)}>{value.title}</button>
                    <div className = "align-right">
                        <button className = "song-update-button" onClick = {(e) => handleClickUpdate(value.id, e)}>Update</button> 
                        <button className = "song-delete-button" onClick = {(e) => handleClickDelete(value.id, e)}>Delete</button>
                    </div> 
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