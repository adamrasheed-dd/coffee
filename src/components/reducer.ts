export type State = {
  theme: "light" | "dark";
  isLoggedIn: boolean;
  lastBrewed: string | null;
};

export type Action =
  | {
      type: "TOGGLE_LOGGED_IN";
      payload: boolean;
    }
  | { type: "UPDATE_BREW_TIME"; payload: string };

export const initialContext: State = {
  isLoggedIn: false,
  theme: "light",
  lastBrewed: null,
};

export const appReducer = (
  state: State = initialContext,
  action: Action
): State => {
  switch (action.type) {
    case "TOGGLE_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case "UPDATE_BREW_TIME":
      return {
        ...state,
        lastBrewed: action.payload,
      };

    default:
      return state;
  }
};
