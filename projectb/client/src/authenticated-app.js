// , useMatch
import React from 'react'
import {Routes, Route, Link as RouterLink} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import {Button, ErrorMessage, FullPageErrorFallback} from './components/lib'
import {useAuth} from './context/auth-context'
import {ReadingListScreen} from './screens/reading-list'
import {FinishedScreen} from './screens/finished'
import {DiscoverBooksScreen} from './screens/discover'
import {BookScreen} from './screens/book'
import {NotFoundScreen} from './screens/not-found'

function ErrorFallback({error}) {
  return (
    <ErrorMessage
      error={error}
      className="h-full flex flex-col content-center items-center"
    />
  )
}

function AuthenticatedApp() {
  const {user, logout} = useAuth()
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div
        className="flex items-center absolute inset-t-4 inset-r-4"
      >
        {user.username}
        <Button variant="secondary" className="ml-2.5" onClick={logout}>
          Logout
        </Button>
      </div>
      <div
        className="m-0 pt-2 pt-1 max-w-10 w-full grid gap-1 grid-cols-3 md:grid-cols-1 md:w-full md:grid-rows-6 ..."
      >
        <div className="relative">
          <Nav />
        </div>
        <main className="w-full">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  )
}

function NavLink(props) {
  // const match = useMatch(props.to)
  return (
    <RouterLink
      className="block p-2 mt-1 w-full h-full text-black rounder-1 border-r-2 border-solid border-transparent hover:text-gray hover:text-none hover:bg-indigo-500"
      {...props}
    />
  )
}

function Nav(params) {
  return (
    <nav
      className="sticky inset-t-4 pt-1 pr-1.5 border border-solid border-gray-50 md:static md:inset-t"
    >
      <ul
        className="list-none p-0"
      >
        <li>
          <NavLink to="/list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished Books</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/list" element={<ReadingListScreen />} />
      <Route path="/finished" element={<FinishedScreen />} />
      <Route path="/discover" element={<DiscoverBooksScreen />} />
      <Route path="/book/:bookId" element={<BookScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AuthenticatedApp
