import React, {useState, useEffect} from 'react';
import axios from "axios";

function SongDetail({ songName, setRightColumn, songID }) {
    const [songDetailsList, setSongDetailsList] = useState([]);
    const [songDetails, setSongDetails] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:8000/api/details/")
            .then(res => {
                console.log("alaa");
                console.log(res.data);
            })
            .catch(err =>console.log(err)); 
    },[songID]);

    console.log(songID);
    console.log(songDetailsList);

    

    return (
        <div>
            {songDetailsList}
        </div>
        )
}


export default SongDetail
