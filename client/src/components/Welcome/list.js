import React from 'react'

const List = ({items,setCurrentNote,currentNote}) => {
  return (<>
    <div>Notes List</div>
    <ul class="list-group pr-3">
      <div>
        {items.map((item,key) => (
          <li
          className={
            `list-group-item list-group-item-action`+
            (currentNote === key?" active":"")
          }
          key={key}
          onClick={() => setCurrentNote(key)}>
            {item}
          </li>
        ))
        }
      </div>
    </ul>
  </>
  )
}

export default List;
