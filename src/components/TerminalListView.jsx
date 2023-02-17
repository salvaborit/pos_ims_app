import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { useGetTerminalsQuery } from "../features/apiSlice";
import { useGetTerminalByIdQuery } from "../features/apiSlice";

import { FaInfoCircle } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

function TerminalListView() {
  // const [terminals, setTerminals] = useState([]);
  const [acquirers, setAcquirers] = useState([]);
  const [models, setModels] = useState([]);
  const [locations, setLocations] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [connectivities, setConnectivities] = useState([]);

  const [loading, setloading] = useState(true);

  const [currentHoveredRow, setCurrentHoveredRow] = useState(null);
  const [currentSelectedRow, setCurrentSelectedRow] = useState(null);

  const { data, error, isError, isLoading } = useGetTerminalsQuery();
  // const { data, error, isError, isLoading } = useGetTerminalByIdQuery();
  useEffect(() => {
    const fetchData = async () => {
      // const respTerminals = await axios.get(
      //   "http://localhost:8000/api/terminals/"
      // );
      // setTerminals(respTerminals.data);
      const respAcquirers = await axios.get(
        "http://localhost:8000/api/acquirers/"
      );
      setAcquirers(respAcquirers.data);

      const respModels = await axios.get("http://localhost:8000/api/models/");
      setModels(respModels.data);

      const respLocations = await axios.get(
        "http://localhost:8000/api/locations/"
      );
      setLocations(respLocations.data);

      const respStatuses = await axios.get(
        "http://localhost:8000/api/statuses/"
      );
      setStatuses(respStatuses.data);
      const respConnectivities = await axios.get(
        "http://localhost:8000/api/connectivities/"
      );
      setConnectivities(respConnectivities.data);
      setloading(false);
    };

    fetchData();
  }, []);

  if (loading || isLoading) {
    return (
      <div
        className="m-0 py-10 px-14 overflow-auto col-span-2 min-h-0
                 bg-gray-200 drop-shadow-lg rounded-3xl flex justify-center items-center"
      >
        <div className="animate-spin">
          <VscLoading />
        </div>
      </div>
    );
  } else
    return (
      <div
        className="m-0 py-10 px-14 overflow-auto col-span-2 min-h-0
                 bg-gray-200 drop-shadow-lg rounded-3xl"
      >
        <table className="w-full text-center">
          <thead className="font-extrabold text-lg bg-gray-300 text-gray-800 rounded-xl">
            <tr>
              <th className="w-10 rounded-l-xl">&nbsp;</th>
              <th>Acquirer</th>
              <th>Status</th>
              <th>Serial number</th>
              <th>Part number</th>
              <th>Model</th>
              <th className="rounded-r-xl">Location</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data &&
              data.map((terminalItem, idx) => {
                const acquirer = acquirers.find(
                  (item) => item.id === terminalItem.acquirer
                );
                const status = statuses.find(
                  (item) => item.id === terminalItem.status
                );
                const model = models.find(
                  (item) => item.id === terminalItem.model
                );
                const connectivity = connectivities.find(
                  (item) => item.id === model.connectivity
                );
                const location = locations.find(
                  (item) => item.id === terminalItem.location
                );
                return (
                  <tr
                    key={terminalItem.id}
                    className={`${
                      idx === currentSelectedRow ? "bg-gray-300" : ""
                    }`}
                    onMouseEnter={() => setCurrentHoveredRow(idx)}
                    onMouseLeave={() => setCurrentHoveredRow(null)}
                    onClick={() => setCurrentSelectedRow(idx)}
                  >
                    {currentHoveredRow === idx ? (
                      <td
                        className="w-10 mx-auto
                               rounded-l-full p-1"
                      >
                        <Link to={`/terminals/${terminalItem.id}`}>
                          <FaInfoCircle className="cursor-pointer" />
                        </Link>
                      </td>
                    ) : (
                      <td className="w-10 rounded-l-full">&nbsp;</td>
                    )}
                    <td>{acquirer.name.toUpperCase()}</td>
                    <td>{status.name.toUpperCase()}</td>
                    <td>{terminalItem.serial_number}</td>
                    <td>{terminalItem.part_number}</td>
                    <td>{`${model.name.toUpperCase()} ${connectivity.type.toUpperCase()}`}</td>
                    <td className="rounded-r-full">
                      {location.name.toUpperCase()}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
}

export default TerminalListView;
