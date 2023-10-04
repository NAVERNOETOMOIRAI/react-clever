import { SidebarHeader } from "@/entities/sidebar/ui"
import { SidebarItem } from "@/entities/sidebar/ui/SidebarItem";
import { useLoaderData } from "react-router-dom";
import { SidebarItem as SidebarType } from "@/entities/sidebar/model/types";
import './styles.scss'


export const Sidebar: React.FC = () => {
    const items = useLoaderData() as unknown as SidebarType[];
    return(<div className="sidebar">
        <SidebarHeader/>
        <ul>
            {items.map((item) => <SidebarItem {...item}/>)}
        </ul>
    </div>)
}