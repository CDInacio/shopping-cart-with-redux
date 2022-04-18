import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clear, fetchSingleProduct } from "../../redux/actions/products";

export default function ProductDetail() {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));

    return () => {
      dispatch(clear());
    };
  }, []);

  return <p>{product.title}</p>;
}
