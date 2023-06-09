import React from 'react';
import { useEffect, useState } from 'react';
import Hero from '../../hero/Hero';

function Home() {

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
            <Hero/>
        </>
     );
}

export default Home;