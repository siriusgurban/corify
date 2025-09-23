import NotFound from "../Modules/Additionals/View/NotFound";
import Login from "../Modules/Auth/View/Login";
import Register from "../Modules/Auth/View/Register";
import Cart from "../Modules/Cart/View/Cart";
import Home from "../Modules/Home/View/Home";
import CarDetails from "../Modules/Shop/View/CarDetails";
import Shop from "../Modules/Shop/View/Shop";

const pages = [
  {
    id: "home",
    name: "Home",
    path: "/",
    is_visible: true,
    element: <Home />,
    isOpened: true,
  },
  {
    id: "shop",
    name: "Shop",
    path: "/shop/",
    is_visible: true,
    element: <Shop />,
    isOpened: true,
  },
  {
    id: "cart",
    name: "Cart",
    path: "/cart",
    is_visible: true,
    element: <Cart />,
    isOpened: true,
  },
  {
    id: "car-details",
    name: "Car Details",
    path: "/car-details/:id",
    is_visible: true,
    element: <CarDetails />,
    isOpened: false,
  },
  {
    id: "login",
    name: "Login",
    path: "/login",
    is_visible: true,
    element: <Login />,
    isOpened: false,
  },
  {
    id: "register",
    name: "Register",
    path: "/register",
    is_visible: true,
    element: <Register />,
    isOpened: false,
  },
  {
    id: "notFound",
    name: "Not Found",
    path: "*",
    is_visible: true,
    element: <NotFound />,
    isOpened: false,
  },
];

export default pages;
