const db = require('./../utils/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  console.log("request body:", username, password)

  const user = await db.query(
    `SELECT * FROM users WHERE username = ?`,
    [username]
  )

  console.log("user data:", user[0])

  const passwordCorrect = user[0]? await bcrypt.compare(password, user[0].password) : false

  console.log("is the password correct?", passwordCorrect)

  if (!(user[0] && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    id: user[0].id,
    username: user[0].username,
  }

  console.log("super secret word:", process.env.SECRET)

  const token = jwt.sign(
    userForToken, 
    process.env.SECRET,
    { expiresIn: 60 * 60 }
    )

  console.log("token:", token)

  response
    .status(200)
    .send({ token, username: user[0].username })
})

module.exports = loginRouter