import React, {useReducer} from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import axios from 'axios';

export const FirebaseState = ({children}) => {
  const url = process.env.REACT_APP_DB_URL;

  const initialState = {
    notes: [],
    loading: false
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  return(
    <FirebaseContext.Provider value={{

    }}>
      {children}
    </FirebaseContext.Provider>
  )

}