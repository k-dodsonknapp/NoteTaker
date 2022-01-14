// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const noteRouter = require('./notes')
const notebookRouter = require('./notebooks')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/notes', noteRouter)

router.use('/notebooks', notebookRouter)

module.exports = router;
