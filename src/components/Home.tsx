import { useAppContext } from "./AppContext";
import {
  BrewButton,
  Header,
  Highlight,
  LastBrewed,
  LoginLink,
  Message,
} from "../styled";
import { formatTime, getBrewedMessage } from "../utils";

const Home: React.FC = () => {
  const {
    state: { isLoggedIn, lastBrewed },
    dispatch,
  } = useAppContext();

  const handleLogin = () => {
    dispatch({ type: "TOGGLE_LOGGED_IN", payload: true });
  };

  const handleBrew = () => {
    const date = Date.now().toString();
    dispatch({
      type: "UPDATE_BREW_TIME",
      payload: date,
    });
  };

  return (
    <div>
      <Header>
        {!isLoggedIn && <LoginLink onClick={handleLogin}>Login</LoginLink>}
      </Header>
      <Highlight>Is there coffee?</Highlight>
      <Message>{getBrewedMessage(lastBrewed, isLoggedIn)}</Message>

      {lastBrewed && (
        <LastBrewed>Last brewed at {formatTime(lastBrewed)}</LastBrewed>
      )}

      <BrewButton small={!!lastBrewed} onClick={handleBrew}>
        Mark as Brewed
      </BrewButton>
    </div>
  );
};
export default Home;
