'use client';
import Aos from 'aos';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const cookies = new Cookies();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        Aos.init({
            duration: 600,
            once: true,
        });
    }, []);

    useEffect(() => {
        // const isLoggedIn = document.cookie.includes('auth_token=');
        const isLoggedIn = Cookies.get('auth_token');
        setIsAuthenticated(isLoggedIn);
    }, []);

    const login = (token) => {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 10);
        Cookies.set('auth_token', token, {
            expires: expiryDate,
            path: '/',
            secure: true,
            sameSite: 'Lax',
        });
        setIsAuthenticated(true);
        router.push('/');
    };

    const logout = () => {
        Cookies.set('auth_token', '', {
            expires: new Date(0),
            path: '/',
        });
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
