import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { Link, useLoaderData } from "remix";
import type {User} from 'firebase/auth';
import { getUser } from "~/utils/session.server";
import stylesUrl from "../styles/jokes.css";

type LoaderData = {
  user: User | null
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export let loader: LoaderFunction = async({request}) => {
  
  let user = await getUser(request);
  let data: LoaderData = {
    user
  };
  return data;
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "My Remix Project",
    description: "I'm a Developer that like JavaScript, React, Nextjs and are loving to use Remix"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<LoaderData>();

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">Login With Remix and Firebase</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.email}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            Hello to login with Remix and Firebase
          </div>
        </div>
      </main>
    </div>
  );
}
