import {ButtonHTMLAttributes, useState} from 'react';
import type { LoaderFunction } from 'remix';
import { useLoaderData, useCatch, Link, json } from 'remix';
import fruits from '~/fruits.json';

type LoaderPic = {
  pictures: Array<{
    id: number; 
    name: string; 
    link: string;
    isOpen: boolean;
  }>,
  details: Array<{
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
  }}>
}


export let loader: LoaderFunction = async() => {
    //just run in the server
    let response = await fetch(`https://www.fruityvice.com/api/fruit/all`)
    let details = await response.json();

    let pictures = fruits.fruits.map(fruit => {
      let fullFruit;
      fullFruit = {...fruit, isOpen: true}
        return fullFruit;
    });

    let data: LoaderPic = {
        pictures,
        details
    }
    return data;
}

export default function Fruits() {
    const {pictures, details} = useLoaderData<LoaderPic>();
    const [loadedPicture, setloadedPicture] = useState(pictures);
    
    function imageHandler(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      let name = event.currentTarget.name;
      for(let i in loadedPicture){
        if(loadedPicture[i].name === name) {
          setloadedPicture(prevState => {
            loadedPicture: {
              
            }



          })
          console.log('pic: ', pictures[i]);
          
        }
      }

    }
  
    return(
      <div>
          Frutas
          {loadedPicture.map((pic: any) => {
              return <Link key={pic.id} to=".">
                  <button name={pic.name}  onClick={imageHandler}>
                    <img src={pic.link} loading="lazy" height={240} width={240} />
                  </button>
                </Link>
          })}
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