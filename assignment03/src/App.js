
import './App.css';

function App() {

  function handleClick() {
    fetch(' https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: "video",
        body: "this is video",
        id: 1,
        userId: 2
      })

    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <button onClick={handleClick} className='postdiv'>
        Send data to backend
      </button>
    </div>
  );
}

export default App;
