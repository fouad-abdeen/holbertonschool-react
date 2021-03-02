import React from "react";
import PropTypes from "prop-types";
import "./NotificationItem.css";

export default function NotificationItem(props) {
  if (props.html !== undefined)
    return (
      <li
        id={props.type}
        data-notification-type={props.type}
        dangerouslySetInnerHTML={props.html}
        onClick={props.markAsRead}
      />
    );
  else
    return (
      <li
        id={props.type}
        data-notification-type={props.type}
        onClick={props.markAsRead}
      >
        {props.value}
      </li>
    );
}

const htmlObjectShape = PropTypes.shape({
  __html: PropTypes.string,
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: htmlObjectShape,
};

NotificationItem.defaultProps = {
  type: "default",
};
