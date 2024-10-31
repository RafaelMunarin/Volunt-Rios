import axios from 'axios';

const registerEvent = async (service, eventData) => {
    // const API_URL =  `http://192.168.1.4:5000/api/${service}`
    const API_URL =  `http://10.7.5.29:5000/api/${service}`
    try {
        const response = await axios.post(`${API_URL}`, eventData)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao cadastrar o evento.\n\nTente novamente!')
    }
}

const searchEvents = async (service) => {
    // const API_URL =  `http://192.168.1.4:5000/api/${service}`
    const API_URL =  `http://10.7.5.29:5000/api/${service}`
    try {
        const response = await axios.get(`${API_URL}`)
        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Erro ao buscar eventos.\n\nTente novamente!')
    }
}

export { registerEvent, searchEvents };
