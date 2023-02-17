import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    setHasError(true);
    console.error(error);
  };

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onError: handleError,
        });
      })}
    </div>
  );
};

export default ErrorBoundary;
