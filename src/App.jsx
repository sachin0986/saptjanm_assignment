import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Profile from "./pages/ProfilePage";
import MyMatches from "./pages/MyMatches";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profilePage",
        element: <Profile />,
      },
      {
        path: "/matches",
        element: <MyMatches />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;