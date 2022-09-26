import React, {useState, useEffect} from 'react';
import '../CSS/Assets.css';
import { useGlobalContext } from '../context'
import AssetCategory from './asset_category';
import mydata from './data';

const Assets = () => {
    const [data, setData] = useState(mydata);    
    const {isSidebarOpen} = useGlobalContext()

    useEffect(() => {
        setData(mydata)
    }, [mydata]);
    return(       
        <>        
        <div className={isSidebarOpen?'assetswithsbar':'assets'}>
            <div className='asset-content'>
            <AssetCategory datas={data}/>
            </div>
        </div>
        <div className='page-number'>1 2 3 4</div>
        </> 
    );
}

export default Assets;