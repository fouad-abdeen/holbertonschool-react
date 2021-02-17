import "./App.css";
import holberton_logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const myEmail = document.querySelector("#email");
  const myPassword = document.querySelector("#password");
  const selectEmail = () => myEmail.select();
  const selectPassword = () => myPassword.select();

  return (
    <div className="App">
      <div className="App-header">
        <img className="logo" alt="Holberton Logo" src={holberton_logo} />
        <h1 className="title">
          <strong> School dashboard </strong>
        </h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email" onclick={selectEmail}>
            Email:
          </label>
          <input type="text" name="email" id="email" />
          <label for="password" onclick={selectPassword}>
            Password:
          </label>
          <input type="password" name="password" id="password" />
          <input type="button" value="OK" />
        </form>
      </div>
      <div className="App-footer">
        <hr />
        <i className="footer-text">
          Copyright 2020 - {getFooterCopy(getFullYear())}
        </i>
      </div>
    </div>
  );
}

export default App;
