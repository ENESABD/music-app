import React, { useState, useEffect } from "react";
import axios from "axios";


function Songlist({songAdded}) {
    const [list,setList] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/artists/")
        .then(res => setList(res.data))
        .catch(err =>console.log(err)); 
    },[songAdded]);

    return (
        <div>
            <ul>
            {list.map(value => (<li>{value.title} <Update />  <Delete />  </li>))}
            </ul>
        </div>

    )
}

export default Songlist
