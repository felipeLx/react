import type { LoaderFunction } from 'remix';
import { useLoaderData, useCatch, Link } from 'remix';
import * as fruits from '~/fruits.json';

type LoaderPic = {
    pictures: Array<{id: number; name: string; link: string;}>,
    details: JSON
}

export let loader: LoaderFunction = async() => {
    //just run in the server
    let response = await fetch(`https://www.fruityvice.com/api/fruit/all`)
    let details = await response.json();

    let pictures = fruits.fruits.map(fruit => {
        return {...fruit, isOpen: true}
    });

    let data: LoaderPic = {
        pictures,
        details
    }
    return data;
}

type FruitPicture = {
    id: number,
    name: string,
    link: string
}

type FruitData = {
        genus: string,
        name: string,
        id: number,
        family: string,
        order: string,
        nutritions: {
          carbohydrates: number,
          protein: number,
          fat: number,
          calories: number,
          sugar: number
        }
}

export default function Fruits() {
    const {pictures, details} = useLoaderData<LoaderPic>();

    return(
        <div>
            Frutas
            {pictures.map((pic: FruitPicture) => {
                return (
                  <Link to="." key={pic.id}>
                    <img src={pic.link} loading="lazy" height={240} width={240} />
                  </Link>
                )
            })
            }
        </div>
    )
}

export function CatchBoundary() {
    let caught = useCatch();
    switch (caught.status) {
      case 404: {
        return (
          <div className="error-container">
              Status 404
          </div>
        );
      }
      case 401: {
        return (
          <div className="error-container">
            Status 401
          </div>
        );
      }
      default: {
        throw new Error(`Unhandled error: ${caught.status}`);
      }
    }
  }
  
  export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);
  
    let { details } = useLoaderData();
    return (
      <div className="error-container">{`There was an error loading the details ${details}. Sorry.`}</div>
    );
  }