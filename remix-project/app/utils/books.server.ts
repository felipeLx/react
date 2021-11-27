import {books} from '~/fire/fireClient';

type BookLoader = {
    id: string,
    title: string,
}

export async function addBook({id, title} : BookLoader){
 return await ({id, title})
}