export function DogsIndex (props) { 
  console.log('hello')
  return ( 
    <div id='dogs-index'>
      <h1>All Dogs</h1>
      {props.dogs.map((dog) => (
        <div key={dog.id} className='dogs'>
           <h2>{dog.name}</h2>
           
        </div>
      ))}
    </div>
  )
}