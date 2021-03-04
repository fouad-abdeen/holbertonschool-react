import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow(props) {
  let rowContent1;
  let rowContent2;

  const headerRowStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };

  if (props.isHeader === true) {
    if (props.textSecondCell == null) {
      rowContent1 = <th colSpan={2}>{props.textFirstCell}</th>;
    } else {
      rowContent1 = (
        <th style={{ textAlign: "left" }}>{props.textFirstCell}</th>
      );
      rowContent2 = (
        <th style={{ textAlign: "left" }}>{props.textSecondCell}</th>
      );
    }
  } else {
    rowContent1 = <td> {props.textFirstCell} </td>;
    rowContent2 = <td> {props.textSecondCell} </td>;
  }

  return (
    <>
      {props.isHeader === true ? (
        <tr style={headerRowStyle}>
          {rowContent1}
          {rowContent2}
        </tr>
      ) : (
        <tr style={rowStyle}>
          {rowContent1}
          {rowContent2}
        </tr>
      )}
    </>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
