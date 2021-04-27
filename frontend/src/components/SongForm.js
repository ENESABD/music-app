import React, {useEffect, useState} from 'react'
import axios from "axios";

function SongForm({songAdded, setSongAdded}) {
    const [data, setData] = useState({
        song_name : "",
        artist_name : ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name] : value
        });
    }
    

    const handleSubmit = event => {
        event.preventDefault();       
        axios.post("http://localhost:8000/api/songs/", {song_name : data.song_name, artist_name : data.artist_name})
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
                    value = {data.song_name} 
                    name = "song_name" 
                    className = "song-input"
                    onChange = {handleChange}>
                </input>
                <input
                    type = "text" 
                    placeholder = "Enter the Artist" 
                    value = {data.artist_name} 
                    name = "artist_name" 
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
