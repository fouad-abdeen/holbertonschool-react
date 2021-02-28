import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      html: { __html: getLatestNotification() },
      type: "urgent",
    },
  ];

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey === true && e.key === "h") {
        alert("Logging you out");
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    console.log("Trying to remove the event listener.");
    window.removeEventListener("keydown", () =>
      console.log("Say bye to keydown if removeEventListener succeed!")
    );
  }

  render() {
    let bodyContent;
    if (this.props.isLoggedIn === true) {
      bodyContent = <CourseList listCourses={this.listCourses} />;
    } else {
      bodyContent = <Login />;
    }

    return (
      <>
        <div className="App">
          <div className="App-header">
            <Header />
            <div className="display-drawer">
              <Notifications listNotifications={this.listNotifications} />
            </div>
          </div>
          <div className="App-body">{bodyContent}</div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
