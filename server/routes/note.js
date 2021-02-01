const note = require("express").Router();

const Notes = [
      {
        NoteID:"Rishav",
        Title:"Rishav kumar shah",
        Desc:"Rishav kumar shah, A definition is a statement of the meaning of a term (a word, phrase, or other set of symbols).[1][2] Definitions can be classified into two large categories, intensional definitions (which try to give the sense of a term) and extensional definitions (which try to list the objects that a term describes)."
      },{
        NoteID:"Ankit",
        Title:"Ankit kumar shah",
        Desc:"Ankit kumar shah, A definition is a statement of the meaning of a term (a word, phrase, or other set of symbols).[1][2] Definitions can be classified into two large categories, intensional definitions (which try to give the sense of a term) and extensional definitions (which try to list the objects that a term describes)."
      },{
        NoteID:"Prad",
        Title:"Praduman kumar shah",
        Desc:"Praduman kumar shah, A definition is a statement of the meaning of a term (a word, phrase, or other set of symbols).[1][2] Definitions can be classified into two large categories, intensional definitions (which try to give the sense of a term) and extensional definitions (which try to list the objects that a term describes)."
      }
    ]

note.get("/",(req,res) => {
  res.json(Notes)
})

module.exports = note;