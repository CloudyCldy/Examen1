import React, { useState } from 'react';
import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'usuarios'
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const clearSelection = () => {
        setUsuarioSeleccionado(null);
    };

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        setCurrentView('usuarios');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCurrentView('login');
    };

    const navigateToRegister = () => {
        setCurrentView('register');
    };

    const navigateToLogin = () => {
        setCurrentView('login');
    };

    if (!isAuthenticated) {
        return (
            <div>
                <h1>Autenticación</h1>
                {currentView === 'login' && (
                    <Login 
                        onLoginSuccess={handleLoginSuccess} 
                        onNavigateToRegister={navigateToRegister}
                    />
                )}
                {currentView === 'register' && (
                    <Register 
                        onRegisterSuccess={navigateToLogin} 
                        onNavigateToLogin={navigateToLogin}
                    />
                )}
            </div>
        );
    }

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <button onClick={handleLogout} style={{ marginBottom: '20px' }}>
                Cerrar Sesión
            </button>
            <UsuarioForm
                usuarioSeleccionado={usuarioSeleccionado}
                onRefresh={handleRefresh}
                clearSelection={clearSelection}
            />
            <UsuarioList
                onSelect={setUsuarioSeleccionado}
                onRefresh={handleRefresh}
            />
        </div>
    );
};

export default App;