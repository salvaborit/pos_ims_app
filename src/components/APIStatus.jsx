import React, { useState, useEffect } from "react";

import { getAPIStatus } from "../api/Status";

function APIStatus({}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getAPIStatus().then((resp) => setIsActive(resp.data.status));
  }, []);

  function renderStatusLight() {
    if (isActive) {
      return <div className="w-3 h-3 bg-green-600 rounded-full"></div>;
    } else {
      return <div className="w-3 h-3 bg-red-600 rounded-full"></div>;
    }
  }

  return (
    <div
      className="w-12 h-12 ml-6 rounded-xl
                 flex flex-col justify-center items-center
                 bg-gray-300 text-xs text-gray-600 font-bold"
    >
      <div className="mb-0.5">API</div>
      {renderStatusLight()}
    </div>
  );
}

export default APIStatus;
