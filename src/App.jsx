import React, { useState } from 'react';
import UsuarioList from './components/UsuarioList';
import UsuarioForm from './components/UsuarioForm';

const App = () => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const clearSelection = () => {
        setUsuarioSeleccionado(null);
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
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
