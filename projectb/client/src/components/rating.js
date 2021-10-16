
import * as React from 'react'
import {useUpdateListItem} from 'utils/list-items'
import {FaStar} from 'react-icons/fa'
import {ErrorMessage} from 'components/lib'

const visuallyHiddenCSS = "b-0 h-1 -m-1 overflow-hidden p-0 bg-clip-content absolute w-1"

function Rating({listItem}) {
  const [isTabbing, setIsTabbing] = React.useState(false)

  const [mutate, {error, isError}] = useUpdateListItem()

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Tab') {
        setIsTabbing(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown, {once: true})
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const rootClassName = `list-item-${listItem.id}`

  const stars = Array.from({length: 5}).map((x, i) => {
    const ratingId = `rating-${listItem.id}-${i}`
    const ratingValue = i + 1
    return (
      <React.Fragment key={i}>
        <input
          name={rootClassName}
          type="radio"
          id={ratingId}
          value={ratingValue}
          checked={ratingValue === listItem.rating}
          onChange={() => {
            mutate({id: listItem.id, rating: ratingValue})
          }}
          className={visuallyHiddenCSS}
        />
        <label
          htmlFor={ratingId}
          className="cursor-pointer text-gray-500 m-0"
        >
          <span className={visuallyHiddenCSS}>
            {ratingValue} {ratingValue === 1 ? 'star' : 'stars'}
          </span>
          <FaStar className="w-4 mt-0 mr-2" />
        </label>
      </React.Fragment>
    )
  })
  return (
    <div
      onClick={e => e.stopPropagation()}
      className={rootClassName}
    >
      <span className="flex">{stars}</span>
      {isError ? (
        <ErrorMessage
          error={error}
          className="inline ml-6 font-0.5"
        />
      ) : null}
    </div>
  )
}

export {Rating}
