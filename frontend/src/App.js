//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
//import Modal from "./components/Modal";
import axios from "axios";
import SongForm from './components/SongForm';

function App() {
  
  const [list,setList] = useState([]);
  const [list1,setList1] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get("http://localhost:8000/api/ratings/")
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 
=======
    axios.get("http://localhost:8000/api/artists/")
      .then(res => setList(res.data))
      .catch(err => console.log(err)); 
  });

>>>>>>> b827a96ca109093207fbb95e3b15d11bac8341a6

    axios.get("http://localhost:8000/api/users/")
    .then(res => console.log(res.data))
    .catch(err => console.log(err)); 
  });
  

<<<<<<< HEAD
  const newItems = list.map((value) => value.username);
  

=======
>>>>>>> b827a96ca109093207fbb95e3b15d11bac8341a6
  return (
    <div className = "song-rater">
      <h1>Song Rater</h1>
      <SongForm />
      <ul>
        {lst.map(value => (
          <li>{value.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
