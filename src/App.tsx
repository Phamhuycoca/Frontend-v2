import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteIndex } from './routers';
import PrivateRoute from './routers/PrivateRoute';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {RouteIndex.map((router) => (
                        <Route
                            key={router.path}
                            path={router.path}
                            element={router.protected ? <PrivateRoute element={router.element} /> : router.element}
                        >
                            {router.children &&
                                router.children.map((child) => (
                                    <Route
                                        key={child.path}
                                        path={child.path}
                                        element={
                                            child.protected ? <PrivateRoute element={child.element} /> : child.element
                                        }
                                    />
                                ))}
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>
            <ToastContainer position="top-center" />
        </>
    );
}

export default App;
