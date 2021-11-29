import type {LoaderFunction, ActionFunction} from 'remix';
import { useLoaderData, Form } from 'remix';
import { getData, getPictures } from '~/utils/data.server';

type LoaderPic = {
    picturesList: string[]
}

export let loader: LoaderFunction = async({request}) => {
    //just run in the server
    let picturesList = await getPictures()
        .then(res => res.fruits)

    
    console.log('pic:', picturesList)
    return picturesList;
}

/*
export let loaderPic: LoaderFunction = async() => {
    const banana = await fetch("https://unsplash.com/photos/sf_1ZDA1YFw")
    .then(res => res.json)
    
    return banana;
}
*/
/*
export let action: ActionFunction = async({request}) => {
    const formData = await request.formData();
    let title = formData.get("title");

    if (typeof title !== "string") {
        return console.log("Come on, at least try!", { status: 400 });
    }

    const response = await fetch(
        //api href
        )
    
    if(response.status === 401) {
        throw new Response('Unauthorized', {status: 401})
    }
}
*/

export default function Fruits() {
    const data = useLoaderData();
    
    return(
        <div>
            Frutas
            {data.map(pic => 
                <img key={pic} height={240} width={180} src={pic} />
            )
        }
            <Form method="post">
                <label htmlFor="data">Label For</label>
                <input name="data" id="data" type="text" />
                <br />
                <button type="submit">Add</button>
            </Form>
        </div>
    )
}