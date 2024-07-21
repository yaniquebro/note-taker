const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

console.log(`UUID: ${uniqid()}`);


//GET notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ message: "note not found"});
        }

        const notes = JSON.parse(data);
        res.json(notes);
    });
});

//get note.html
router.get('/notes', (req, res) => {
   
});

//get index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//POST note
router.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ message: "note not found"});
        }

        const notes = JSON.parse(data);
        console.log(req.body);
        const newNote = {
            ...req.body,
            id: uuvidv4(),
        };

        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            console.log(err);

        });
    });
});

//export router
module.exports = router;