import { DogsIndex } from "./DogsIndex"
import { useState, useEffect } from 'react'
import axios from "axios";
import { DogsNew } from './DogsNew'
import { Modal } from './Modal'

export function DogsPage() {
  const [ dogs, setDogs ] = useState([]);
  const [ isDogsShowVisible, setIsDogsShowVisible ] = useState(false);
  const [ currentDog, setCurrentDog ] = useState({});

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

  const dogsShow = (dogs) => { 
    console.log("dogsShow", dogs);
    setIsDogsShowVisible(true);
    setCurrentDog(dogs);
  }

  const dogsClose = () => { 
    console.log("dogsClose");
    setIsDogsShowVisible(false);

  }


  useEffect(dogsIndex, []);

  return (
    <main>
      <DogsIndex dogs={dogs} onShow={dogsShow}/>
      <DogsNew onCreatePost={dogsSubmit}/>
      <Modal show={isDogsShowVisible} onClose={dogsClose}>
        <h1>Hello</h1>
      </Modal>
    </main>
  );
}
