import { DogsIndex } from "./DogsIndex"
import { useState, useEffect } from 'react'
import axios from "axios";
import { DogsNew } from './DogsNew'

export function DogsPage() {
  const [ dogs, setDogs] = useState([]);

  const dogsIndex = () => {
    console.log('hello');
    axios.get('http://localhost:3000/dogs.json').then((response) => { 
      console.log(response.data);
      setDogs(response.data);
    });
  }

  useEffect(dogsIndex, []);

  return (
    <main>
      <DogsIndex dogs={dogs}/>
      <DogsNew />
    </main>
  );
}
