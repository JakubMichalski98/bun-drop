import React from 'react';
import ProductList from '../../product_list/ProductList';
import Searchbar from '../../searchbar/Searchbar';
import ProductModal from '../../ProductModal/ProductModal';
import { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { useUser } from '../../../context/UserContext';
import Styles from './Menu.module.css'

function Menu() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [userFavorites, setUserFavorites] = useState([]);

    const {addToCart} = useCart();
    const {isSignedIn, userId, users} =  useUser();

    const user = users.find(u => u.id === userId);

    useEffect(() => {
        async function fetchProducts() {
          fetch(`http://localhost:3000/products`)
          .then(res => res.json())
          .then(data => setProducts(data));
        }
        fetchProducts();
      }, [])

      useEffect(() => {
        document.body.style.overflow = openModal ? 'hidden' : 'auto';
    },[openModal])

      useEffect(() => {
        if (user) {
          setUserFavorites(user.favorites);
        }
      }, [users])


      function handleInputChange(e) {
        setSearchTerm(e.target.value);
      }

      function handleClick(product) 
      {
        setSelectedProduct(product);
        setOpenModal(true);
        console.log(`${product.name} clicked!`);
      }
      
      function handleAddClick(product, quantity) {
        setOpenModal(false);
        addToCart(product, quantity)
      }

      function handleCloseClick() {
        setOpenModal(false);
      }

    return ( 
        <div className={Styles.menucontainer}>
          <h1>Our Products</h1>
          <div>
            <Searchbar inputValue = {searchTerm} onInputChange={handleInputChange}/>
          </div> 
          <div style={{marginTop: '3rem'}}>
            {isSignedIn && user &&
            <div>
              {userFavorites.map((f) => (
                <p>{f.name}</p>
              ))}
            </div>}
      
            <ProductList products = {userFavorites} category = {''} searchTerm = {searchTerm} onClick={handleClick}/>
            <ProductList products = {products} category = {'burgers'} searchTerm = {searchTerm} onClick={handleClick}/> 
            <ProductList products = {products} category = {'sides'} searchTerm = {searchTerm} onClick={handleClick}/>       
            <ProductList products = {products} category = {'drinks'} searchTerm = {searchTerm} onClick={handleClick}/>
          
          </div>
          {openModal && <ProductModal product = {selectedProduct} handleXClick={handleCloseClick} handleAddClick={handleAddClick}/>}
        </div>
     );
}

export default Menu;