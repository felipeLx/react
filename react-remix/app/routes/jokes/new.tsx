import type { ActionFunction } from 'remix';
import { redirect, useActionData } from 'remix';
import { db } from '~/utils/db.server';

function validateJokeContent(content: string) {
    if(content.length < 10) {
        return `That joke is too short.`;
    }
};

function validateJokeName(name: string) {
    if(name.length < 2) {
        return `That joke's name is too short.`
    }
};

type ActionData = {
    formError?: string;
    fieldErrors?: {
        name: string | undefined;
        content: string | undefined;
    };
    fields?: {
        name: string;
        content: string;
    };
};

export let action: ActionFunction = async({request}): Promise<Response | ActionData> => {
    let form = await request.formData();
    let name = form.get("name");
    let content = form.get("content");

    if(typeof name !== "string" || typeof content !== "string") {
        return {formError: `Form not submitted correctly.`};
    }

    let fieldErrors = {
        name: validateJokeName(name),
        content: validateJokeContent(content)
    };

    let fields = {name, content};

    if(Object.values(fieldErrors).some(Boolean)) {
        return {fieldErrors, fields};
    }

    let joke = await db.joke.create({data: fields})
    return redirect(`/jokes/${joke.id}`);
};

export default function NewJoke() {
    let actionData = useActionData<ActionData | undefined>();

    return(
        <div>
            <p>Add your joke, be funny!</p>
            <form method="post">
                <div>
                    <label>
                        Name: {" "}
                        <input type="text" defaultValue={actionData?.fields?.name} name="name" aria-invalid={
                            Boolean(actionData?.fieldErrors?.name) || undefined
                        }
                        />
                    </label>
                    {actionData?.fieldErrors?.name ? (
                        <p className="form-validation-error" role="alert" id="name-error">
                            {actionData.fieldErrors.name}
                        </p>
                    ) : null}
                </div>
                <div>
                    <label>
                        Content: {" "}
                        <textarea defaultValue={actionData?.fields?.content} name="content" aria-invalid={Boolean(actionData?.fieldErrors?.content) || undefined} aria-describedby={actionData?.fieldErrors?.content ? "content-error" : undefined} />
                    </label>
                    {actionData?.fieldErrors?.content ? (
                    <p className="form-validation-error" role="alert" id="content-error">{actionData.fieldErrors.content}</p>) : null}
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};