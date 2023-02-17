import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function ActionButton({ name, isOpen }) {
  const isOpenClasses =
    "h-12 mt-2 rounded-xl flex flex-row items-center bg-gray-300 text-gray-600 font-bold cursor-pointer";
  const isClosedClasses =
    "h-12 mt-2 rounded-xl flex flex-row items-center hover:bg-gray-300 bg-gray-200 text-gray-600 font-bold cursor-pointer";

  return (
    <>
      <div className={isOpen ? isOpenClasses : isClosedClasses}>
        {isOpen ? (
          <FaChevronRight className="mx-6 rotate-90" />
        ) : (
          <FaChevronRight className="mx-6" />
        )}
        {name}
      </div>
    </>
  );
}

export default ActionButton;
