import React, { useEffect } from "react";

const Error = ({ showErrorMessage, setShowErrorMessage }) => {
  useEffect(() => {
      //Remove error message after 5 seconds
      setTimeout(()=>{setShowErrorMessage(false)},5000)
  }, [showErrorMessage]);

  return <div className={"error-message " + (showErrorMessage?'show':'hidden')}>Criteria not met!</div>;
};

export default Error;
