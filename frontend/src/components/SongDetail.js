import React, {useState, useEffect} from 'react';
import axios from "axios";

function SongDetail({ songName , songDetailRequested}) {
    const [songDetailsList, setSongDetailsList] = useState([]);
    const [songDetails, setSongDetails] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    console.log(songName);
    console.log(songDetailRequested);

  
    useEffect(() => {
        console.log("123");
        axios.get("http://localhost:8000/api/details/")
            .then(res => {
                setSongDetailsList(res.data.filter(value => value == songName));
                setIsLoading(false);
            })
            .catch(err =>console.log(err)); 
    },[songDetailsList, songName, isLoading]);

    

    if(isLoading){
        return <div>Loading...</div>
    }
    
    

    if(!isLoading){
        console.log(songDetailsList);
        setSongDetails([songDetailsList[0].song, songDetailsList[0].genre]);

        return (
            <div>
                {songDetails}
            </div>
    
        )
    }

}

export default SongDetail
