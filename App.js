import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Navigator from './navigator/Navigator';

export default function App() {
    return (
        <AuthProvider>
            <Navigator/>
        </AuthProvider>
    );
}
