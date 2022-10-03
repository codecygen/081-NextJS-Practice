import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function (notificationData) {},
    hideNotification: function () {}
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    };

    function hideNotificationHandler() {
        setActiveNotification(null);
    };

    const contextValue = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return (
        <NotificationContext.Provider
            value={contextValue}
        >
            {props.children}
        </NotificationContext.Provider >
    )
}

export default NotificationContext;