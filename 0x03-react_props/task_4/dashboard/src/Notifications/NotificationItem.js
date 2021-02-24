import React from "react";
import PropTypes from "prop-types";
import "./NotificationItem.css";

export default function NotificationItem(props) {
  if (props.html !== undefined)
    return (
      <>
        <li
          id={props.type}
          data-notification-type={props.type}
          dangerouslySetInnerHTML={props.html}
        />
      </>
    );
  else
    return (
      <>
        <li id={props.type} data-notification-type={props.type}>
          {props.value}
        </li>
      </>
    );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.object,
};

NotificationItem.defaultProps = {
  type: "default",
};
