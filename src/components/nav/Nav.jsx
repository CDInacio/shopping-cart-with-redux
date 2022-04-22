import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./nav.module.css";

export default function Nav() {
  const cart = useSelector((state) => state.cart);
  const len = cart.items.length;

  return (
    <nav className={classes.navigation}>
      <ul className={classes.container}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <li>Redux Shopping Cart</li>
        </Link>
        <li className={classes.badge}>
          <i>
            <BsCart2 size={25} />
          </i>
          <p>( {len} )</p>
        </li>
      </ul>
    </nav>
  );
}
