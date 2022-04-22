import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clear, fetchSingleProduct } from "../../redux/actions/products";

import Nav from "../nav/Nav";
import classes from "./productDetail.module.css";
import ProductInfo from "./productInfo";

export default function ProductDetail() {
  const product = useSelector((state) => state.products.product);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(cart);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));

    return () => {
      dispatch(clear());
    };
  }, []);

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <div className={classes.product}>
          <div className={classes["product__image"]}>
            <img src={product.image} alt={product.title} />
          </div>
          <ProductInfo />
        </div>
      </div>
    </>
  );
}
