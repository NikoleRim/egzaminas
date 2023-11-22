import './App.css';
import React from 'react';
import { Form } from './components/Form.jsx';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  databaseURL: ""
}

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const App = () => {
  return(
    <div>
      <Form />
    </div>
  )}

export default App;