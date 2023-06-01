import React from 'react';
import Styles from './Searchbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai';

function Searchbar({inputValue: searchTerm, onInputChange}) {
    return ( 
        <div className={Styles.searchcontainer}>
            <div className={Styles.inputwrapper}>
                <div className={Styles.iconcontainer}>
                    <AiOutlineSearch className={Styles.searchicon}/>
                </div>
               
                <input className={Styles.searchinput} type='text' placeholder='Search for product' value={searchTerm} onChange={onInputChange}/>
            </div>            
        </div>
     );
}

export default Searchbar;