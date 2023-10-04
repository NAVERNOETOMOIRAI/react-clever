import {SidebarItem as SidebarItemType} from '@/entities/sidebar/model/types'
import { NavLink } from 'react-router-dom';
import { ChevronDownCompactMIcon } from '@alfalab/icons-glyph/ChevronDownCompactMIcon';
import { memo, useState } from 'react';
import classNames from 'classnames';
import './styles.scss';


export const SidebarItem = memo((props: SidebarItemType) => {
    const {items, title, path} = props;
    const [isOpen, setIsOpen] = useState(() => window.location.pathname.includes(path));
    const renderItem = (path: string, title: string) => (
        <li className='sidebar-item__wrapper'><NavLink className='sidebar-item' to={path}>{title}</NavLink></li>
    )
    if(!items.length){
        return renderItem(path, title)
    }
    const handleOnclick = (event:  React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsOpen((prev) => !prev);
    }
    return (
        <li className='sidebar-item__wrapper'>
            <div className={classNames('sidebar-item','sidebar-item__nesting', {
                "sidebar-item__open": isOpen,
            })} onClick={handleOnclick}><a className='daqw'>{title}</a> <span><ChevronDownCompactMIcon/></span></div>
            <ul className={classNames('sidebar-item__submenu', {
                "sidebar-item__submenu-open": isOpen
            })}>
                {items.map((sidebarItem) => <SidebarItem {...sidebarItem}/>)}
            </ul>
        </li>
    )
})