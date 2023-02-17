import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaChevronLeft } from "react-icons/fa";
import TerminalLogs from "./TerminalLogs";
import TerminalInfo from "./TerminalInfo";

function TerminalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [terminal, setTerminal] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const respTerminal = await axios.get(
        `http://localhost:8000/api/terminals/${id}/`
      );
      setTerminal(respTerminal.data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="relative container grid grid-cols-3 gap-10
                  drop-shadow-lg rounded-3xl"
    >
      <button
        title="back"
        onClick={() => navigate(-1)}
        className="absolute left-0 top-0 mt-9 ml-10
                    flex items-center justify-center
                   hover:bg-gray-300 rounded-xl"
      >
        <FaChevronLeft className="text-gray-700 text-xl m-3" />
      </button>
      <TerminalInfo terminal={terminal} />
      <TerminalLogs terminal={terminal} />
    </div>
  );
}

export default TerminalDetail;
