import {
  useReducer,
  FC,
  createContext,
  useMemo,
  Dispatch,
  useContext,
} from "react";
import { Action, appReducer, initialContext, State } from "./reducer";

export const AppContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialContext);

  const contextValue = useMemo(() => {
    console.log({ state });

    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
