import React, { createContext, useReducer, useContext } from "react";

//Define Context
const GlobalDispatchContext = createContext();
const GlobalStateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    theme: "dark",
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked", "white"],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
