import React, { useState } from 'react';

const Signup = ({ setToken }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            nombre,
            email,
            apellido  // Usamos apellido como credencial de validación
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
            alert('Usuario registrado con éxito');
            // Opcional: auto-login después del registro
            // setToken(data.access_token);
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
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Apellido (será tu credencial de validación)</label>
                    <input 
                        type="text" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;