const db = require('./../utils/db')
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()

usersRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const existingUser = await db.query(
    `SELECT COUNT(1) AS data FROM users WHERE username = ?`,
    [username]
  )

  console.log("user already exist?", existingUser[0].data)

  if (existingUser[0].data) {
    return response.status(400).json({
      error: 'username must be unique'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  console.log("salted password:", passwordHash)

  const newId = await db.query(
    `SELECT COUNT(id) AS data FROM users`
  )

  console.log("max user id", newId[0].data)

  const savedUser = await db.query(
    `INSERT INTO users VALUES (?, ?, ?)`,
    [newId[0].data + 1, username, passwordHash]
  )

  response.status(201).json(savedUser)
})

module.exports = usersRouter