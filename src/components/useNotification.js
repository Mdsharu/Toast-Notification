import { useState, useEffect, useRef} from "react";
import Notification from "./notification";

let notificationId = 0;   // global counter to generate unique IDs for each notification

const useNotification = (position = "top-center") => {

  const [notifications, setNotifications] = useState([]);   // an array of notifications
  
  const timers = useRef({});   // A reference object to store multiple timers for each notification

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    clearTimeout(timers.current[id]); 
    delete timers.current[id];
  };

  // Function to add a new notification
  const triggerNotification = ({ type, context, time, onClick }) => {
    const id = notificationId++; // Incremental unique ID
    setNotifications((prev) => [...prev, { id, type, context, onClick }]);  // Keeps previous notifications while adding new ones.

    // Auto-remove after specified time
    timers.current[id] = setTimeout(() => removeNotification(id), time);
  };

  // Cleanup on unmount, since we are using setTimeout() 
  useEffect(() => () => {
    for (const id in timers.current) {
      clearTimeout(timers.current[id]);
    }
  }, []);

  // dynamically renders active notifications (If there are notifications, renders a div with all active notifications)
  const ComponentNotification =
    notifications.length > 0 ? (
      <div className={position}>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            context={notification.context}
            closeNotification={() =>
              setNotifications((prevNotifications) =>
                prevNotifications.filter((n) => n.id !== notification.id)
              )
            }
          />
        ))}
      </div>
    ) : null;

  return { ComponentNotification, triggerNotification };
};

export default useNotification;
