import { Link } from "react-router-dom";
import classes from "./product.module.css";

export default function Product({ id, title, image, price }) {
  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={classes.product}>
        <div className={classes["product__image"]}>
          <img src={image} alt={title} />
        </div>
        <h2 className={classes["product__title"]}>{title}</h2>
        <p className={classes["product__price"]}>R$ {price}</p>
      </div>
    </Link>
  );
}
