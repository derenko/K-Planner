import React, { createContext, useReducer } from "react";
import { save, get } from "../storage";

const initialState = {
  dates: get("dates") || [],
};

const context = createContext(initialState);
const { Provider } = context;

export const ACTION_TYPES = {
  ADD_DATE: "add date",
  EDIT_DATE: "edit date",
  DELETE_DATE: "delete date",
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_DATE:
        return {
          ...state,
          dates: [...state.dates, action.payload],
        };
      case ACTION_TYPES.EDIT_DATE:
        return {
          ...state,
          dates: state.dates.map((date) =>
            date.date === action.payload.date ? { ...action.payload } : date
          ),
        };
      case ACTION_TYPES.DELETE_DATE:
        return {
          ...state,
          dates: state.dates.filter(
            (date) => date.date !== action.payload.date
          ),
        };
      default:
        return state;
    }
  }, initialState);

  save("dates", state.dates);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { context, StateProvider };
