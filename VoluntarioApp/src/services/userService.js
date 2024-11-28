import axios from 'axios';
import API_BASE_URL from '../config/apiBaseUrl';

// Função para buscar as informações do usuário
const getUser = async (service, userId) => {
    const API_URL = `${API_BASE_URL}/${service}/${userId}`;
    try {
        const response = await axios.get(API_URL);  // Faz a requisição GET para obter o usuário
        return response.data;  // Retorna os dados do usuário
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao obter as informações do usuário.\n\nTente novamente!');
    }
};


const editUser = async (service, userId, userData) => {
    const API_URL = `${API_BASE_URL}/${service}/${userId}`;
    const { senha, ...dataToUpdate } = userData;  
    try {
        // Envia os dados para a API, sem a senha
        const response = await axios.put(API_URL, dataToUpdate);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao editar as informações do usuário.\n\nTente novamente!');
    }
};

export { getUser, editUser };
