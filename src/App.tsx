import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from "react-location";
import { AppContextProvider } from "./components/AppContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Stats from "./components/Stats";
import CoffeePot from "./pages/CoffeePot";
import { Footer, Heart, Layout } from "./styled";
import fetchCoffeePot from "./api/fetchCoffeePot";
import Header from "./components/Header";
import { supabase } from "./api";

const location = new ReactLocation();

type LocationGenerics = MakeGenerics<{
  Params: {
    id: string;
  };
  RouteMeta: {
    breadcrumb: (params: LocationGenerics["Params"]) => React.ReactElement;
  };
}>;

const App: React.FC = () => {
  const user = supabase.auth.user();

  const routes: Route<LocationGenerics>[] = [
    { path: "/", element: <Home /> },
    {
      path: "pots",
      children: [
        {
          path: ":id",
          element: !!user ? <CoffeePot /> : <Login />,
          meta: {
            breadcrumb: (params) => <p>{params.id}</p>,
          },
          loader: async ({ params }) => ({
            coffeePot: await fetchCoffeePot(params.id),
          }),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      meta: { breadcrumb: () => <p>Login</p> },
    },
    {
      path: "stats",
      element: <Stats />,
      meta: { breadcrumb: () => <p>Stats</p> },
    },
  ];

  return (
    <AppContextProvider>
      <Router location={location} routes={routes as any}>
        <Layout>
          <Header />
          <Outlet />
          <Footer>
            Made with <Heart>❤️</Heart> by the eng team
          </Footer>
        </Layout>
      </Router>
    </AppContextProvider>
  );
};

export default App;
