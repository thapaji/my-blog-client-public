import React from "react";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    return navigate("/");
  };

  return (
    <div className="flex justify-content-center align-items-center p-2  m-5">
      <Panel header='ERROR'>
        <div className="flex justify-content-center align-items-center flex-column p-5">
          <RiErrorWarningLine className="text-8xl" />
          <h2>404 - Page Not Found</h2>
          <p>
          We're sorry, but the page you are looking for could not be found. Please check the URL or
          go back to the homepage.
        </p>
        <Button label="Go to Homepage" onClick={redirectToHome} />
        </div>
      </Panel>
    </div>
  );
};

export default NotFound;
