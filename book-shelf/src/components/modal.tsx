import * as React from 'react'
import {Dialog} from '@reach/dialog'

type ModalType = any;

function Modal(): ModalType {
    const [openModal, setOpenModal] = React.useState('none');

    return (
      <div>
        <div>
          <button onClick={() => setOpenModal('login')}>Login</button>
        </div>
        <div>
          <button onClick={() => setOpenModal('register')}>Register</button>
        </div>
        <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
          <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
          <h3>Login</h3>
        </Dialog>
        <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
          <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
          <h3>Register</h3>
        </Dialog>
      </div>
    )
};

export {Modal}


  /*
  eslint
    no-unused-expressions: "off",
  */