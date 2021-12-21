import { useAppContext } from "./AppContext";
import { useNavigate } from "react-location";

const Login: React.FC = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "TOGGLE_LOGGED_IN", payload: true });
    navigate({ to: "/" });
  };

  return (
    <div>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
};
export default Login;
