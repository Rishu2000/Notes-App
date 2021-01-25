import React from 'react'

const List = ({items}) => {
  return (<>
    <div>Notes List</div>
    <ul class="list-group pr-3">
      <div>
        {items.map((item,key) => (
          <li class="list-group-item list-group-item-action">{item}</li>
        ))
        }
      </div>
    </ul>
  </>
  )
}

export default List;
