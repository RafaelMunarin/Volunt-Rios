import axios from 'axios';
import API_BASE_URL from '../config/apiBaseUrl';

const registerEvent = async (service, eventData) => {
    const API_URL = `${API_BASE_URL}/${service}`;
    try {
        const response = await axios.post(`${API_URL}`, eventData)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao cadastrar o evento.\n\nTente novamente!')
    }
}

const searchEvents = async (service) => {
    const API_URL = `${API_BASE_URL}/${service}`;
    try {
        const response = await axios.get(`${API_URL}`)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao buscar eventos.\n\nTente novamente!')
    }
}

const applyToEvent = async (service, applicationData) => {
    const API_URL = `${API_BASE_URL}/${service}`;
    try {
        const response = await axios.post(`${API_URL}`, applicationData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao processar a candidatura.\n\nTente novamente!');
    }
};

const fetchUserEvents = async (service, usuarioId) => {
    const API_URL = `${API_BASE_URL}/${service}/${usuarioId}`;
    try {
        const response = await axios.get(`${API_URL}`, { params: { usuarioId } });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao buscar eventos do usuário.\n\nTente novamente!');
    }
};

const cancelCandidacy = async (service, data) => {
    const API_URL = `${API_BASE_URL}/${service}`;
    try {
        const response = await axios.delete(API_URL, { data });
        return response.data;
    } catch (error) {
        console.error('Erro no cancelamento da candidatura:', error);
        return { success: false, message: error.response?.data?.message || 'Erro no cancelamento da candidatura.' };
    }
};

export { registerEvent, searchEvents, applyToEvent, fetchUserEvents, cancelCandidacy };
