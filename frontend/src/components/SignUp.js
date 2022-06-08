import React from "react"
import { useState, useEffect } from "react"
import { navigate } from "gatsby"
import View from "./View"
import { handleSignUp, isLoggedIn } from "../utils/helper"

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/app/board')
    }
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()

    handleSignUp(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <View title="Sign Up">
      <form
        className="mx-0"
        method="post"
        onSubmit={event => handleSubmit(event)}
      >
        <p className="mb-4">
          Please set your credentials.
        </p>
        <label className="block mb-4 text-sm tracking-widest uppercase">
          Username
          <input
            className="block border-2 mt-1 text-base p-1"
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label className="block mb-4 text-sm tracking-widest uppercase">
          Password
          <input
            className="block mt-1 text-base p-1"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input className="bg-blue-600 border-0 text-white text-lg font-bold mt-2 py-1 px-4 transition-colors hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500" type="submit" value="Sign Up" />
      </form>
    </View>
  )

}

export default SignUp
