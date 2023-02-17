import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import { FaPlus } from "react-icons/fa";

function ActionCreate({ acquirers, models, locations, statuses }) {
  const serialNumRef = useRef();

  const [serialNum, setSerialNum] = useState("");
  const [partNum, setPartNum] = useState("");
  const [status, setStatus] = useState(statuses[0].name.toUpperCase());
  const [acquirer, setAcquirer] = useState(acquirers[0].name.toUpperCase());
  const [model, setModel] = useState(models[0].name.toUpperCase());
  const [location, setLocation] = useState(locations[0].name.toUpperCase());

  useEffect(() => {
    serialNumRef.current.focus();
  }, []);

  function getByName(arr_objs, name) {
    return arr_objs.find(
      (obj) => obj.name.toUpperCase() === name.toUpperCase()
    );
  }

  function handleSumbit(e) {
    e.preventDefault();
    const newTerminal = {
      acquirer: getByName(acquirers, acquirer).id,
      status: getByName(statuses, status).id,
      model: getByName(models, model).id,
      location: getByName(locations, location).id,
      serial_number: serialNum,
      part_number: partNum,
      notes: "",
    };
    axios
      .post("http://localhost:8000/api/terminals/", newTerminal)
      .then((resp) => resp.data)
      .catch((err) => console.error(err));
  }
  return (
    <form
      onSubmit={handleSumbit}
      className=" grid grid-cols-2 gap-4 items-center px-2 mb-6 mt-4"
    >
      <div>
        <input
          type="text"
          required
          className="rounded-md p-2 my-1 text-xs w-full"
          placeholder="Serial"
          ref={serialNumRef}
          value={serialNum}
          onChange={(e) => setSerialNum(e.target.value)}
        />
        <input
          type="text"
          required
          className="rounded-md p-2 my-1 text-xs w-full"
          placeholder="Part number"
          value={partNum}
          onChange={(e) => setPartNum(e.target.value)}
        />
        <select
          required
          className="rounded-md p-2 my-1 text-xs w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status.id}>{status.name.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <div>
        <select
          required
          className="rounded-md p-2 my-1 text-xs w-full"
          value={acquirer}
          onChange={(e) => setAcquirer(e.target.value)}
        >
          {acquirers.map((acquirer) => (
            <option key={acquirer.id}>{acquirer.name.toUpperCase()}</option>
          ))}
        </select>
        <select
          className="rounded-md p-2 my-1 text-xs w-full"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          {models.map((model) => (
            <option key={model.id}>{model.name.toUpperCase()}</option>
          ))}
        </select>
        <select
          required
          className="rounded-md p-2 my-1 text-xs w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc.id}>{loc.name.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center col-span-2 w-full h-8 mt-2
                   bg-gray-300 hover:bg-gray-400 rounded-md"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default ActionCreate;
