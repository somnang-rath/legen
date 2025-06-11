import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./page/Home";
import DiamondMemberPage from "./page/DiamondMemberPage";
import DetailMovie from "./page/DetailMovie";
import Cinemas from "./page/cinema";
import LocationDetail from "./page/LocationDetail";
import Offers from "./page/Offers";
import OffersDetail from "./page/OffersDetail";
import Payment from "./page/Payment";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Profile from "./page/Profile";
import Ticket from "./page/Ticket";
import FoodDrink from "./page/FoodDrink";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <DetailMovie />,
      },
      {
        path: "location/:id",
        element: <LocationDetail />,
      },
      {
        path: "offers/:id",
        element: <OffersDetail />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "cinemas",
        element: <Cinemas />,
      },
      {
        path: "ticket",
        element: <Ticket />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "f&b",
        element: <FoodDrink />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
