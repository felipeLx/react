import * as React from 'react';
import {signInFacebook, signInGoogle} from 'config/firebase';

function LoginForm(): JSX.Element {
    return(
        <form>
            <div>
                <button onClick={signInGoogle}></button>
            </div>
            <div>
                <button onClick={signInFacebook}></button>
            </div>
        </form>
    )
}

export {LoginForm}

  /*
  eslint
    no-unused-expressions: "off",
  */