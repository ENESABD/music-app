import React from 'react'
import SongForm from './SongForm';

function Songlist() {

    const [songs, setSongs] = useState([]);
    
    const addSong = song => {
        if (!song.text || /^\s*$/.test(song.text)) {
            return
        }
    }

    const newSongs = [song, ...songs]

    setSongs(newSongs);
    console.log(...songs);

    return (
        <div>
            <SongForm onSubmit = {addTodo}/>
        </div>
    )
}

export default Songlist
