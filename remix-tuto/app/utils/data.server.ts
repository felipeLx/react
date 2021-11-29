import { json } from 'remix';
import * as fruits from '~/fruits.json';

export async function getData(request: Request) {
    let response = await fetch(`https://www.fruityvice.com/api/fruit/${request}`)
    return response;
}

export async function getPictures() {
    let response = fruits;
    return response;
}