import { RouteConfig } from '../common/interface';
import { AdminLayout } from '../layout/Admin_Layout';
import { HomePage } from '../layout/Home';
import { LoginPage } from '../layout/Login';
import { MainPage } from '../layout/Main';
import { ProfilePage } from '../layout/Profile';
import { RegisterPage } from '../layout/Register';
import { CategoryPage } from '../modules/sys_category';
import { Notfound } from '../pages';

const RouteIndex: RouteConfig[] = [
    {
        path: '/',
        element: <HomePage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/profile/:id',
                element: <ProfilePage />,
            },
        ],
    },
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                path:'sys_category',
                element:<CategoryPage/>
            }
        ]
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
