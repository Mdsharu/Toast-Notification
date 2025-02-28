import React from "react";
import useNotification from "./components/useNotification";
import "./App.css";

const App = () => {

  const { ComponentNotification, triggerNotification } = useNotification("top-right");  // custom hook

  const triggerSuccessNotification = () =>
    triggerNotification({
      type: "success",
      context: "Payment has been Successful!",
      time: 4000,   // display duration
    });

  const triggerUpdateNotification = () =>
    triggerNotification({
      type: "info",
      context: "New Update Available!",
      time: 4000,
    });

  const triggerWarningNotification = () =>
    triggerNotification({
      type: "warning",
      context: "Low Battery! Please Charge.",
      time: 4000,
    });

  const triggerErrorNotification = () =>
    triggerNotification({
      type: "error",
      context: "Failed to Connect. Try Again!",
      time: 4000,
    });

  return (
    <div className="App">
      {ComponentNotification}
      <h1>Toast Notification System</h1>
      <div className="btns">
        <button onClick={triggerSuccessNotification}>Payment Success</button>
        <button onClick={triggerUpdateNotification}>Software Update</button>
        <button onClick={triggerWarningNotification}>Battery Warning</button>
        <button onClick={triggerErrorNotification}>Connection Error</button>
      </div>
    </div>
  );
};

export default App;
