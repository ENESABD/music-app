import React, {useEffect, useState} from 'react'
import axios from "axios";

function AddSongForm({setSongAdded , songAdded, setHideForm, setAddSong}) {
    const [info, setInfo] = useState({
        song_name : "",
        artist_name : "",
        genre : "",
        year_of_release : "",
        duration_of_song : ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = event => {
        const value = event.target.value;
        setInfo({
            ...info,
            [event.target.name] : value
        });
    }
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let result = await axios.post("http://localhost:8000/api/songs/", 
                                        {song_name : info.song_name, artist_name : info.artist_name});
            console.log("1"); 
            axios.post("http://localhost:8000/api/details/", {song : result.data.id, genre : info.genre, 
                    year_of_release : info.year_of_release, duration_of_song : info.duration_of_song})
                .then(res => {
                    setIsError(false);
                    setSongAdded(!songAdded);
                    setHideForm(true);
                    setAddSong(false);
                })       
                .catch(err =>{
                    setIsError(true);
                    setErrorMessage("Please fill in all the fields!");
            });    
        } catch (err) {
            console.log(err.response.data.song_name);
            console.log(err.response.data.song_name[0] == "song with this song name already exists.");
            if(err.response.data.song_name[0] == "song with this song name already exists.") {
                setIsError(true);
                setErrorMessage("You can already enjoy information about this song in our website! It is already in our database!");
            } else {
                setIsError(true);
                setErrorMessage("Please fill in all the fields!");
            }
        }       
        }


    return (
        <div>
            <form className = 'song-form' onSubmit = {handleSubmit}>
                <input
                    type = "text" 
                    placeholder = "Enter a Song" 
                    value = {info.song_name} 
                    name = "song_name" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "text" 
                    placeholder = "Enter the Artist" 
                    value = {info.artist_name} 
                    name = "artist_name" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "text" 
                    placeholder = "Enter the genre" 
                    value = {info.genre} 
                    name = "genre" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "number" 
                    placeholder = "Enter the year of release" 
                    value = {info.year_of_release} 
                    name = "year_of_release" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "text" 
                    placeholder = "Enter the song duration" 
                    value = {info.duration_of_song} 
                    name = "duration_of_song" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                
                <button className = "song-button">Add Song</button>
            </form>
            <p className = "error-msg">{isError ? errorMessage : null}</p>
        </div>
    )
}

export default AddSongForm
