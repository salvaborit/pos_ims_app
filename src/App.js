import { useRoutes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import TerminalsRoute from "./components/TerminalsRoute";
import ChipsRoute from "./components/ChipsRoute";
import StatsRoute from "./components/StatsRoute";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center h-2/3 ">
          <h1 className="text-3xl text-gray-700">Welcome!</h1>
        </div>
      ),
    },
    {
      path: "terminals/*",
      element: <TerminalsRoute />,
    },
    {
      path: "chips",
      element: <ChipsRoute />,
    },
    {
      path: "stats",
      element: <StatsRoute />,
    },
    {
      path: "settings",
      element: <h1>Settings</h1>,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);

  return (
    <div
      className="w-screen h-screen py-6
                 bg-neutral-100 flex flex-col"
    >
      <NavBar />
      <>{routes}</>
    </div>
  );
}

export default App;
