import React from 'react'

const CircleButton = props => (
  <span {...props} className="rounded p-0 w-40 h-40 border-solid border-2 border-light-gray-500 cursor-pointer leading-none flex items-center justify-center bg-blue text-white " />
)
  
const BookListUL = (
  <ul className="list-none p-0 grid grid-rows-listul gap-2" />
)

const Spinner = () => {
  return (
    <div atia-label="loading" className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  )
}

const Button = props => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" {...props} />
)

const inputStyles = (
  <div className="border-0 border-black pt-2 pr-3 bg-white text-black" />
)

const Input = props => (
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...props} />
)

const Textarea = props => {
  <textarea className={inputStyles} {...props} />
}

const Dialog = props => (
  <div className="max-w-md rounded-sm pb-1 shadow-lg m-8" {...props} />
)

const FormGroup = (
  <div className="flex flex-col w-full max-w-ws" />
)

function FullPageSpinner() {
  return (
    <div
      className="h-2 flex text-lg flex-col justify-center items-center"
    >
      <Spinner />
    </div>
  )
}

const Link = (
  <link className="text-blue-300 hover:text-green-300 hover:underline" />
)

const errorMessageVariants = {
  stacked: "block",
  inline: "inline-block"
}

function ErrorMessage({error, variant = 'stacked', ...props}) {
  return (
    <div
      role="alert"
      className={["text-red-500", errorMessageVariants[variant]]}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        className="whitespace-normal md:whitespace-pre m-0 -mb-5"
      >
        {error.message}
      </pre>
    </div>
  )
}

function FullPageErrorFallback({error}) {
  return (
    <div
      role="alert"
      className="text-red-500 h-auto flex flex-col justify-center content-center"
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export {
  FullPageErrorFallback,
  ErrorMessage,
  CircleButton,
  BookListUL,
  Spinner,
  Button,
  Input,
  Textarea,
  Dialog,
  FormGroup,
  FullPageSpinner,
  Link,
}
