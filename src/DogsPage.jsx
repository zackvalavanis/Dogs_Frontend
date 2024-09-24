import { DogsIndex } from "./DogsIndex"
import { useState, useEffect } from 'react'
import axios from "axios";
import { DogsNew } from './DogsNew'
import { Modal } from "./Modal";
import { DogsShow } from "./DogsShow"


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

  const handleShow = (dog) => { 
    console.log("handleShow", dog);
    setIsDogsShowVisible(true);
    setCurrentDog(dog);
  }

  const handleClose = () => { 
    console.log("handelClose");
    setIsDogsShowVisible(false);
  }


  useEffect(dogsIndex, []);

  return (
    <main>
      <DogsIndex dogs={dogs} onShow={handleShow}/>
      <DogsNew onCreatePost={dogsSubmit}/>
      <Modal show={isDogsShowVisible} onClose={handleClose}>
        <DogsShow dog={currentDog} />
      </Modal>
    </main>
  );
}
