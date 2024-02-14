import classes from './Cart.module.css';
import { PRODUCTS } from '../../Products';
import React, {useContext} from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/Shop-Context';

const Cart=(props)=>{
    const navgate=useNavigate();

 const {cartItems,getTotalAmount }=useContext(ShopContext);
   let totalPrice=getTotalAmount();
   totalPrice=totalPrice.toFixed(2);

return(
<div className={classes.cart}>
<div>
    <h1>Your Cart Items</h1>
</div>
<div className={classes.cartItems}>
 {PRODUCTS.map((product)=>{

    if(cartItems[product.id]!==0){
        return<CartItem data={product}
        key={product.id}/>
    }

 }
  )}
</div>
<div className={classes.outPut}>
{totalPrice> 0?<div className={classes.checkOut}>
   
            <button onClick={()=>navgate("/")} >Continue Shopping</button>
            <button>CheckOut</button>
    <p>SubTotalAmount: ${totalPrice}</p>

        </div>:<p>No Items in the cart</p> }
</div>
</div>);
};
export default Cart;