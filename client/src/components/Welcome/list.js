import React from 'react'
import {Link,withRouter} from "react-router-dom";

const List = ({items}) => {
  return (<>
    <div>Notes List</div>
    <div class="list-group pr-3">
        {items.map((item,key) => (
          <Link
          to={"/note-"+key}
          className={
            `list-group-item list-group-item-action`+
            (false?" active":"")
          }
          key={key}>
            {item}
          </Link>
        ))
        }
    </div>
  </>
  )
}

export default withRouter(List);
