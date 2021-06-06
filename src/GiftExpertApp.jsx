import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2 className="title-site">Gift Expert App</h2>

            <AddCategory 
                setCategories={setCategories}
            />

            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid 
                            category={ category } 
                            key={category}/>
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
