import React, {useEffect, useState} from 'react'
import axios from "axios";

function SongForm({ songAdded, setSongAdded }) {
    const [info, setInfo] = useState({
        title : "",
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
        let res = await axios.post("http://localhost:8000/api/songs/", {song_name : info.song_name, artist_name : info.artist_name}); 
        axios.post("http://localhost:8000/api/details/", {song : res.data.id, genre : info.genre, 
                    year_of_release : info.year_of_release, duration_of_song : info.duration_of_song})
            .then(res => {
                setIsError(false);
                setSongAdded(!songAdded);
            })       
            .catch(err =>{
                setIsError(true);
                setErrorMessage(err.response.data.song_name);
            });      
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
            <p className = "error-msg">{errorMessage == undefined ? "Please enter an Artist Name" : null}</p>
        </div>
    )
}

export default SongForm
