import { Outlet, ReactLocation, Router } from "react-location";
import { AppContextProvider } from "./components/AppContext";

import Home from "./components/Home";
import Login from "./components/Login";
import Stats from "./components/Stats";
import { Footer, Layout } from "./styled";

const location = new ReactLocation();

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Router
        defaultElement={<Home />}
        location={location}
        routes={[
          { path: "/", element: <Home /> },
          { path: "/login", element: <Login /> },
          { path: "/stats", element: <Stats /> },
        ]}
      >
        <Layout>
          <Outlet />
          <Footer>Made with ❤️ by the eng team</Footer>
        </Layout>
      </Router>
    </AppContextProvider>
  );
};

export default App;
