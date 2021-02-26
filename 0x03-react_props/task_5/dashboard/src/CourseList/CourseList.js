import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";

export default function CourseList(props) {
  if (!Array.isArray(props.listCourses) || !props.listCourses.length)
    return (
      <table id="courseList">
        <thead>
          <tr>
            <th>No course available yet</th>
          </tr>
        </thead>
      </table>
    );
  else
    return (
      <table id="courseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
        </thead>
        <thead>
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
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
