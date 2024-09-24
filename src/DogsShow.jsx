export function DogsShow ({ dog, onUpdate}) { 
  const handleSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(dog.id, params, () => event.target.reset());
  };
  return (
    <div id="dogs-show">
      <h1>Dogs Information</h1>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={dog.name} name="name" type='text'></input>
        </div>
        <div>
          Age: <input defaultValue={dog.age} name="age" type='text'></input>
        </div>
        <div>
          Breed: <input defaultValue={dog.breed} name='breed' type='text'></input>
        </div>
        <div>
          Image: <input name='image' type='text'/>
        </div>
        <button type='submt'>Update</button>
      </form>
    </div>

  );
}