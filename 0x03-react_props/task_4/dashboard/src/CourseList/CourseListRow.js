import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow(props) {
  let rowContent1;
  let rowContent2;

  if (props.isHeader === true) {
    if (props.textSecondCell == null) {
      rowContent1 = <th colSpan={2}>{props.textFirstCell}</th>;
    } else {
      rowContent1 = (
        <th style={{ textAlign: "left" }}> {props.textFirstCell} </th>
      );
      rowContent2 = (
        <th style={{ textAlign: "left" }}> {props.textSecondCell} </th>
      );
    }
  } else {
    rowContent1 = <td> {props.textFirstCell} </td>;
    rowContent2 = <td> {props.textSecondCell} </td>;
  }

  return (
    <>
      <tr>
        {rowContent1}
        {rowContent2}
      </tr>
    </>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
