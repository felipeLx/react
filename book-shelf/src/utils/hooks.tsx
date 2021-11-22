import * as React from 'react';
import firebase from 'firebase/app';
import {firebaseConfig} from 'config/config';

type LocalStorage = any;

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */

function useLocalStorageState(
    key: string,
    defaultValue: Object = '',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {},
  ): LocalStorage {
    const [state, setState] = React.useState(() => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage)
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    });
  
    React.useDebugValue(`${key}: ${serialize(state)}`);
  
    const prevKeyRef = React.useRef(key);
  
    React.useEffect(() => {
      const prevKey = prevKeyRef.current
      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey)
      }
      prevKeyRef.current = key
    }, [key]);
  
    React.useEffect(() => {
      window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize]);
  
    return [state, setState];
};

firebase.initializeApp(firebaseConfig);
const AuthContext = React.createContext('null');

const useAuth = () => {
  return React.useContext(AuthContext)
};

export {useLocalStorageState, useAuth};
  
  /*
  eslint
    no-unused-expressions: "off",
  */
  