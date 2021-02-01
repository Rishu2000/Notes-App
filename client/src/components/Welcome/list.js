import React from 'react'
import {Link,withRouter} from "react-router-dom";

const List = ({items,match}) => {         //No need to pass match because its defined internally.
  return (<>
    <div>Notes List</div>
    <div class="list-group pr-3 mt-3">
        {items.map((item,key) => (
          <Link
          to={"/note-"+key}
          className={
            `list-group-item list-group-item-action`+
            //(match.params.NoteID === `note-${key}`?" active":"")
            (match.params.NoteID && +match.params.NoteID.replace("note-","") === key?" active":"")
          }
          key={key}>
            {item.Title}
          </Link>
        ))
        (items.length === 0 && (
          <span className="list-group-items">
            No notes Found! Feel free to add one.
          </span>
        ))
        }
    </div>
  </>
  )
}

export default withRouter(List);
