import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow(props) {
  let rowContent1;
  let rowContent2;

  const [checked, setChecked] = useState(false);

  if (props.isHeader === true) {
    if (props.textSecondCell == null) {
      rowContent1 = <th colSpan={2}>{props.textFirstCell}</th>;
    } else {
      rowContent1 = <th className={css(styles.th)}>{props.textFirstCell}</th>;
      rowContent2 = <th className={css(styles.th)}>{props.textSecondCell}</th>;
    }
  } else {
    rowContent1 = (
      <td className={css(checked ? styles.rowChecked : styles.row)}>
        {props.textFirstCell}
        <input
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
          }}
        />
      </td>
    );
    rowContent2 = (
      <td className={css(checked ? styles.rowChecked : styles.row)}>
        {props.textSecondCell}
      </td>
    );
  }

  return (
    <>
      <tr
        className={css(
          props.isHeader === true ? styles.header_row : styles.row
        )}
      >
        {rowContent1}
        {rowContent2}
      </tr>
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

const styles = StyleSheet.create({
  header_row: { backgroundColor: "#deb5b545" },
  row: { backgroundColor: "#f5f5f5ab" },
  th: { textAlign: "left" },
  rowChecked: { backgroundColor: "#e6e4e4" },
});
