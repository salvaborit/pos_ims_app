import React, { useState, useEffect } from "react";
import axios from "axios";

import { getTerminals, getTerminalById } from "../api/Terminals";
import { getAcquirers, getAcquirerById } from "../api/Acquirers";
import { getModels, getModelById } from "../api/Models";
import { getLocations, getLocationById } from "../api/Locations";
import { getStatuses, getStatusById } from "../api/Statuses";

import { VscLoading } from "react-icons/vsc";

function TerminalInfo({ terminal }) {
  const [serialNum, setSerialNum] = useState("");
  const [partNum, setPartNum] = useState("");

  const [acquirers, setAcquirers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [models, setModels] = useState([]);
  const [connectivities, setConnectivities] = useState([]);
  const [locations, setLocations] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const respAcquirers = await axios.get(
        "http://localhost:8000/api/acquirers/"
      );
      setAcquirers(respAcquirers.data);
      const respStatuses = await axios.get(
        "http://localhost:8000/api/statuses/"
      );
      setStatuses(respStatuses.data);
      const respModels = await axios.get("http://localhost:8000/api/models/");
      setModels(respModels.data);
      const respConnectivities = await axios.get(
        "http://localhost:8000/api/connectivities/"
      );
      setConnectivities(respConnectivities.data);
      const respLocations = await axios.get(
        "http://localhost:8000/api/locations/"
      );
      setLocations(respLocations.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const rowStyles = "grid grid-cols-5 w-full";
  const labelStyles =
    "p-2 rounded-lg my-2 font-bold text-right col-span-1 mr-10";
  const inputStyles = "p-2 px-4 rounded-lg my-2 col-span-4";
  const selectStyles = "p-2 px-3 rounded-lg my-2 col-span-4";

  if (isLoading) {
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
  }

  return (
    <div className="col-span-2 bg-gray-200 rounded-3xl">
      <h1 className="my-10 text-center font-bold text-2xl text-gray-700">
        Terminal information
      </h1>
      <form className="flex flex-col items-center mx-10 mb-10">
        <div className={rowStyles}>
          <label className={labelStyles}>ID</label>
          <input
            type="text"
            value={terminal.id}
            className={inputStyles}
            disabled
          />
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Serial num.</label>
          <input
            type="text"
            value={serialNum}
            onChange={(e) => setSerialNum(e.target.value)}
            className={inputStyles}
            disabled={!editMode}
          />
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Part num.</label>
          <input
            type="text"
            value={partNum}
            onChange={(e) => setPartNum(e.target.value)}
            className={inputStyles}
            disabled={!editMode}
          />
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Status</label>
          <select
            value={getStatusById(terminal.status)}
            onChange={(e) => console.log(e.target.value)}
            className={selectStyles}
            disabled={!editMode}
          >
            {statuses.map((status) => (
              <option key={status.id}>{status.name.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Acquirer</label>
          <select
            value={getAcquirerById(terminal.acquirer)}
            onChange={(e) => console.log(e.target.value)}
            className={selectStyles}
            disabled={!editMode}
          >
            {acquirers.map((acquirer) => (
              <option key={acquirer.id}>{acquirer.name.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Model</label>
          <select
            value={getModelById(terminal.model)}
            onChange={(e) => console.log(e.target.value)}
            className={selectStyles}
            disabled={!editMode}
          >
            {models.map((model) => (
              <option key={model.id}>{model.name.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className={rowStyles}>
          <label className={labelStyles}>Location</label>
          <select
            value={getLocationById(terminal.location)}
            onChange={(e) => console.log(e.target.value)}
            className={selectStyles}
            disabled={!editMode}
          >
            {locations.map((location) => (
              <option key={location.id}>{location.name.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </form>
      <div
        className="flex flex-row justify-center items-center
                   w-full"
      >
        <button className="">Edit</button>
        <button className="">Download info</button>
        <button className="">Delete</button>
      </div>
    </div>
  );
}

export default TerminalInfo;
