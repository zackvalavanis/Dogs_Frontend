export function DogsShow (props) { 
  return (
    <div id="dogs-show">
      <h1>Dogs Information</h1>
      <p>Name: {props.dog.name}</p>
      <p>Age: {props.dog.age}</p>
      <p>Breed: {props.dog.breed}</p>
    </div>
  );
}