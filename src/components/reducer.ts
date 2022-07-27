export type State = {
  theme: "light" | "dark";
  userToken: string | null;
};

export type Action =
  | {
      type: "LOG_IN";
      payload: string;
    }
  | { type: "LOG_OUT" };

export const initialContext: State = {
  userToken: null,
  theme: "light",
};

export const appReducer = (
  state: State = initialContext,
  action: Action
): State => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        userToken: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        userToken: null,
      };

    default:
      return state;
  }
};
