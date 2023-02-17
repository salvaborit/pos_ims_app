import React, { useEffect } from "react";
import { useGetTerminalByIdQuery } from "../features/apiSlice";

function StatsRoute() {
  const { data, err, isLoading } = useGetTerminalByIdQuery(1);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>StatsRoute</div>;
}

export default StatsRoute;
