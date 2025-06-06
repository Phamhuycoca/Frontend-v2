import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteIndex } from './routers';
import { AuthProvider } from './context/authProvider';
import { Provider } from 'react-redux';
import { store } from './stores/index';
import { PrivateRoute } from './routers/RouteProtected';
import { Suspense, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <>
            <Provider store={store}>
                <AuthProvider>
                    <BrowserRouter>
                        <Suspense
                        >
                            <Routes>
                                {RouteIndex.map((router) => (
                                    <Route
                                        key={router.path}
                                        path={router.path}
                                        element={
                                            router.protected ? (
                                                <PrivateRoute element={router.element} />
                                            ) : (
                                                router.element
                                            )
                                        }
                                    >
                                        {router.children &&
                                            router.children.map((child) => (
                                                <Route
                                                    key={child.path}
                                                    path={child.path}
                                                    element={
                                                        child.protected ? (
                                                            <PrivateRoute element={child.element} />
                                                        ) : (
                                                            child.element
                                                        )
                                                    }
                                                />
                                            ))}
                                    </Route>
                                ))}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                    <ToastContainer position="top-center" />
                </AuthProvider>
            </Provider>
        </>
    );
}

export default App;
