const router = require('express').Router();
const { createNewNote} = require('../../lib/notes');
const { noteArray } = require('../../db/db');

router.get('/notes', (req,res) => {
    return res.json(noteArray);
});

router.post('/notes', (req,res) => {
    
    req.body.id = noteArray.length.toString();

    const note = createNewNote(req.body, noteArray);
    return res.json(note);
});

// router.get('/notes/:id', (req, res) => {
//     const activeNote = findById(req.params.id, notes)
//     if (activeNote) {
//       return  res.json(result);
//     } 
//     return res.send(404);
// });

module.exports = router;