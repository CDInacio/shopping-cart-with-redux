import { useSelector } from "react-redux";

import Product from "./product";
import classes from "./products.module.css";

export default function Products() {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className={classes.container}>
      <div className={classes.products}>
        {products?.map((product, i) => (
          <Product
            key={i}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
