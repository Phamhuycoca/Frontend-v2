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
import { Spin } from 'antd';

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
                            fallback={
                                <div
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100vw',
                                        height: '100vh',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 9999,
                                    }}
                                >
                                    <Spin size="large" />
                                </div>
                            }
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
