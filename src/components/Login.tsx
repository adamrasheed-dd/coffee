import { useAppContext } from "./AppContext";
import { useNavigate } from "react-location";
import { supabase } from "../api";

const Login: React.FC = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   dispatch({ type: "TOGGLE_LOGGED_IN", payload: true });
  //   navigate({ to: "/" });
  // };

  const handleClick = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    console.log({ user, session, error });
  };

  return (
    <div>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
};
export default Login;
