import React, { useState } from 'react';
import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [token, setToken] = useState(null); // Para manejar el token de autenticación
    const [isLogin, setIsLogin] = useState(true); // Controlar si estamos en login o signup

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const clearSelection = () => {
        setUsuarioSeleccionado(null);
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin); // Cambiar entre login y signup
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>

            {/* Mostrar Login o Signup según el estado */}
            {isLogin ? (
                <Login setToken={setToken} />
            ) : (
                <Signup setToken={setToken} />
            )}

            <button onClick={toggleAuthMode}>
                {isLogin ? 'No tienes cuenta? Regístrate' : 'Ya tienes cuenta? Inicia sesión'}
            </button>

            {/* Mostrar la lista de usuarios si el token está disponible */}
            {token && (
                <>
                    <UsuarioForm
                        usuarioSeleccionado={usuarioSeleccionado}
                        onRefresh={handleRefresh}
                        clearSelection={clearSelection}
                    />
                    <UsuarioList
                        onSelect={setUsuarioSeleccionado}
                        onRefresh={handleRefresh}
                    />
                </>
            )}
        </div>
    );
};

export default App;
