import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './authContext';
import { getToken, removeToken, saveToken } from '../common/localStorage';

// ✅ AuthProvider: Bọc toàn bộ ứng dụng với Context này
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ token: string } | null>(null);
    useEffect(() => {
        const token = getToken();
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = (token: string) => {
        saveToken(token);
        setUser({ token });
    };

    const logout = () => {
        removeToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user) }}>
            {children}
        </AuthContext.Provider>
    );
};
