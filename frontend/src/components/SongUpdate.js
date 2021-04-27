import React, {useState, useEffect} from 'react';
import axios from "axios";

function SongUpdate({ songID, setRightColumn }) {
    const [info, setInfo] = useState({
        song_name : "",
        artist_name : "",
        genre : "",
        year_of_release : "",
        duration_of_song : ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [songList,setSongList] = useState([]);
    const [detailID,setDetailID] = useState(0);

    const handleChange = event => {
        const value = event.target.value;
        setInfo({
            ...info,
            [event.target.name] : value
        });
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/songs/")
            .then(res => {
                
                setSongList(res.data);})
            .catch(err => console.log("no"));
    }, [])

    const getSong = (song_object_id) => {
        console.log(song_object_id);
        console.log(songList);
        console.log(songList.filter(value => value.id == song_object_id));
        return songList.filter(value => value.id == song_object_id)[0];
    }
    // sets the default value
    useEffect(() => {
        axios.get("http://localhost:8000/api/details/", {no: songID})
        .then(res => {
            console.log("smh");
            const temp = res.data.filter(val => {return getSong(val.song).id == songID});
            setInfo({song_name : getSong(temp[0].song).song_name, artist_name : getSong(temp[0].song).artist_name});
            setDetailID(temp[0].id);
            console.log(detailID);
        })
        .catch(err => console.log(err));
    }, [songID])

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     axios.put(`http://localhost:8000/api/songs/${songID}/`, {no: songID, song_name : data.song_name, artist_name : data.artist_name})
    //         .then(res => {
    //             setIsError(false);
    //             
    //         })       
    //         .catch(err =>{
    //             setIsError(true);
    //             setErrorMessage(err.response.data.song_name);
    //         });
                
          
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(info);
        let res = await axios.put(`http://localhost:8000/api/songs/${songID}/`, {song_name : info.song_name, artist_name : info.artist_name}); 
        axios.put(`http://localhost:8000/api/details/${detailID}/`, {song : songID, genre : info.genre, 
                    year_of_release : info.year_of_release, duration_of_song : info.duration_of_song})
            .then(res => {
                setIsError(false);
                setRightColumn("Welcome!");
            })       
            .catch(err =>{
                setIsError(true);
                console.log(err.response);
                setErrorMessage("error");
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
                <button className = "song-button">Update</button>
            </form>
            <p className = "error-msg">{isError ? errorMessage : null}</p>
            <p className = "error-msg">{errorMessage == undefined ? "Please enter an Artist Name" : null}</p>
        </div>
    )
}

export default SongUpdate


// after we add the song, the add song form does not dissapear
// duration_of_song ranking does not work - should we remove it?
//song details 