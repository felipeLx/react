import React from 'react'
import {Link} from 'react-router-dom'
import {useListItem} from 'utils/list-items'
import {StatusButtons} from './status-buttons'
import {Rating} from './rating'

function BookRow({book}) {
  const {title, author, coverImageUrl} = book
  const listItem = useListItem(book.id)

  const id = `book-row-book-${book.id}`

  return (
    <div
      className="flex items-center relative content-end"
    >
      <Link
        aria-labelledby={id}
        to={`/book/${book.id}`}
        className="min-h-270 flex-grow grid auto-cols-max gap-2 border-solid border-gray-200 text-black p-1.5 rounder-3 focus:hover:no-underline "
      >
        <div
          className="w-140 md:w-100"
        >
          <img
            src={coverImageUrl}
            alt={`${title} book cover`}
            className="max-h-full w-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex-1">
              <h2
                id={id}
                className="text-lg m-0 text-indigo-300"
              >
                {title}
              </h2>
              {listItem?.finishDate ? <Rating listItem={listItem} /> : null}
            </div>
            <div className="ml-2.5">
              <div className="mt-0.2 italic text-sm">
                {author}
              </div>
              <small>{book.publisher}</small>
            </div>
          </div>
          <small className="whitespace-pre-wrap block">
            {book.synopsis.substring(0, 500)}...
          </small>
        </div>
      </Link>
      <div className="ml-8 absolute -right-20 text-gray-500 flex flex-col justify-around h-full">
        <StatusButtons book={book} />
      </div>
    </div>
  )
}

export {BookRow}
