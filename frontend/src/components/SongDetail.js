import React, {useState, useEffect} from 'react';
import axios from "axios";

function SongDetail({songName}) {
    const [list,setList] = useState([]);
    const [songDetailsList, setSongDetailsList] = useState([])
    const [songDetails, setSongDetails] = useState({})
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/details/")
        .then(res => setList(res.data))
        .catch(err =>console.log(err)); 
    },[songName]);

    setSongDetailsList(list.filter(value => value == songName));
    setSongDetails(songDetailsList[0])

    return (
        <div>
            <ul>
                <li>{songDetails.song}</li>
                <li>{songDetails.genre}</li>    
            </ul>
        </div>

    )
}

export default SongDetail
