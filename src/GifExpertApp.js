import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';
//import PropTypes from 'prop-types'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Cosmos']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/> 
        
            <ol>
                {
                    categories.map( category =>(
                        <GitGrid  
                            key={category}
                            category={category}
                        />
                        )
                    )
                }
            </ol>
        </>

    );  
}