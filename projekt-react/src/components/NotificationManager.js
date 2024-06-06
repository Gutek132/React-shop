import React, { useState, createContext } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "success") => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications([...notifications, { id, message, type }]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <div className="notification-container">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
}
