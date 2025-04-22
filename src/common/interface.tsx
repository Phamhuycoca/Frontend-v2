import React from 'react';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    protected?: boolean | false;
    children?: RouteConfig[];
}
export type { RouteConfig };
export const PathTileAdmin:{key:string,label:string}[]=
[
    {key:'sys_category',label:'Danh mục'},
    {key:'sys_user',label:'Người dùng'},
]