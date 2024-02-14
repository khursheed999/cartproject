import React, {createContext, useState} from "react";
import { PRODUCTS } from "../Products";
import Product from "../Pages/Shop/Product";

export const ShopContext=createContext({
    cartItems:[],
    addToCart:()=>{},
    removeFromCart:()=>{},
    updateCart:()=>{},
    getTotalAmount:()=>{}
});




const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{
const [cartItems,setCartItems]=useState(getDefaultCart());

const getTotalAmount=()=>{
    let totalPrice=0;
   for(const item in cartItems){
    if(cartItems[item]>0){
        let itemInfo=PRODUCTS.find((Product)=>Product.id===Number(item));
        totalPrice+=cartItems[item]*itemInfo.price;
    }

   }
   return totalPrice;
}
const updateCart=(newCartNos,itemId)=>{
    setCartItems((prevItems)=>{({...prevItems, [itemId]:newCartNos})});
}
const addToCart=(itemId)=>{
    setCartItems((prevItems)=>({...prevItems,[itemId]:prevItems[itemId]+1}))
};


const removeFromCart=(itemId)=>{
    setCartItems((prevItems)=>({...prevItems,[itemId]:prevItems[itemId]-1}))
};
const contextValue={cartItems,
    addToCart,
    removeFromCart,
    updateCart,
    getTotalAmount
      
}

    return<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};