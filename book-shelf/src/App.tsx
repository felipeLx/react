import * as React from 'react';
import {Logo} from 'components/logo';
import {Modal} from 'components/modal';
import { LoginForm } from 'components/login';
import './App.css';

function App() {
  return (
    <div className="w-full inline-block">
      <header className="App-header">
        <Logo width="80" height="80" />
        <h1>
          Bookshelf
        </h1>
      </header>
      <main className="container">
        <Modal />
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
