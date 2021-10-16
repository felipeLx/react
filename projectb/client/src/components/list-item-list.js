import React from 'react'
import {useListItems} from 'utils/list-items'
import {BookListUL} from './lib'
import {BookRow} from './book-row'
// import {Profiler} from './profiler'

function ListItemList({filterListItems, noListItems, noFilteredListItems}) {
  const listItems = useListItems()

  const filteredListItems = listItems.filter(filterListItems)

  if (!listItems.length) {
    return <div  className="mt-1 font-1.2">{noListItems}</div>
  }
  if (!filteredListItems.length) {
    return (
      <div className="mt-1 font-1.2">
        {noFilteredListItems}
      </div>
    )
  }

  return (
      <BookListUL>
        {filteredListItems.map(listItem => (
          <li key={listItem.id} aria-label={listItem.book.title}>
            <BookRow book={listItem.book} />
          </li>
        ))}
      </BookListUL>
  )
}

export {ListItemList}
