import React, {useContext} from "react";
import { ShopContext } from "../../Context/Shop-Context";
import classes from "./CartItem.module.css";
const CartItem=(props)=>{
    const {cartItems,addToCart, removeFromCart,updateCart}=useContext(ShopContext);
  const {id, productName, price,productImage}=props.data;
  let totalAmount=price*cartItems[id];
  totalAmount=totalAmount.toFixed(2)
    return<div className={classes.cartItems}>
        <div>
            <img src={productImage}/>
        </div>
        <div className={classes.description}>
            <div><b>{productName}</b></div>
            <div><b>${totalAmount}</b></div>

         <div className={classes.cartItemSetting}>
         <button onClick={()=>removeFromCart(id)}>-</button>
        <input value={cartItems[id] } 
                   disabled              />
            <button onClick={()=>addToCart(id)}>+</button>
            
         </div>
        </div>
       
    </div>
};
export default CartItem;