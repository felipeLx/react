import * as React from 'react';

function LoginForm(): JSX.Element {
    const [values, setValues] = React.useState()
    const [errors, setErrors] = React.useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"
            </div>
        </form>
    )
}

export {LoginForm}

  /*
  eslint
    no-unused-expressions: "off",
  */