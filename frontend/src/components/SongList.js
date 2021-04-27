import React, { useState, useEffect } from "react";
import axios from "axios";




function Songlist({songAdded, setSongAdded, setRightColumn, setSongID, rightColumn}) {
    const [list,setList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [fixAddSong, setFixAddSong] = useState(false);
    const [sortValue, setSortValue] = useState('');

    const handleSelectChange = event => {
        const value = event.target.value;
        setSortValue(value);
    }
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/songs/") //details
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

    console.log(sortValue);

    return (
        <div className = "container">
            <input type = "text" className = "search-bar" placeholder = "Search by Song Name or Artist Name" onChange = {handleChangeSearch} />
            <p className = "sort-by">Sort By:</p>
            <select className = "sort-by-select" onChange = {handleSelectChange}>
                <option value = "none">None</option>
                <option value = "song_name">Song Name</option>
                <option value = "rating">Rating</option>
                <option value = "year_of_release">Year of Release</option>
                <option value = "song_duration">Duration of Song</option>
            </select>
            <ul className = "list-container">
                {list.filter(value => {
                if (searchTerm == "") {
                    return value
                } else if (value.song_name.toLowerCase().includes(searchTerm.toLowerCase()) || value.artist_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return value
                }
                }).sort((a, b) => {
                    if (sortValue == "song_name") {
                        return a.song_name.localeCompare(b.song_name);
                    } 
                    // else if (sortValue == "rating") {
                        //return a.rating - b.rating 
                    // } else if (sortValue == "year_of_release") {
                        //return a.year_of_release - b.year_of_release
                    // } else if (sortValue == "duration_of_song") {
                        //return a.duration_of_song.localeCompare(b.duration_of_song);
                    // }
                }).map(value => (
                    <li className = "song-list">
                        <button className = "song-name-button" onClick = {(e) => handleClickDetails(value.id, e)}>{value.song_name}</button>
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
