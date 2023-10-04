import React, { ReactNode } from "react";
import Cat from '@/shared/assets/Cat.svg'
import './styles.scss';
import { Link } from "react-router-dom";

export const SidebarHeader = () => {
    return(
        <Link to='/' className="sidebar-header"><Cat/></Link>
    )
}