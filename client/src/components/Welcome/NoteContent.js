import React from 'react'

const NoteContent = ({match,Notes}) => {
  const {Title,Desc} = Notes[+match.params.NoteID.replace("note-","")];
  return (
    <div>
        <p>Note Description</p>
        <pre className="border rounded bg-light">
        <h3>{Title}</h3>
          {Desc}
        </pre>
    </div>
  )
}

export default NoteContent;
