import React, { useState } from 'react';

const Signup = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            nombre,
            email,
            lastname,
            password
        };

        try {
            const response = await fetch('https://13.218.99.111/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error al crear el usuario');
            }

            const data = await response.json();
            alert('Usuario creado con éxito');
            console.log(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
