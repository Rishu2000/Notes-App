const note = require("express").Router();

const Notes = [
      {
        NoteID:"Hello",
        Title:"Hello World",
        Desc:"Hello World Hello World Hello World Hello World Hello World Hello World"
      },{
        NoteID:"faq",
        Title:"frequently asked question",
        Desc:"frequently asked question frequently asked question frequently asked question what question?"
      },{
        NoteID:"gfg",
        Title:"GeeksforGeeks",
        Desc:"Hi, GeeksforGeeks Hi, GeeksforGeeks Hi, GeeksforGeeks Hi, GeeksforGeeks"
      }
    ]

note.get("/",(req,res) => {
  res.json(Notes)
})

module.exports = note;