import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSubmit: false,
      email: "",
      password: "",
    };
  }

  handleLoginSubmit = (e) => {
    this.props.logIn(this.state.email, this.state.password);
    e.preventDefault();
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });

    if (e.target.value.length < 1) {
      this.setState({ enableSubmit: false });
    } else {
      if (this.state.password.length < 1) {
        this.setState({ enableSubmit: false });
      } else {
        this.setState({ enableSubmit: true });
      }
    }
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });

    if (e.target.value.length < 1) {
      this.setState({ enableSubmit: false });
    } else {
      if (this.state.email.length < 1) {
        this.setState({ enableSubmit: false });
      } else {
        this.setState({ enableSubmit: true });
      }
    }
  };

  selectEmail = () => {
    const myEmail = document.querySelector("#email");
    myEmail.select();
  };

  selectPassword = () => {
    const myPassword = document.querySelector("#password");
    myPassword.select();
  };

  render() {
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label
            className={css(styles.label)}
            htmlFor="email"
            onClick={this.selectEmail}
          >
            Email:
          </label>
          <input
            className={css(styles.input)}
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <br />
          <label
            className={css(styles.label)}
            htmlFor="password"
            onClick={this.selectPassword}
          >
            Password:
          </label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <br />
          <input
            disabled={!this.state.enableSubmit}
            type="submit"
            value="OK"
            className={css(styles.input)}
          />
        </form>
      </>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    cursor: "pointer",
    margin: "0.125rem",
  },

  input: {
    margin: "0.125rem",
    border: "none",
    backgroundColor: "transparent",
  },
});

export default Login;
