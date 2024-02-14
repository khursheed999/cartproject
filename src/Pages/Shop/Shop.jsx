import React from "react";
import classes from './Shop.module.css';
import { PRODUCTS } from "../../Products";
import Product from './Product';
const Shop =()=>{
     return<div className={classes.shop}>
        <div className={classes.shopTitle}>
            <h1>Rah Shopping Store</h1>
        </div>
        <div className={classes.products}>

             {PRODUCTS.map((product)=>(<Product key={product.id} data={product} />))}
             </div>
        </div>
};
 export default Shop;