import { json } from 'remix';
import * as fruits from '~/fruits.json';

export async function getData() {
    let response = await fetch(`https://www.fruityvice.com/api/fruit/all`)
        .then(res => res)
    
        
    return response;
}

export async function getPictures() {
    let response = fruits;
    return response;
}

let sessionSecret = "process.env.SESSION_SECRET.myLittleChristmas";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
