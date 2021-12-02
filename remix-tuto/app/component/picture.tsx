import { Link, Form } from "remix";

type FruitPicture = {
    id: number,
    name: string,
    isOpen: boolean,
    link: string
}


export function PictureDisplay({
  fruit,
  isOpen
}: {
  fruit: Pick<FruitPicture, "name" | "isOpen" | "link">;
  isOpen: boolean;
}) {
  return (
    <div>
      <p>Here's your hilarious fruit:</p>
      <Link to=".">{fruit.name} Permalink</Link>
      {isOpen ? (
        <Form method="post">
          <img
            src={fruit.link}
            height={240}
            width={240}
            loading="lazy"
          />
          <button
            type="submit"
            className="button"
            disabled={!isOpen}
          >
            Delete
          </button>
        </Form>
      ) : null}
    </div>
  );
}