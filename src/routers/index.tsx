import { RouteConfig } from '../common/interface';
import { Notfound } from '../pages';

const RouteIndex: RouteConfig[] = [
    {
        path: '*',
        element: <Notfound />,
    },
];
export { RouteIndex };
