//import React from 'react';

const Note = ({currentNote}) => {
  return currentNote !== null ?
    "You are Lookin at Note no:- "+(currentNote+1):
    "Click on left side."
}

export default Note;
