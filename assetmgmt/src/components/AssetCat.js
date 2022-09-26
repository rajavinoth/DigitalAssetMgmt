import React from 'react';
import '../CSS/asset_category.css';


export const AssetCat = ({ id, img1, img2, img3, img4, category_name }) => {
    return(
        <section className='asset_category_container'>
            <img src={img1} alt='' /> <img src={img2} alt='' /><br/>
            <img src={img3} alt='' /> <img src={img4} alt='' />
            <h3>{category_name}</h3>
            <hr></hr>
            <div className='type'>Type</div><div className='typeName'>HDRI</div><br/>
            <div className='type'>Size</div><div className='typeName'>3.7 GB</div><br/>
            <div className='type'>Files</div><div className='typeName'>112</div>
        </section>
    );
};