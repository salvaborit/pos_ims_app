import React from "react";

import ActionsPanel from "./ActionsPanel";
import TerminalListView from "./TerminalListView";

function TerminalList({ createTerminal }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div>
        <ActionsPanel createTerminal={createTerminal} />
      </div>
      <div className="col-span-2">
        <TerminalListView />
      </div>
    </div>
  );
}

export default TerminalList;
