// Pages

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyShopRoutes from "./routes/MyShopRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MyShopRoutes />
        <Footer />
        <ToastContainer />
      </Provider>
    </>
  );
};

export default App;
