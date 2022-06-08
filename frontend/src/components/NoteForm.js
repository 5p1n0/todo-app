import React from "react"
import { navigate } from "gatsby"
import { useState, useEffect } from "react"
import { create, update, getNote } from '../services/notesService'
import View from "./View"

const NoteForm = ({location}) => {

  const [note, setNote] = useState({ title: '', content: '' })

  const title = location.state.mode === "update" ? "Update your note" : "Save a new note" 

  useEffect(() => {
    if (location.state.mode === "update") {
      getNote(location.state.id)
        .then(note => {
          setNote(note)
        })
    }
  }, [])

  const addNote = () => {
    const newNote = {
      title: note.title,
      content: note.content,
      date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    create(newNote)
      .then(() => {
        navigate('/app/board')
      })
      .catch(error => console.log(error))
  }

  const updateNote = () => {
    const changedNote = {
      title: note.title,
      content: note.content,
      date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    update(changedNote, location.state.id)
      .then(returnedNote => {
        navigate('/app/board')
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (location.state.mode === "update") updateNote()
    else addNote()
  }


  return (
    <View title={title}>
      <form
        className="mx-0"
        method="post"
        onSubmit={handleSubmit}
      >
        <label className="block mb-4 text-sm tracking-widest uppercase">
          Title
          <input
            className="block mt-1 text-base p-1"
            type="text"
            name="title"
            value={location.state.mode === "update"? note.title : undefined}
            onChange={(event) => {
              const tmpNote = { title: event.target.value, content: note.content }
              setNote(tmpNote)
            }}
          />
        </label>
        <label className="block mb-4 text-sm tracking-widest uppercase">
          Content
          <input
            className="block mt-1 text-base p-1"
            type="text"
            name="content"
            value={location.state.mode === "update" ? note.content : undefined}
            onChange={(event) => {
              const tmpNote = { title: note.title, content: event.target.value }
              setNote(tmpNote)
            }}
          />
        </label>
        <div className="flex justify-start gap-6">
          <input className="bg-blue-600 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500" type="submit" value="Save" />
          <input 
            className="bg-gray-400 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-gray-600 active:bg-gray-600 focus:bg-gray-600" 
            type="button" 
            value="Back" 
            onClick={() => navigate('/app/board')}  
          />
        </div>
      </form>
    </View>
  )
}

export default NoteForm