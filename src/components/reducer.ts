export type State = {
  theme: "light" | "dark";
  userId: string | null;
};

export type Action =
  | {
      type: "LOG_IN";
      payload: string;
    }
  | { type: "LOG_OUT" };

export const initialContext: State = {
  userId: null,
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
        userId: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        userId: null,
      };

    default:
      return state;
  }
};
