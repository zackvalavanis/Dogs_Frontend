export function DogsIndex (props) { 
  return ( 
    <div id='dogs-index'>
      <h1>All Dogs</h1>
      {props.dogs.map((dog) => (
        <div key={dog.id} className='dogs'>
           <h2>{dog.name}</h2>
           <p>{dog.age}</p>
           <p>{dog.breed}</p>
           <img src={dog.image} className='dog-image'/>
           <button className='info' onClick={() => props.onShow(dog)}>More Info</button>
        </div>
      ))}
    </div>
  )
} 