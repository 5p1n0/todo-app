import React from "react"
import { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { getAll, deleteNote } from '../services/notesService'
import View from "./View"

const NotesBoard = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAll()
      .then(allNotes => {
        setNotes(allNotes)
      })  
  }, [])

  const handleDeleteNote = (id) => {
    deleteNote(id)
      .then(() => {
        setNotes(notes.filter(note => note.id != id))
      })
      .catch(error => console.log(error))
  }


  return (
    <View title="Your Notes">
      <Link
        to='/app/board/note'
        state={{ mode: "add" }}
      >
        <button className="mb-4 bg-blue-600 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500">New note</button>
      </Link>
      <div className="my-4 mx-4 sm:mx-0 flex place-content-evenly">

        {notes.map(note =>
          <div
            className="border-2 border-blue-400 p-6 rounded-md"
            key={note.id}
          >
            <p className="mt-2 text-base font-bold">{note.title}</p>
            <p className="mt-2 text-base">{note.content}</p>
            <p className="mt-2 text-sm">{new Date(note.date).toLocaleDateString(
                'us-US', 
                { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: 'numeric', 
                  minute: 'numeric', 
                }
              )}
            </p>
            <div className="flex mt-6 mb-2 justify-around">
              <Link
                to="/app/board/note/"
                state={{ mode: "update", id: note.id }}
              >
                <button className="bg-blue-600 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500">Update</button>
              </Link>
              
              <button className="bg-blue-600 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500" onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
          </div>
        )}
      </div>

    </View>
  )
}

export default NotesBoard