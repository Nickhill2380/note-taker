const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    const note = body;
    
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    );
    return note;
}

function removeNote(body, noteArray) {
    const note = body;

    noteArray.splice(noteArray.id, 1);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    );

    return note;
  
}

module.exports = {
    createNewNote,
    removeNote,
}