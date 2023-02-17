import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function ActionFilter({ acquirers, models, locations, statuses }) {
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

  return (
    <form className="px-2 grid grid-cols-2 gap-4 mb-6 mt-4">
      <div>
        <input
          type="text"
          className="rounded-md p-2 my-1 text-xs w-full"
          placeholder="Serial"
          value={serialNum}
          onChange={(e) => setSerialNum(e.target.value)}
          ref={serialNumRef}
        />

        <input
          type="text"
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
          className="rounded-md p-2 my-1 text-xs w-full"
          value={acquirer}
          onChange={(e) => setAcquirer(e.target.value)}
        >
          {acquirers.map((acquirer) => (
            <option key={acquirer.id} value={acquirer.id}>
              {acquirer.name.toUpperCase()}
            </option>
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
        <FaSearch />
      </button>
    </form>
  );
}

export default ActionFilter;
