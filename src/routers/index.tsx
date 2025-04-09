import { RouteConfig } from '../common/interface';
import { LoginPage } from '../layout/Login';
import { RegisterPage } from '../layout/Register';
import { Notfound } from '../pages';

const RouteIndex: RouteConfig[] = [
    {
        path: '/',
        element: <></>,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '*',
        element: <Notfound />,
    },
];
export { RouteIndex };
