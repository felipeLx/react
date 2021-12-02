import type { LinksFunction, MetaFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "../styles/index.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export let meta: MetaFunction = () => {
  return {
    title: "Fruits Details",
    description:
      "Learn more about the fruit and how be health"
  };
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Fruits <span>Details!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="fruits">Fruits</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}