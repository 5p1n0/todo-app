import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"
import NotesBoard from "../components/NotesBoard"
import NoteForm from "../components/NoteForm"
import SignUp from "../components/SignUp"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/board" component={NotesBoard} />
      <PrivateRoute path="/app/board/note" component={NoteForm} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App
