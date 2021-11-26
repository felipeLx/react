import type { ActionFunction, LinksFunction } from "remix";
import { useActionData, useSearchParams, Link, Form } from "remix";
import {
  createUserSession,
  login,
  register
} from "~/utils/session.server";
import stylesUrl from "../styles/login.css";
import {getAuth} from 'firebase/auth';

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  FormError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

export let action: ActionFunction = async ({
  request
}): Promise<Response | ActionData> => {
  let form = await request.formData();
  let loginType = form.get("loginType");
  let username = form.get("username");
  let password = form.get("password");
  let redirectTo = form.get("redirectTo") || "/";
  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return { FormError: `Form not submitted correctly.` };
  }

  let fields = { loginType, username, password };
  let fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return { fieldErrors, fields };

  switch (loginType) {
    case "login": {
      const chkUser = getAuth().currentUser;
      if(!chkUser) {
        return {
          fields,
          FormError: 'user not exist, please register'
        }
      }
      const user = await login({ username, password });
      
      if (!user) {
        return {
          fields,
          FormError: `Username/Password combination is incorrect`
        };
      }
      return createUserSession(user.email, redirectTo);
    }
    case "register": {
      console.log('register');
      let chkUser = getAuth().currentUser;
      if(chkUser) {
        return {
          fields,
          FormError: `User already exist`
        };
      } 
      
      const user = await register({ username, password });
      if (!user) {
        return {
          fields,
          FormError: `Something went wrong trying to create a new user.`
        };
      }
      return createUserSession(user.email, redirectTo);
    }
    default: {
      return { fields, FormError: `Login type invalid` };
    }
  }
};

export default function Login() {
  let actionData = useActionData<ActionData | undefined>();
  let [searchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <Form
          method="post"
          aria-describedby={
            actionData?.FormError
              ? "Form-error-message"
              : undefined
          }
        >
          <input
            type="hidden"
            name="redirectTo"
            value={
              searchParams.get("redirectTo") ?? undefined
            }
          />
          <fieldset>
            <legend className="sr-only">
              Login or Register?
            </legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.fields?.loginType ||
                  actionData?.fields?.loginType === "login"
                }
              />{" "}
              Login
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
                defaultChecked={
                  actionData?.fields?.loginType ===
                  "register"
                }
              />{" "}
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
              defaultValue={actionData?.fields?.username}
              aria-invalid={Boolean(
                actionData?.fieldErrors?.username
              )}
              aria-describedby={
                actionData?.fieldErrors?.username
                  ? "username-error"
                  : undefined
              }
            />
            {actionData?.fieldErrors?.username ? (
              <p
                className="Form-validation-error"
                role="alert"
                id="username-error"
              >
                {actionData?.fieldErrors.username}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={
                Boolean(
                  actionData?.fieldErrors?.password
                ) || undefined
              }
              aria-describedby={
                actionData?.fieldErrors?.password
                  ? "password-error"
                  : undefined
              }
            />
            {actionData?.fieldErrors?.password ? (
              <p
                className="Form-validation-error"
                role="alert"
                id="password-error"
              >
                {actionData?.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div id="Form-error-message">
            {actionData?.FormError ? (
              <p
                className="Form-validation-error"
                role="alert"
              >
                {actionData?.FormError}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}