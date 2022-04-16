import { BsCart2 } from "react-icons/bs";

import classes from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.container}>
        <li>Redux Shopping Cart</li>
        <li className={classes.badge}>
          <i>
            <BsCart2 size={25} />
          </i>
          <p>( 1 )</p>
        </li>
      </ul>
    </nav>
  );
}
