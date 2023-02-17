import React, { useState, useEffect } from "react";

import axios from "axios";

import { VscLoading } from "react-icons/vsc";

import ActionButton from "./ActionButton";
import ActionFilter from "./ActionFilter";
import ActionCreate from "./ActionCreate";
import ActionMassCreate from "./ActionMassCreate";
import ActionDispatch from "./ActionDispatch";

function ActionsPanel({ createTerminal }) {
  const [acquirers, setAcquirers] = useState([]);
  const [models, setModels] = useState([]);
  const [locations, setLocations] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [connectivities, setConnectivities] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenMassCreate, setIsOpenMassCreate] = useState(false);
  const [isOpenDispatch, setIsOpenDispatch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const respAcquirers = await axios.get(
        "http://localhost:8000/api/acquirers/"
      );
      setAcquirers(respAcquirers.data);

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

      const respStatuses = await axios.get(
        "http://localhost:8000/api/statuses/"
      );
      setStatuses(respStatuses.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div
        className="m-0 py-6 px-6 min-h-0
                 bg-gray-200 rounded-3xl drop-shadow-lg
                  flex justify-center items-center"
      >
        <div className="animate-spin">
          <VscLoading />
        </div>
      </div>
    );
  }

  return (
    <div
      className="m-0 py-6 px-6 min-h-0
                 flex flex-col overflow-y-auto
                 bg-gray-200 rounded-3xl drop-shadow-lg"
    >
      <div onClick={() => setIsOpenFilter(!isOpenFilter)}>
        <ActionButton name="Filter" isOpen={isOpenFilter} />
      </div>
      {isOpenFilter && (
        <ActionFilter
          acquirers={acquirers}
          models={models}
          connectivities={connectivities}
          locations={locations}
          statuses={statuses}
        />
      )}

      <div onClick={() => setIsOpenCreate(!isOpenCreate)}>
        <ActionButton name="Create new" isOpen={isOpenCreate} />
      </div>
      {isOpenCreate && (
        <ActionCreate
          acquirers={acquirers}
          models={models}
          connectivities={connectivities}
          locations={locations}
          statuses={statuses}
          createTerminal={createTerminal}
        />
      )}

      <div onClick={() => setIsOpenMassCreate(!isOpenMassCreate)}>
        <ActionButton name="Mass create" isOpen={isOpenMassCreate} />
      </div>
      {isOpenMassCreate && <ActionMassCreate />}

      <div onClick={() => setIsOpenDispatch(!isOpenDispatch)}>
        <ActionButton name="Dispatch" isOpen={isOpenDispatch} />
      </div>
      {isOpenDispatch && <ActionDispatch />}
    </div>
  );
}

export default ActionsPanel;
