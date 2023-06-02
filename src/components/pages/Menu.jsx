import React from 'react';
import ProductList from '../product_list/ProductList';
import Searchbar from '../searchbar/Searchbar';
import ProductModal from '../ProductModal/ProductModal';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

function Menu() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    const {addToCart} = useCart();

    useEffect(() => {
        async function fetchProducts() {
          fetch(`http://localhost:3000/products`)
          .then(res => res.json())
          .then(data => setProducts(data));
        }
        fetchProducts();
      }, [])



      function handleInputChange(e) {
        setSearchTerm(e.target.value);
      }

      function handleClick(product) 
      {
        setSelectedProduct(product);
        setOpenModal(true);
        console.log(`${product.name} clicked!`);
      }
      
      function handleAddClick(product) {
        setOpenModal(false);
        addToCart(product)
      }

      function handleCloseClick() {
        setOpenModal(false);
      }

    return ( 
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        <h1 style={{textAlign: 'center', fontSize: '60px', fontWeight: 'normal', color: '#414241', marginTop: '40px'}}>Our Products</h1>
        <div>
          <Searchbar inputValue = {searchTerm} onInputChange={handleInputChange}/>
        </div> 
        <div style={{marginTop: '20px'}}>
          <ProductList products = {products} category = {'burgers'} searchTerm = {searchTerm} onClick={handleClick}/> 
          <ProductList products = {products} category = {'sides'} searchTerm = {searchTerm} onClick={handleClick}/>       
          <ProductList products = {products} category = {'drinks'} searchTerm = {searchTerm} onClick={handleClick}/>   
        </div>

        {openModal && <ProductModal product = {selectedProduct} handleXClick={handleCloseClick} handleAddClick={handleAddClick}/>}
  
        </div>
     );
}

export default Menu;