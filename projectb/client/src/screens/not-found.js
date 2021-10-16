import React from 'react'
import {Link} from 'components/lib'

function NotFoundScreen() {
  return (
    <div
      classNanw="h-full grid items-center justify-center"
    >
      <div>
        Sorry... nothing here. <Link to="/list">Go home</Link>
      </div>
    </div>
  )
}

export {NotFoundScreen}
