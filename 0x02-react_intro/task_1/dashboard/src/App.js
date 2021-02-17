import "./App.css";
import holberton_logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" alt="Holberton Logo" src={holberton_logo} />
        <h1 className="title">
          <b> School dashboard </b>
        </h1>
      </header>
      <body className="App-body">
        <p> Login to access the full dashboard </p>
      </body>
      <footer className="App-footer">
        <hr />
        <i className="footer-text">
          Copyright 2020 - {getFooterCopy(getFullYear())}
        </i>
      </footer>
    </div>
  );
}

export default App;
