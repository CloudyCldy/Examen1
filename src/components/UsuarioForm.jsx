import React, { useState, useEffect } from 'react';
import { createUsuario, updateUsuario } from './api';

const UsuarioForm = ({ usuarioSeleccionado, onRefresh, clearSelection }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');

    useEffect(() => {
        if (usuarioSeleccionado) {
            setNombre(usuarioSeleccionado.nombre);
            setEmail(usuarioSeleccionado.email);
            setLastname(usuarioSeleccionado.lastname);
        } else {
            setNombre('');
            setEmail('');
            setLastname('');
        }
    }, [usuarioSeleccionado]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = { nombre, email, lastname };

        if (usuarioSeleccionado) {
            await updateUsuario(usuarioSeleccionado.id, usuario);
        } else {
            await createUsuario(usuario);
        }

        onRefresh();
        clearSelection();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{usuarioSeleccionado ? 'Editar Usuario' : 'Crear Usuario'}</h3>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Apellido"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default UsuarioForm;
