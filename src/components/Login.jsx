import React, { useState } from 'react';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email,
            apellido  // Validamos con el apellido en lugar de contraseña
        };

        try {
            const response = await fetch('https://13.218.99.111/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas. Verifica tu email y apellido.');
            }

            const data = await response.json();
            setToken(data.access_token);
            alert('Inicio de sesión exitoso');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
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
                    <label>Apellido (credencial de validación)</label>
                    <input 
                        type="text" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;