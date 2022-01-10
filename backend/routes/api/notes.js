const express = require('express');
const asyncHandler = require('express-async-handler');
const {setTokenCookie, requireAuth} = require('../../utils/auth');
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Note } = require('../../db/models');
const { route } = require(".");
const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const notes = await Note.findAll();
    return res.json(notes);
}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    return res.json(note);
}))

router.post('/', asyncHandler(async(req, res) => {
    const res = await fetch('/'); 
}))
