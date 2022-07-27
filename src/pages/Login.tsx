import { useAppContext } from "../components/AppContext";
import { supabase } from "../api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin: 1rem 1rem 1rem 0;
  padding: 0.5rem 1.5rem;
  background: var(--color-yellow);
  border: none;
  cursor: pointer;
`;

const LogoutButton = styled(Button)`
  background: lightgray;
  padding: 0.25rem 1rem;
`;

const Login: React.FC = () => {
  const {
    state: { userToken },
    dispatch,
  } = useAppContext();

  const user = supabase.auth.user();

  console.log({ user });

  const handleLogin = async () => {
    supabase.auth
      .signIn({
        provider: "google",
      })
      .then(({ user, session }) => {
        console.log({ user, session });
        if (user?.id) {
          dispatch({ type: "LOG_IN", payload: user.id });
        }
      })
      .catch((err) => console.log({ err }));

    // console.log({ user, session, error });
  };

  const handleLogout = () => {
    supabase.auth
      .signOut()
      .then(({ error }) => {
        if (!error) {
          dispatch({ type: "LOG_OUT" });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Button onClick={handleLogin}>Log in</Button>
      {!!userToken && (
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      )}
    </Container>
  );
};
export default Login;
