import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GiveKudos from "./components/GiveKudos";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Search from "./components/Search";
import { Provider } from "react-redux";
import { store, persistor } from "./components/store/store";
import SignUpPage from "./components/SignUpPage";
import { PersistGate } from "redux-persist/integration/react";
import ProfilePage from "./components/ProfilePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/givedetails",
          element: <SignUpPage />,
        },
        {
          path: "/main",
          element: <Main />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/givekudos",
          element: <GiveKudos />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={appRouter} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
