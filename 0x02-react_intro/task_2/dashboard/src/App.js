import "./App.css";
import holberton_logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const selectEmail = () => {
    const myEmail = document.querySelector("#email");
    myEmail.select();
  };
  const selectPassword = () => {
    const myPassword = document.querySelector("#password");
    myPassword.select();
  };

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
          <label htmlFor="email" onClick={selectEmail}>
            Email:
          </label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password" onClick={selectPassword}>
            Password:
          </label>
          <input type="password" name="password" id="password" />
          <input type="button" value="OK" />
        </form>
      </div>
      <div className="App-footer">
        <hr />
        <i className="footer-text">
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </i>
      </div>
    </div>
  );
}

export default App;
