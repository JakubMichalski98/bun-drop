import React from 'react';
import Styles from './ProductList.module.css'
import ProductCard from '../product_card/ProductCard';

function ProductList({products, category, searchTerm, onClick}) {

    let filteredProducts = [];
    let categoryProducts = [];
    let displayCategory = '';

    if (category === '') {
        categoryProducts = [...products];
        filteredProducts = categoryProducts.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
        displayCategory = 'Your Favorites';
    }
    else {
         categoryProducts = products.filter(p => p.category === category);
         filteredProducts = categoryProducts.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
         displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
    }


    function handleClick(product) {
        onClick(product);
    }

    return ( 
        <div className={Styles.container}>

            {filteredProducts.length > 0 ? (
                <div>
                <h2>{displayCategory}</h2>
                <div className={Styles.productlist}>
                    {filteredProducts.map((p) =>(

                        <ProductCard key={p.id} product = {p} onProductClick = {handleClick}/>

                    ))}
                </div>
            </div>
            ) : 
            (<>
            </>
            )}
            
           
        </div>

     );
}

export default ProductList;