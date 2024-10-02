import Button from "remoteApp/Button";
import useStore from "remoteApp/store";
import "./App.css";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <h1>Host App</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
