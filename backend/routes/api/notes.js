const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Note } = require("../../db/models");
const router = express.Router();
console.log(Note)

//NOTE VALIDATIONS
const validateNote = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this note."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];
const editNotesValidations = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this note."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];

// NOTES ROUTE
//GET ALL NOTES
router.get(
  "/",
  asyncHandler(async (_req, res) => {
    const notes = await Note.findAll();
    // console.log("backend NOTES", notes)
    return res.json(notes);
  })
);

//GET SINGLE NOTE
router.get(
  "/:id(\\d+)",
  asyncHandler(async(req, res) => {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    console.log(note)
    return res.json(note);
  })
);

//POST NOTE NEW
// router.post(
//   "/new",
//   requireAuth,
//   validateNote,
//   asyncHandler(async function (req, res) {
//     // console.log(req)
//     console.log(Note)
//     const note = await Note.create(req.body);
//     console.log("route note", note)
//     return res.json(note);
//   })
// );

router.post('/',
requireAuth,
validateNote, 
asyncHandler(async(req, res) => {
  const {title, content, notebookId, userId} = req.body;
  const note = await Note.create({
    title,
    content,
    notebookId,
    userId,
  })
  // console.log(note)
  return res.json(note)
}))

// EDIT NOTE
router.put(
  "/:id",
  editNotesValidations,
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    if (note !== null) {
      const { title, content, notebookId, userId } = req.body;
      const newNote = await note.update( {
        userId,
        notebookId,
        title,
        content, 
      });
      // const updatedNote = Note.findByPk(id);
      return res.json(newNote)
    } else {
      throw Error("Unable to edit note");
    }
  })
);

//DELETE NOTE
router.delete(

  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const note = await Note.findByPk(req.params.id);
    if(!note) throw Error ("Unable to delete not");
    await Note.destroy({ where: {id: note.id} })
    res.json(note)
  })
);

module.exports = router;
