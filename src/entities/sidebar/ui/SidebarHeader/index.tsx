import React, { ReactNode } from "react";
import Cat from '@/shared/assets/Cat.svg'
import './styles.scss';
import { Link } from "react-router-dom";
type Props = {
    children: ReactNode;
}

export const SidebarHeader = (props: Props) => {
    return(
    <>
        <Link to='/' className="sidebar-header"><Cat/></Link>
        {props.children}
    </>
    )
}