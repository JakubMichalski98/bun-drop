import React from 'react';
import ProductList from '../product_list/ProductList';
import ProductCard from '../product_card/ProductCard';
import { useEffect, useState } from 'react';

function Menu() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          fetch(`http://localhost:3000/products`)
          .then(res => res.json())
          .then(data => setProducts(data));
        }
        fetchProducts();
      }, [])

    return ( 
        <>
        <h1 style={{textAlign: 'center', fontSize: '40px', fontWeight: 'normal', color: '#414241', marginTop: '80px'}}>Our Products</h1>
        <ProductList products = {products} category = {'burgers'}/> 
        <ProductList products = {products} category = {'sides'}/>       
        <ProductList products = {products} category = {'drinks'}/>     
        </>
     );
}

export default Menu;