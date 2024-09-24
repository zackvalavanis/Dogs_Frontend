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

  const dogsSubmit = (params, successsCallback) => { 
    axios.post('http://localhost:3000/dogs.json', params).then(response => { 
      console.log(response.data);
      setDogs([...dogs, response.data]);
      successsCallback();
    });
  }


  useEffect(dogsIndex, []);

  return (
    <main>
      <DogsIndex dogs={dogs}/>
      <DogsNew onCreatePost={dogsSubmit}/>
    </main>
  );
}
