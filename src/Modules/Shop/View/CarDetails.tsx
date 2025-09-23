import { useEffect, useState } from "react";
import type { IProduct } from "../Models/ShopModels";
import { ShopService } from "../Service/ShopService";
import Loader from "../../../components/Loader";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/produtcSlice";

const CarDetails = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      if (id) {
        const res = await ShopService.productDetails(id);
        setProduct(res);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="carDetails">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <img src={product?.productImage} alt={product?.name} />
          </div>
          <div className="rightSide">
            <h2 className="carTitle">{product?.name}</h2>
            <p className="carDetails">{product?.details}</p>
            <p className="carPrice">{product?.price}</p>
            <button className="addBtn" onClick={()=>dispatch(addToCart(product))}>ADD TO CARD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
