export function DogsNew(props) { 
  const dogSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  }
  return ( 
    <div id='posts-new'>
        <h1>New Post</h1>
        <form onSubmit={dogSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required/>
          </div>
          <div>
          <label htmlFor="age">Age:</label>
          <input id='age' type='text' name='age' required></input>
          </div>
          <div>
            <label htmlFor='breed'>Breed:</label>
            <input id='breed' type='text' name='breed' required></input>
          </div>
          <div>
            <label htmlFor='image'>Image:</label>
            <input id='image' type='img' name='image' required></input>
          </div>
          <button type='submit' href="/">Create Post</button>
        </form>
    </div>
  );
}