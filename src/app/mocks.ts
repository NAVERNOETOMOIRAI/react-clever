export const items = [{
    title: 'Альфа-бизнес онлайн',
    type: 'react',
    path: '/system/',
    url: 'http://localhost:8081',
    scope: 'app2', 
    module: './Widget', 
    items: [{
        title: 'Альфа-бизнес',
    type: 'react',
    path: '/system/page-1',
    url: 'http://localhost:8081',
    scope: 'app1', 
    module: './App1Index', 
    items:[]
    },
    {
        title: 'Альфа-бизнес-test',
    type: 'react',
    path: '/system/page-2',
    url: 'http://localhost:8081',
    scope: 'app1', 
    module: './App1Index', 
    items:[]
    },
    {
        title: 'Альфа-бизнес-testing',
    type: 'Iframe',
    path: '/system/hehehes',
    url: 'https://www.youtube.com/embed/uXWycyeTeCs',
    scope: null, 
    module: null, 
    items:[]
    },
]
},
{
    title: 'Альфа-бизнес онлайн',
    type: 'react',
    path: '/newsystem/',
    url: 'localhost:8002',
    scope: 'app2', 
    module: './Widget', 
    items: [{
        title: 'Альфа-бизнес',
    type: 'react',
    path: '/newsystem/page-a',
    url: 'http://localhost:8082',
    scope: 'app2', 
    module: './App2Index', 
    items:[]
    },
    {
        title: 'Альфа-бизнес-test',
    type: 'react',
    path: '/newsystem/page-b',
    url: 'http://localhost:8082',
    scope: 'app2', 
    module: './App2Index', 
    items:[]
    },
    {
        title: 'Альфа-бизнес-testing',
    type: 'react',
    path: '/newsystem/testing',
    url: 'nul',
    scope: 'app2', 
    module: './Widget', 
    items:[ {
            title: 'Альфа-бизнес',
        type: 'react',
        path: '/newsystem/testing/app1',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        },
        {
            title: 'Альфа-бизнес-test',
        type: 'react',
        path: '/newsystem/testing/app2',
        url: 'localhost:8000',
        scope: 'app2', 
        module: './Widget', 
        items:[]
        }]
    },
]
}]
export default items