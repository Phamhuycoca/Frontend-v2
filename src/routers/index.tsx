import { RouteConfig } from '../common/interface';
import { HomePage } from '../layout/Home';
import { LoginPage } from '../layout/Login';
import { MainPage } from '../layout/Main';
import { RegisterPage } from '../layout/Register';
import { Notfound } from '../pages';

const RouteIndex: RouteConfig[] = [
    {
        path: '/',
        element: <HomePage/>,
        children:[
            {
                path:'/',
                element: <MainPage/>
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
