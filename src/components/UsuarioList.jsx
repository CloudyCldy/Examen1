import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from './api';

const UsuarioList = ({ onSelect, onRefresh }) => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        const data = await getUsuarios();
        setUsuarios(data);
    };

    const handleDelete = async (id) => {
        await deleteUsuario(id);
        fetchUsuarios();
        onRefresh();
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <strong>{usuario.nombre} {usuario.lastname}</strong> - {usuario.email}
                        <button onClick={() => onSelect(usuario)}>Editar</button>
                        <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsuarioList;
