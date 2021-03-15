import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

export default function CourseList(props) {
  if (!Array.isArray(props.listCourses) || !props.listCourses.length)
    return (
      <table id="courseList" className={css(styles.mytable)}>
        <thead className={css(styles.mytable)}>
          <tr>
            <th>No course available yet</th>
          </tr>
        </thead>
      </table>
    );
  else
    return (
      <table id="courseList" className={css(styles.mytable)}>
        <thead className={css(styles.mytable)}>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
        </thead>
        <thead className={css(styles.mytable)}>
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody className={css(styles.mytable)}>
          {props.listCourses.map((c) => {
            return (
              <CourseListRow
                key={c.id.toString()}
                textFirstCell={c.name}
                textSecondCell={c.credit.toString()}
                isHeader={false}
              />
            );
          })}
        </tbody>
      </table>
    );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  mytable: {
    borderCollapse: "collapse",
    width: "95%",
    border: "2px solid gainsboro",
    padding: "5px",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
