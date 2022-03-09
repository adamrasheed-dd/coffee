import { useAppContext } from "./AppContext";
import { BrewButton, Highlight, LastBrewed, Message } from "../styled";
import { formatTime, getBrewedMessage } from "../utils";

const Home: React.FC = () => {
  const {
    state: { isLoggedIn, lastBrewed },
    dispatch,
  } = useAppContext();

  const handleBrew = () => {
    const date = Date.now().toString();
    dispatch({
      type: "UPDATE_BREW_TIME",
      payload: date,
    });
  };

  return (
    <div>
      <Highlight>Is there coffee?</Highlight>
      <Message>{getBrewedMessage(lastBrewed, isLoggedIn)}</Message>

      {lastBrewed && (
        <LastBrewed>
          Last brewed at <strong>{formatTime(lastBrewed)}</strong>
        </LastBrewed>
      )}

      <BrewButton small={!!lastBrewed} onClick={handleBrew}>
        {lastBrewed ? "Brew again" : "Mark as Brewed"}
      </BrewButton>
    </div>
  );
};
export default Home;
