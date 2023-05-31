import React from 'react';
import Styles from './Searchbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai';

function Searchbar() {
    return ( 
        <div className={Styles.searchcontainer}>
            <div className={Styles.inputwrapper}>
                <div className={Styles.iconcontainer}>
                    <AiOutlineSearch className={Styles.searchicon}/>
                </div>
               
                <input className={Styles.searchinput} type='text' placeholder='Search for product'/>
            </div>            
        </div>
     );
}

export default Searchbar;