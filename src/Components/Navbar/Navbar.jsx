import React, {useContext} from "react";
import { ShoppingCart } from "phosphor-react";
import { NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/Shop-Context";

export const Navbar=()=>{
    const { cartItems}=useContext(ShopContext);
    let cartItemsPresent=0;
    for(let i=1;i<PRODUCTS.length+1;i++){
         cartItemsPresent=cartItemsPresent+cartItems[i];
    }
    return<div className={classes.navbar}>
        <div className={classes.links}>
            <span className={classes.shopIcon}> 
            <NavLink to='/'>Shop</NavLink >

            </span>
            
            <span className={classes.cartIcon}>
                
            <NavLink  to='/Cart'>
                <p className={classes.cartName}>
                    <ShoppingCart size={32}/>
                </p>
            </NavLink >
            </span>
            <sup className={classes.cartNo}>
                 {cartItemsPresent}
                </sup>
        </div>
    </div>
};