import React, {useState} from 'react';
import '../CSS/Sidebar.css';
import { FaHome } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useGlobalContext } from '../context'

const Sidebar = () => {
    const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext()
    return(
        <div className={isSidebarOpen?'sidebarExpended':'sidebar'}>
            <ul>
            <li onClick={isSidebarOpen?closeSidebar:openSidebar}>{isSidebarOpen?<AiOutlineMenuFold size={27}/>:<AiOutlineMenuUnfold size={27}/>}</li>
            <li><FaHome size={27} color='white'/> <menuItem className="menu-item">{isSidebarOpen?'Home':''}</menuItem></li>
            </ul>
        </div>
    );
}

export default Sidebar;