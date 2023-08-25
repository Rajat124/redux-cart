import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://datafetcheapp-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((prod) => (
          <CartItem
            key={prod.id}
            item={{
              id: prod.id,
              title: prod.name,
              quantity: prod.quantity,
              total: prod.totalPrice,
              price: prod.price,
              description: prod.description,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
