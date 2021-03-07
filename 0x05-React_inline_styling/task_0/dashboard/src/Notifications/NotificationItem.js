import React from "react";
import PropTypes from "prop-types";
import "./NotificationItem.css";

class NotificationItem extends React.Component {
  render() {
    if (this.props.html !== undefined)
      return (
        <li
          id={this.props.type}
          data-notification-type={this.props.type}
          dangerouslySetInnerHTML={this.props.html}
          onClick={this.props.markAsRead}
        />
      );
    else
      return (
        <li
          id={this.props.type}
          data-notification-type={this.props.type}
          onClick={this.props.markAsRead}
        >
          {this.props.value}
        </li>
      );
  }
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

export default React.memo(NotificationItem);
