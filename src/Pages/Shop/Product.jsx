import React, {useContext} from 'react';
import classes from './Product.module.css';
import { ShopContext } from '../../Context/Shop-Context';
const Product=(props)=>{
    const {id, productName, price,productImage}=props.data;

    const {cartItems,addToCart,removeFromCart}=useContext(ShopContext);
    
    return(
        <div className={classes.product} >   
           <img src={productImage} />
           <div className={classes.description}>
            <span><b>{productName}</b></span>
            <br/>
            <span>${price}</span>
           </div>
           <button className={classes.addToCartButton} onClick={()=>addToCart(id)}>Add to Cart   {cartItems[id]>0 && <>( {cartItems[id]})</>} </button>
        </div>
    )
};
export default Product;