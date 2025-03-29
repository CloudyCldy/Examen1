import React, { useState } from 'react';
import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [showSignup, setShowSignup] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const clearSelection = () => {
        setUsuarioSeleccionado(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    if (!token) {
        return (
            <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                {showSignup ? (
                    <>
                        <Signup setToken={setToken} />
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            ¿Ya tienes una cuenta?{' '}
                            <button 
                                onClick={() => setShowSignup(false)}
                                style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                            >
                                Iniciar sesión
                            </button>
                        </p>
                    </>
                ) : (
                    <>
                        <Login setToken={(token) => {
                            localStorage.setItem('token', token);
                            setToken(token);
                        }} />
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>
                            ¿No tienes una cuenta?{' '}
                            <button 
                                onClick={() => setShowSignup(true)}
                                style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                            >
                                Regístrate
                            </button>
                        </p>
                    </>
                )}
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Gestión de Usuarios</h1>
                <button 
                    onClick={handleLogout}
                    style={{ 
                        padding: '8px 16px', 
                        background: '#ff4444', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer' 
                    }}
                >
                    Cerrar sesión
                </button>
            </div>
            <UsuarioForm
                usuarioSeleccionado={usuarioSeleccionado}
                onRefresh={handleRefresh}
                clearSelection={clearSelection}
                token={token}
            />
            <UsuarioList
                onSelect={setUsuarioSeleccionado}
                onRefresh={handleRefresh}
                token={token}
            />
        </div>
    );
};

export default App;