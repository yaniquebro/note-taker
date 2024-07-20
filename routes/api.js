const router = require("express");
const fs = require('fs');
const uuid4 = uuid.v4()

//export router
module.exports = router;

//GET notes
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).json({ message: "note not found"});
        }

        const notes = JSON.parse(data);
        res.json(notes);
    });
});

//POST note
router.post("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
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
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            console.log(err);

        });
    });
});