import React, { useEffect, useState } from 'react';
import { getUsuarioById } from './api';

const UsuarioDetail = ({ usuarioId }) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        if (usuarioId) {
            fetchUsuario();
        }
    }, [usuarioId]);

    const fetchUsuario = async () => {
        const data = await getUsuarioById(usuarioId);
        setUsuario(data);
    };

    if (!usuario) return <p>Selecciona un usuario...</p>;

    return (
        <div>
            <h2>Detalles del Usuario</h2>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Apellido:</strong> {usuario.lastname}</p>
        </div>
    );
};

export default UsuarioDetail;
