import React from "react";
import { FaChevronRight } from "react-icons/fa";

function ActionDropdown({ name }) {
  return (
    <div
      className="h-12 my-2 rounded-xl
                 flex flex-row items-center
                  hover:bg-gray-300 bg-gray-200 text-gray-600 font-bold"
    >
      <FaChevronRight className="mx-6" />
      {name}
    </div>
  );
}

export default ActionDropdown;
