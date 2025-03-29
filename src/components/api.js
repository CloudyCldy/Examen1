import axios from 'axios';

const API_URL = "https://13.218.99.111";  // Cambia si tu FastAPI está en otro puerto o servidor

// Obtener todos los usuarios
export const getUsuarios = async () => {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
};

// Obtener un usuario por ID
export const getUsuarioById = async (id) => {
    const response = await axios.get(`${API_URL}/usuarios/${id}`);
    return response.data;
};

// Crear un nuevo usuario
export const createUsuario = async (usuario) => {
    const response = await axios.post(`${API_URL}/usuarios`, usuario);
    return response.data;
};

// Actualizar un usuario
export const updateUsuario = async (id, usuario) => {
    const response = await axios.put(`${API_URL}/usuarios/${id}`, usuario);
    return response.data;
};

// Eliminar un usuario
export const deleteUsuario = async (id) => {
    const response = await axios.delete(`${API_URL}/usuarios/${id}`);
    return response.data;
};
