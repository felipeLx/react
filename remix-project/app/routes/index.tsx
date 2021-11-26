import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    
  };

  // https://remix.run/api/remix#json
  return json(data);
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
  // let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix!</h2>
      </main>
      <aside>
        <h2>Demos In This App</h2>
        <ul>
          <li className="remix__page__resource">
            Aside
          </li>
        </ul>
        <h2>Resources</h2>
        <ul>
          <li className="remix__page__resource">
              Resources
          </li>
        </ul>
      </aside>
    </div>
  );
}
