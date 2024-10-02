import React from "react";
import ReactDOM from "react-dom/client";
import ButtonModule from "remoteApp/Button";
import useCount from "remoteApp/store";
import "./App.css";

const Button = ButtonModule.default;

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>Webpack Host App</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
