import "./App.css";
import holberton_logo from "./holberton-logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="logo" alt="Holberton Logo" src={holberton_logo} />
        <h1 className="title">
          <strong> School dashboard </strong>
        </h1>
      </div>
      <div className="App-body">
        <p> Login to access the full dashboard </p>
      </div>
      <div className="App-footer">
        <hr />
        <i className="footer-text"> Copyright 2020 - holberton School </i>
      </div>
    </div>
  );
}

export default App;
