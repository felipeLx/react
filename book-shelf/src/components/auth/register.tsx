import * as React from 'react';
import {auth, createUser} from 'config/firebase'

interface IPageProps {
    name: string;
}

interface IUser {
    email: string,
    password: string,
    confirm: boolean,
    error: string
}

const RegisterPage: React.FunctionComponent<IPageProps> = props => {
    const [register, setRegister] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<IUser>({
        email: '',
        password: '',
        confirm: false,
        error: ''
    });

    const {email, password, confirm, error} = user

    const signup = async() => {
        await createUser(auth, email, password)
            .then(res => {
                console.log(res)
                window.history.state('/login')
            })
            .catch(error => setUser({...user, error}))
    }

    return (
        <p>Register page.</p>
    );
}

export default RegisterPage;