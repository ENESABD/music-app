import React, {useState, useEffect} from 'react';
import axios from "axios";

function SongUpdate({ songID, setRightColumn }) {
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

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/songs/", {no: songID})
        .then(res => {
            const temp = res.data.filter(val => {return val.id == songID});
            setData({song_name : temp[0].song_name, artist_name : temp[0].artist_name});
        })
        .catch(err => console.log(err));
    }, [songID])

    const handleSubmit = event => {
        event.preventDefault();

        axios.put(`http://localhost:8000/api/songs/${songID}/`, {no: songID, song_name : data.song_name, artist_name : data.artist_name})
            .then(res => {
                setIsError(false);
                setRightColumn("Welcome!");
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
                <button className = "song-button">Update</button>
            </form>
            <p className = "error-msg">{isError ? errorMessage : null}</p>
            <p className = "error-msg">{errorMessage == undefined ? "Please enter an Artist Name" : null}</p>
        </div>
    )
}

export default SongUpdate
