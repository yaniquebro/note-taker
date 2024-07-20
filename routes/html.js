const router = require('express').Router();
const path = require('path');

//get note.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//get index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //export
  module.exports = router;