import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  clearCart,
  removeFromCart,
  setProductCount,
} from "../../../redux/slices/produtcSlice";
import {
  SetProductCountEnum,
  type IProductParams,
} from "../../Shop/Models/ShopModels";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.productSlice.cart);
  const totalPrice = useAppSelector((state) => state.productSlice.totalPrice);

  const handleProductCount = (productParams: IProductParams) => {
    dispatch(setProductCount(productParams));
  };

  return (
    <section className="cartDetails">
      <div className="container">
        <div className="row">
          <h2 className="title">{cart.length ? "My cart" : "Cart is empty"}</h2>
          <ul className="cartList">
            {cart.map((item, index) => (
              <li className="cartItem" key={item._id}>
                <p className="lineNumber">{index + 1}</p>
                <div className="carImg">
                  <img src={item.productImage} alt={item.name} />
                </div>
                <h4 className="carName">
                  <Link to={`/car-details/${item._id}`}>{item.name}</Link>
                </h4>
                <p className="carDetails">{item.details}</p>
                <div className="counter">
                  <span
                    className="counterBtn red"
                    onClick={() =>
                      handleProductCount({
                        countType: SetProductCountEnum.DECREMENT,
                        productId: item._id,
                      })
                    }
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    className="counterBtn green"
                    onClick={() =>
                      handleProductCount({
                        countType: SetProductCountEnum.INCREMENT,
                        productId: item._id,
                      })
                    }
                  >
                    +
                  </span>
                </div>
                <span className="carPrice">{item.price} AZN</span>
                <span
                  className="removeCar"
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  X<span className="emoji">🥺</span>
                </span>
              </li>
            ))}
          </ul>
          {cart.length !== 0 && (
            <div className="cartInfo">
              <h3>
                Total price: <span>{totalPrice} AZN</span>
              </h3>
              <p className="clear" onClick={() => dispatch(clearCart())}>
                Clear cart
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
