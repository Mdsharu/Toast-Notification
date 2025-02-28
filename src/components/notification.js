import "./notification.css";
import {
  MdCheckCircle,
  MdClose,
  MdError,
  MdInfo,
  MdWarning,
} from "react-icons/md";

const iconStyles = { marginRight: "10px", fontSize: "1.5rem" };

// mapping Notification types to icons
const notifyIcons = {
  success: <MdCheckCircle style={iconStyles} />,
  info: <MdInfo style={iconStyles} />,
  warning: <MdWarning style={iconStyles} />,
  error: <MdError style={iconStyles} />,
};

// Notification component
const Notification = ({ type, context, closeNotification = () => {} }) => {
  return (
    <div className={"notification " + type}>
      {notifyIcons[type]}
      {context}
      <MdClose className="closeBtn" onClick={closeNotification} />
    </div>
  );
};

export default Notification;
