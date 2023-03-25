import React from "react";
import { DivCart } from "./Style";

const Cart = ({ cart, removeCart }) => {
    return (
        <DivCart>
            {cart.map((item) => (
                <section key={item.id}>
                    <img src={item.image}></img>
                    <p>{item.name}</p>
                    <span><h4>x</h4> {item.quantity}</span>

                    <button onClick={() => removeCart(item)}>Remove to Cart</button>
                </section>


            ))}
        </DivCart>
    )


}

export default Cart