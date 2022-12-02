
import './App.css';

function App() {
  function handleClick() {
    fetch(' https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: "Audio",
        body: "this is audio",
        id: 1,
        userId: 22
      })

    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <button onClick={handleClick} className='postdiv'>
        update data to backend
      </button>
    </div>
  );
}

export default App;
