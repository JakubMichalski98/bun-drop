import React from 'react';
import Styles from './ProductList.module.css'
import ProductCard from '../product_card/ProductCard';

function ProductList({products, category}) {

    const burgers = products.filter(p => p.category === category);
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return ( 
        <div className={Styles.container}>
            <h2>{displayCategory}</h2>
            <div className={Styles.productlist}>
                {burgers.map((p) =>(

                    <ProductCard productName={p.name} price={p.price} image={p.image}/>

                ))}
            </div>
        </div>

     );
}

export default ProductList;