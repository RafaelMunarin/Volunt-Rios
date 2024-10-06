import React, { useState } from 'react';
import { styles } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterLogin = () => {
    const navigate = useNavigate();
    const [formType, setFormType] = useState('register');
    const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = 'http://localhost:5000/api/register-login'; // URL completa
        try {
            const response = await axios.post(endpoint, formData);
            console.log('Dados do usuário:', response.data.user);
            localStorage.setItem('username', response.data.user.nome); 
            navigate('/expeditions'); 
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao processar a solicitação. Tente novamente.';
            alert(errorMessage); 
        }
    };

    const handleFormTypeChange = () => {
        setFormType((prevType) => {
            const newType = prevType === 'register' ? 'login' : 'register';
            setFormData({ nome: '', email: '', senha: '' }); 
            return newType;
        });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{formType === 'register' ? 'Registro' : 'Login'}</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                {formType === 'register' && (
                    <input
                        type="text"
                        name="nome"
                        style={styles.input}
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    style={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="senha"
                    style={styles.input}
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                />
                <button type="submit" style={styles.button}>
                    {formType === 'register' ? 'Registrar' : 'Entrar'}
                </button>
                <button type="button" style={styles.toggleButton} onClick={handleFormTypeChange}>
                    {formType === 'register' ? 'Já tem uma conta? Faça Login' : 'Não tem uma conta? Cadastre-se'}
                </button>
            </form>
        </div>
    );
};

export default RegisterLogin;
