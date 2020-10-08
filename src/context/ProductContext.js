import React, {useState, createContext} from "react";

export const ProductContext = createContext();
const {Provider, Consumer} = ProductContext;
console.log(ProductContext);