import React from "react";
import { useHistory } from "react-router-dom";


export default function RequestReceived() {
  const history = useHistory();

const routeToHome = () => {
  history.push("/");
};
  return (
    <div>
      <h1>Thank you!</h1>
      <h3>
        Your request is being processed. Please check your email for more
        information.
      </h3>
      <button className="Processing page button" onClick={routeToHome}>
        Home
      </button>
    </div>
  );
}
