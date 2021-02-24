import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import CourseListRow from "../CourseList/CourseListRow";
import { getLatestNotification } from "../utils/utils";

function App(props) {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      html: { __html: getLatestNotification() },
      type: "urgent",
    },
  ];

  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  let bodyContent;
  if (props.isLoggedIn === true) {
    bodyContent = <CourseList listCourses={listCourses} />;
  } else {
    bodyContent = <Login />;
  }

  return (
    <>
      <div className="App">
        <div className="App-header">
          <Header />
          <div className="display-drawer">
            <Notifications
              displayDrawer={false}
              listNotifications={listNotifications}
            />
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

export default App;

CourseListRow.propTypes = {
  isLoggedIn: PropTypes.bool,
};

CourseListRow.defaultProps = {
  isLoggedIn: false,
};
