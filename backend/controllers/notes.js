const notesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const db = require('./../utils/db')

const getTokenFrom = request => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}
	return null
}

// GET NOTES
notesRouter.get('/', async (request, response) => {

	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	console.log("decodedtoken data:", decodedToken)

	const notes = await db.query(
		`SELECT * FROM notes WHERE userid = ?`,
		[decodedToken.id]
	)

	console.log("notes:", notes)

	response.json(notes)
})

// GET NOTE
notesRouter.get('/:id', async (request, response) => {

	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	console.log("decodedtoken data:", decodedToken)

	const notes = await db.query(
		`SELECT title, content FROM notes WHERE userid = ? AND id = ?`,
		[decodedToken.id, request.params.id]
	)

	console.log("notes:", notes)

	response.json(notes)
})

// NEW NOTE
notesRouter.post('/', async (request, response) => {
	const body = request.body

	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	const newId = await db.query(
		`SELECT COUNT(id) AS data FROM notes`
	)

	console.log("max notes id", newId[0].data)

	const newNote = await db.query(`
		INSERT INTO notes
		VALUES (
			?, 
			?, 
			?,
			?,
			?
		)`,
		[newId[0].data + 1, body.title, body.content, body.date, decodedToken.id],
	)

	response.status(201).json(newNote)
})


// DELETE NOTE
notesRouter.delete('/:id', (request, response) => {
	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}
	
	db.query(
		'DELETE FROM notes WHERE id = ?',
		[request.params.id],
	)
		.then(() => {
			response.status(204).end()
		})
})


// UPDATE NOTE
notesRouter.put('/:id', (request, response) => {
	const body = request.body

	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'token missing or invalid' })
	}

	db.query(
		`UPDATE notes SET title = ?, content = ?, date = ? WHERE id = ?`,
		[body.title, body.content, body.date, request.params.id],
	)
		.then(result => response.json(result))
})

module.exports = notesRouter