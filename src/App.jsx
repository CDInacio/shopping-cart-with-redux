import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchProducts } from "./redux/actions/products";

import HomePage from "./pages/HomePage";

function App() {
  const notification = useSelector((state) => state.notification);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
