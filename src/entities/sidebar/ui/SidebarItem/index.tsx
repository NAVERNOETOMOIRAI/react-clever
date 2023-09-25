import {SidebarItem as SidebarItemType} from '@/entities/sidebar/model/types'
import { Link } from 'react-router-dom';
import { ChevronDownCompactMIcon } from '@alfalab/icons-glyph/ChevronDownCompactMIcon';
import './styles.scss';
import { useState } from 'react';
import classNames from 'classnames';


export const SidebarItem = (props: SidebarItemType) => {
    const [isOpen, setIsOpen] = useState(false);
    const {items, title, path} = props;
    const renderItem = (path: string, title: string) => (
        <li className='sidebar-item__wrapper'><div className='sidebar-item'><Link relative='route' to={path}>{title}</Link></div></li>
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
}