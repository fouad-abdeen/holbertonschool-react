import React from "react";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import AppContext, { user } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: () => {
        this.setState({
          user: {
            email: "",
            password: "",
            isLoggedIn: false,
          },
        });
      },
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        {
          id: 3,
          html: { __html: getLatestNotification() },
          type: "urgent",
        },
      ],
      listCourses: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey === true && e.key === "h") {
        alert("Logging you out");
        this.state.logOut();
      }
    });
  }

  componentWillUnmount() {
    console.log("Trying to remove the event listener.");
    window.removeEventListener("keydown", () =>
      console.log("Say bye to keydown if removeEventListener succeed!")
    );
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (x) => x.id !== id
      ),
    });
  };

  render() {
    const { isLoggedIn } = this.state.user;
    const { user, logOut } = this.state;

    let bodyContent;
    if (isLoggedIn === true) {
      bodyContent = (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={this.state.listCourses} />
        </BodySectionWithMarginBottom>
      );
    } else {
      bodyContent = (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={this.logIn} />
        </BodySectionWithMarginBottom>
      );
    }

    return (
      <>
        <AppContext.Provider value={{ user, logOut }}>
          <Notifications
            objForTestPurpose={{}}
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(styles._App)}>
            <div className={css(styles.AppHeader)}>
              <Header />
            </div>
            <main className={css(styles.AppBody)}>
              {bodyContent}
              <BodySection title="News from the School">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ac diam sed est tincidunt consectetur. Vivamus
                  euismod eu augue ullamcorper rutrum. Nullam ullamcorper quam
                  ipsum, id varius est tristique ac. Nunc sit amet imperdiet
                  nunc, a tincidunt odio. Donec nec sagittis neque, at feugiat
                  mauris. Curabitur vitae elementum enim. Proin ornare metus
                  ante, pellentesque posuere magna malesuada quis. Mauris id
                  justo sit amet sapien semper elementum eget faucibus mauris.
                  Curabitur sit amet quam aliquet, ultricies enim sed, efficitur
                  erat. Donec tincidunt quis augue ac tincidunt. Quisque
                  laoreet, lorem ut porttitor placerat, libero felis feugiat
                  nunc, a malesuada diam nunc sit amet nulla. In sed ligula a
                  velit sodales aliquam sit amet rutrum nibh. Nulla eget magna
                  vulputate, fringilla risus vel, porta neque. Nunc ligula dui,
                  varius finibus ligula nec, feugiat mattis lorem. Quisque
                  luctus, dolor a vestibulum efficitur, turpis lorem cursus dui,
                  id blandit arcu eros id neque. Maecenas ut bibendum nulla, non
                  posuere augue.
                </p>
              </BodySection>
            </main>
            <footer className={css(styles.AppFooter)}>
              <Footer />
            </footer>
          </div>
        </AppContext.Provider>
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  _App: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },

  AppHeader: {
    borderBottom: "0.2em solid #e1354b",
  },

  AppBody: {
    marginLeft: "2.5rem",
    marginTop: "2.5rem",
    flex: 1,
  },

  AppFooter: {
    textAlign: "center",
    verticalAlign: "middle",
    height: "2.5rem",
    lineHeight: "2.5rem",
  },
});
