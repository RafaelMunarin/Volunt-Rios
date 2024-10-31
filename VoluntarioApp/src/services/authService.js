import axios from 'axios';

const registerUser = async (service, userData, isLogin) => {
    // const API_URL = `http://192.168.1.4:5000/api/${service}` 
    const API_URL = `http://10.7.5.29:5000/api/${service}` 
    try {
        const response = await axios.post(API_URL, userData)
        return response.data 
    } catch (error) {
        throw new Error(error.response?.data?.message || `Erro ao realizar o ${isLogin ? 'login' : 'cadastro'}.\n\nTente novamente!`)
    }
}

const logoutUser = async (service, userData) => {
    // const API_URL = `http://192.168.1.4:5000/api/${service}` 
    const API_URL = `http://10.7.5.29:5000/api/${service}` 
    try {
        const response = await axios.post(API_URL, userData)
        return response.data 
    } catch (error) {
        throw new Error(error.response?.data?.message || `Erro ao realizar o ${isLogin ? 'login' : 'cadastro'}.\n\nTente novamente!`)
    }
}

export { registerUser, logoutUser };
