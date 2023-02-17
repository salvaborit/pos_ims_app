import { useRoutes } from "react-router-dom";

import TerminalList from "./TerminalList";
import TerminalDetail from "./TerminalDetail";

function TerminalsRoute() {
  const routes = useRoutes([
    {
      path: "/",
      element: <TerminalList />,
    },
    {
      path: "/:id",
      element: <TerminalDetail />,
    },
  ]);

  return (
    <div className="container m-auto mt-10 h-full">
      <>{routes}</>
    </div>
  );
}

export default TerminalsRoute;
