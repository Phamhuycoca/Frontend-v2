import React from 'react';

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    protected?: boolean | false;
    children?: RouteConfig[];
}
export type { RouteConfig };
