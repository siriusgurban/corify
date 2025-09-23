import { useEffect, useState } from "react";
import ShopCard from "../../../components/ShopCard";
import type { IProduct } from "../Models/ShopModels";
import { ShopService } from "../Service/ShopService";
import Loader from "../../../components/Loader";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const res = await ShopService.productList();
      setProducts(res);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="shop">
      {/* {loading && <Loader />} */}
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">

            {
              products.map((item) => (
                <ShopCard props={item} key={item._id} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
