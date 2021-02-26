import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";

function App(props) {
  let bodyContent;
  if (props.isLoggedIn === true) {
    bodyContent = <CourseList />
  } else {
    bodyContent = <Login />
  }

  return (
    <>
      <div className="App">
        <div className="App-header">
        <Header />
        <div className="display-drawer" >
        <Notifications  displayDrawer = {false}/>
        </div>
        </div>
        <div className="App-body">
          {bodyContent}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
