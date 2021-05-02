import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dargon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter'])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            { 
                categories.map( category => (
                    <GifGrid key={category} category={ category } />
                ))
            }
        </>
    )
}
