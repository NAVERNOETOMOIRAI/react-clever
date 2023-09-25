import { SidebarHeader } from "@/entities/sidebar/ui"
import { SidebarItem } from "@/entities/sidebar/ui/SidebarItem";
import './styles.scss'
import { useLoaderData } from "react-router-dom";

export const Sidebar: React.FC = () => {
    const loaderData = useLoaderData();
    console.log(loaderData, '!!')
    const items = [{
        title: 'Альфа-бизнес онлайн',
        type: 'react',
        path: 'system/auth',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items: [{
            title: 'Альфа-бизнес',
        type: 'react',
        path: 'system/newsystem',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
        {
            title: 'Альфа-бизнес-test',
        type: 'react',
        path: 'system/lastsystem',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
        {
            title: 'Альфа-бизнес-testing',
        type: 'react',
        path: 'system/hehehes',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
    ]
    },
    {
        title: 'Альфа-бизнес онлайн',
        type: 'react',
        path: 'system/qweqwe',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items: [{
            title: 'Альфа-бизнес',
        type: 'react',
        path: 'system',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
        {
            title: 'Альфа-бизнес-test',
        type: 'react',
        path: 'system',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
        {
            title: 'Альфа-бизнес-testing',
        type: 'react',
        path: 'system',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[ {
                title: 'Альфа-бизнес',
            type: 'react',
            path: 'system',
            url: 'localhost:8000',
            scope: 'app2', 
            module: './Widget', 
            items:[]
            },
            {
                title: 'Альфа-бизнес-test',
            type: 'react',
            path: 'system',
            url: 'localhost:8000',
            scope: 'app2', 
            module: './Widget', 
            items:[]
            }]
        },
    ]
    }]
    return(<div className="sidebar">
        <SidebarHeader>
        <ul style={{listStyleType: 'none'}}>
            {items.map((item) => <SidebarItem {...item}/>)}
        </ul>
        </SidebarHeader>
    </div>)
}