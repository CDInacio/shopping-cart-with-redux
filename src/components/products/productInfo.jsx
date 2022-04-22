import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/actions/products";
import classes from "./productDetail.module.css";

export default function ProductInfo() {
  const dispatach = useDispatch();
  const product = useSelector((state) => state.products.product);

  function handleAddToCart() {
    dispatach(addToCart(product));
  }

  return (
    <div className={classes["product__info"]}>
      <div className={classes["product__detail"]}>
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p className={classes["product__price"]}>R$ {product.price}</p>
      </div>
      <div className={classes["product__cart"]}>
        <h2 className={classes["product__total"]}>Total: R$</h2>
        <div className={classes["product__quantity"]}>
          <label htmlFor="quantity">Quantidade</label>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">3</option>
          </select>
        </div>
        <div className={classes["product__button"]}>
          <button
            onClick={handleAddToCart}
            className={classes["product__button_cart"]}
          >
            Adcioniar ao carrinho
          </button>
          <button className={classes["product__button_buy"]}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
