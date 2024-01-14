import React from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export default useActiveSectionContext;