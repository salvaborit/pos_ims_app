import React from "react";
import { GrDocumentExcel, GrDocumentCsv } from "react-icons/gr";

function ActionMassCreate() {
  return (
    <div className="flex items-center justify-center px-2 mb-6 mt-4">
      <button
        className="flex items-center justify-center w-1/3 h-8 mt-2
                   bg-gray-300 hover:bg-gray-400 rounded-md mx-2
      "
      >
        <GrDocumentExcel />
      </button>
      <button
        className="flex items-center justify-center w-1/3 h-8 mt-2
                   bg-gray-300 hover:bg-gray-400 rounded-md mx-2
      "
      >
        <GrDocumentCsv />
      </button>
    </div>
  );
}

export default ActionMassCreate;
