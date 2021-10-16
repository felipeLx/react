
import * as React from 'react'
import debounceFn from 'debounce-fn'
import {FaRegCalendarAlt} from 'react-icons/fa'
import Tooltip from '@reach/tooltip'
import {useParams} from 'react-router-dom'
import {useBook} from 'utils/books'
import {formatDate} from 'utils/misc'
import {useListItem, useUpdateListItem} from 'utils/list-items'
import {Spinner, Textarea, ErrorMessage} from 'components/lib'
import {Rating} from 'components/rating'
// import {Profiler} from 'components/profiler'
import {StatusButtons} from 'components/status-buttons'

function BookScreen() {
  const {bookId} = useParams()
  const book = useBook(bookId)
  const listItem = useListItem(bookId)

  const {title, author, coverImageUrl, publisher, synopsis} = book

  return (
      <div>
        <div
          className="grid mb-1 grid-cols-book gap-x-1.5 md:flex md:flex-col"
        >
          <img
            src={coverImageUrl}
            alt={`${title} book cover`}
            className="w-full max-w-xs"
          />
          <div>
            <div className="flex relative">
              <div className="flex-1 justify-between">
                <h1>{title}</h1>
                <div>
                  <i>{author}</i>
                  <span className="mr-6 ml-6">|</span>
                  <i>{publisher}</i>
                </div>
              </div>
              <div
                className="r-0 text-gray flex flex-col justify-around min-q-full"
              >
                {book.loadingBook ? null : <StatusButtons book={book} />}
              </div>
            </div>
            <div className="mt-10 min-h-min">
              {listItem?.finishDate ? <Rating listItem={listItem} /> : null}
              {listItem ? <ListItemTimeframe listItem={listItem} /> : null}
            </div>
            <br />
            <p className="block whitespace-pre-wrap">
              {synopsis}
            </p>
          </div>
        </div>
        {!book.loadingBook && listItem ? (
          <NotesTextarea listItem={listItem} />
        ) : null}
      </div>
  )
}

function ListItemTimeframe({listItem}) {
  const timeframeLabel = listItem.finishDate
    ? 'Start and finish date'
    : 'Start date'

  return (
    <Tooltip label={timeframeLabel}>
      <div aria-label={timeframeLabel} className="mt-5">
        <FaRegCalendarAlt className="-mt-2 mr-5" />
        <span>
          {formatDate(listItem.startDate)}{' '}
          {listItem.finishDate ? `— ${formatDate(listItem.finishDate)}` : null}
        </span>
      </div>
    </Tooltip>
  )
}

function NotesTextarea({listItem}) {
  const [mutate, {error, isError, isLoading}] = useUpdateListItem()

  const debouncedMutate = React.useMemo(
    () => debounceFn(mutate, {wait: 500}),
    [mutate],
  )

  function handleNotesChange(e) {
    debouncedMutate({id: listItem.id, notes: e.target.value})
  }

  return (
    <React.Fragment>
      <div>
        <label
          htmlFor="notes"
          className="inline-block mr-10 mt-0 mb-0.5 font-bold"
        >
          Notes
        </label>
        {isError ? (
          <ErrorMessage
            variant="inline"
            error={error}
            className="font-0.5"
          />
        ) : null}
        {isLoading ? <Spinner /> : null}
      </div>
      <Textarea
        id="notes"
        defaultValue={listItem.notes}
        onChange={handleNotesChange}
        className="w-full min-h-300"
      />
    </React.Fragment>
  )
}

export {BookScreen}
