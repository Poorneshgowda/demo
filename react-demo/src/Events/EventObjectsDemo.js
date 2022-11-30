import React from "react";

const EventObjectsDemo = () => {
  const shoot = () => {
    alert("goal");
  };

  return (
    <div>
      <h3>Event Handler</h3>
      <button onClick={shoot}>Take the shot!</button>
      <hr />
    </div>
  );
};

export default EventObjectsDemo;
