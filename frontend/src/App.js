import logo from './logo.svg';
import './App.css';
import React from "react";
//import Modal from "./components/Modal";
import axios from "axios";

function App() {
  var lst = [1, 2, 3]

  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos")
      .then(res => this.setState({lst : res.data}))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
