const router = require('express').Router();
const { createNewNote, removeNote} = require('../../lib/notes');
const { noteArray } = require('../../db/db');

router.get('/notes', (req,res) => {
    return res.json(noteArray);
});

router.post('/notes', (req,res) => {
    
    req.body.id = noteArray.length.toString();

    const note = createNewNote(req.body, noteArray);
    return res.json(note);
});

router.delete('/notes/:id', (req,res) => {

    const noteRemoval = removeNote(req.body, noteArray)

    return res.send(noteRemoval);

})

module.exports = router;