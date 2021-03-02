import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

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
      bodyContent = (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={this.listCourses} />
        </BodySectionWithMarginBottom>
      );
    } else {
      bodyContent = (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
      );
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
          <div className="App-body">
            {bodyContent}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac diam sed est tincidunt consectetur. Vivamus
                euismod eu augue ullamcorper rutrum. Nullam ullamcorper quam
                ipsum, id varius est tristique ac. Nunc sit amet imperdiet nunc,
                a tincidunt odio. Donec nec sagittis neque, at feugiat mauris.
                Curabitur vitae elementum enim. Proin ornare metus ante,
                pellentesque posuere magna malesuada quis. Mauris id justo sit
                amet sapien semper elementum eget faucibus mauris. Curabitur sit
                amet quam aliquet, ultricies enim sed, efficitur erat. Donec
                tincidunt quis augue ac tincidunt. Quisque laoreet, lorem ut
                porttitor placerat, libero felis feugiat nunc, a malesuada diam
                nunc sit amet nulla. In sed ligula a velit sodales aliquam sit
                amet rutrum nibh. Nulla eget magna vulputate, fringilla risus
                vel, porta neque. Nunc ligula dui, varius finibus ligula nec,
                feugiat mattis lorem. Quisque luctus, dolor a vestibulum
                efficitur, turpis lorem cursus dui, id blandit arcu eros id
                neque. Maecenas ut bibendum nulla, non posuere augue.
              </p>
            </BodySection>
          </div>
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
