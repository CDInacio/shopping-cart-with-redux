import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "../components/nav/Nav";
import Products from "../components/products/products";
import { fetchAllProducts } from "../redux/actions/products";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <Nav />
      <Products />
    </>
  );
}
