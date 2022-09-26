import React from 'react';
import '../CSS/asset_category.css';
import { AssetCat } from './AssetCat';

const AssetCategory = ({datas}) => {
    return(
        <>
            {datas.map((data) => {
            return (
            <AssetCat key={data.id} {...data}></AssetCat>
            );
            })}    
        </>
    );
};

export default AssetCategory;