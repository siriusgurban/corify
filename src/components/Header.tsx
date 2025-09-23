import { useState } from "react";

// Router
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../assets/images/logo.webp";

// Icons
import {
  FaShoppingCart,
  FaUserCircle,
  FaWindowClose,
  FaSignOutAlt,
} from "react-icons/fa";
import pagesList from "../constants/pagesList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeFromCart } from "../redux/slices/produtcSlice";
import CustomModal from "./CustomModal";
import type { IProduct } from "../Modules/Shop/Models/ShopModels";

const Header = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productSlice.cart);
  const cartCount = useAppSelector((state) => state.productSlice.cartCount);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [cartIsOpen, setCartIsOpen] = useState(false);
  console.log(cartCount);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              {pagesList
                .filter((item) => item.isOpened)
                .map((page) => (
                  <li className="navItem" key={page.id}>
                    <NavLink to={page.path}>{page.name}</NavLink>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="userArea">
            <div className="cart" onClick={() => setCartIsOpen(!cartIsOpen)}>
              <span className="count">{cartCount}</span>
              <FaShoppingCart />
            </div>
            <button className="logOut">
              LOGOUT
              <FaSignOutAlt />
            </button>
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`cartBox ${cartIsOpen && "isOpen"}`}>
        <div className="cartHead">
          <h2>My Cart</h2>
          <FaWindowClose onClick={() => setCartIsOpen(false)} />
        </div>
        <ul className="cartList">
          {cart.length === 0 && (
            <div className="empty">
              <p>Cart is Empty</p>
              <Link to="/shop" onClick={() => setCartIsOpen(false)}>
                Buy new car
              </Link>
            </div>
          )}
          {cart.map((item) => (
            <li className="cartItem">
              <div className="carImg">
                <img src={item.productImage} alt={item.name} />
              </div>
              <div className="carInfo">
                <p className="carTitle">{item.name}</p>
                <div className="nums">
                  <p className="carPrice">Price: {item.price} AZN</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div
                className="remove"
                onClick={() => {
                  setSelectedProduct(item);
                  setModalIsOpen(true);
                }}
              >
                <p>Remove Car</p>
              </div>
            </li>
          ))}
          {cart.length !== 0 && (
            <Link to="/cart" onClick={() => setCartIsOpen(false)}>
              View on Cart
            </Link>
          )}
        </ul>
      </div>
      <div
        className={`overlay ${cartIsOpen && "isOpen"}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
      <CustomModal
        title="Silmeye eminsinizmi ?"
        is_question_modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        onSubmit={() => {
          dispatch(removeFromCart(selectedProduct?._id || ""));
          setSelectedProduct(null);
          setModalIsOpen(false);
        }}
      />
    </header>
  );
};

export default Header;
