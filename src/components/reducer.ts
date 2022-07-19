export type State = {
  theme: "light" | "dark";
  isLoggedIn: boolean;
};

export type Action = {
  type: "TOGGLE_LOGGED_IN";
  payload: boolean;
};

export const initialContext: State = {
  isLoggedIn: false,
  theme: "light",
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

    default:
      return state;
  }
};
