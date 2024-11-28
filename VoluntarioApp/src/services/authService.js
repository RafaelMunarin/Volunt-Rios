import axios from 'axios';
import API_BASE_URL from '../config/apiBaseUrl';

const registerUser = async (service, userData, isLogin) => {
    const API_URL = `${API_BASE_URL}/${service}`;
    try {
        const response = await axios.post(API_URL, userData)
        return response.data 
    } catch (error) {
        throw new Error(error.response?.data?.message || `Erro ao realizar o ${isLogin ? 'login' : 'cadastro'}.\n\nTente novamente!`)
    }
}

const logoutUser = async (service, userData) => {
    const API_URL = `${API_BASE_URL}/${service}`
    try {
        const response = await axios.post(API_URL, userData)
        return response.data 
    } catch (error) {
        throw new Error(error.response?.data?.message || `Erro ao realizar o ${isLogin ? 'login' : 'cadastro'}.\n\nTente novamente!`)
    }
}

export { registerUser, logoutUser };
