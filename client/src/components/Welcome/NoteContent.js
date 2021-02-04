import React from 'react'

const NoteContent = ({match,Notes}) => {
  const {Title,Desc} = Notes[+match.params.NoteID.replace("note-","")];
  return (
    <div>
        <p>Note Description</p>
        <div className="bg-light p-3 rounded">
        <h3>{Title}</h3>
          {Desc}
          </div>
    </div>
  )
}

export default NoteContent;
