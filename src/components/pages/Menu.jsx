import React from 'react';
import ProductList from '../product_list/ProductList';
import Searchbar from '../searchbar/Searchbar';
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
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', fontSize: '60px', fontWeight: 'normal', color: '#414241', marginTop: '80px'}}>Our Products</h1>
        <div>
          <Searchbar/>
        </div>
        <div style={{marginTop: '20px'}}>
          <ProductList products = {products} category = {'burgers'}/> 
          <ProductList products = {products} category = {'sides'}/>       
          <ProductList products = {products} category = {'drinks'}/>   
        </div>
  
        </div>
     );
}

export default Menu;