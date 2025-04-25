import React from 'react';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    protected?: boolean | false;
    children?: RouteConfig[];
}
interface ApiResponse<T> {
    data: T[];
    message: string;
    status: number;
    success: boolean;
}
interface ResponseData<T> {
    data: T;
    page: number;
    page_size: number;
    total: number;
}
interface CommonListQuery {
    page?: number;
    page_size?: number;
    order?: string;
    filter: string;
    search: string;
}
export type { RouteConfig, ApiResponse, ResponseData, CommonListQuery };
export const PathTileAdmin: { key: string; label: string }[] = [
    { key: 'sys_category', label: 'Danh mục' },
    { key: 'sys_user', label: 'Người dùng' },
];
