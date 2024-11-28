import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './styles';
import { useTheme } from '../../contexts/themeContext';
import CustomHeader from '../../components/customHeader';
import { getUser, editUser } from '../../services/userService';

const UserEdit = ({ route }) => {
    const { userId } = route.params;  // Recebendo o ID do usuário da navegação
    const { theme } = useTheme();

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dtNascimento: '',
        email: '',
        contato: '',
    });

    useEffect(() => {
        fetchUserData();
    }, []);

    // Função para alterar os dados no estado
    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const fetchUserData = async () => {
        const response = await getUser('user', userId);
        if (response.success) {
            setFormData({
                nome: response.object.data.nome,
                cpf: response.object.data.cpf,
                dtNascimento: response.object.data.dtNascimento,
                email: response.object.data.email,
                contato: response.object.data.contato,
            });
        } else {
            Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
        }
    }

    const handleSubmit = async () => {
        const { senha, ...dataToUpdate } = formData;
        const response = await editUser('user', userId, dataToUpdate);
        if (response.success) {
            Alert.alert('Sucesso', 'Informações atualizadas com sucesso!');
        } else {
            Alert.alert('Erro', 'Não foi possível atualizar as informações.');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#121212' : '#fff' }}>
            <CustomHeader backAction={true} nameScreen="Editar Perfil" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.form}>
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="Nome"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.nome}
                        onChangeText={(value) => handleChange('nome', value)}
                    />
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="CPF"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.cpf}
                        onChangeText={(value) => handleChange('cpf', value)}
                    />
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="CNPJ"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.cnpj}
                        onChangeText={(value) => handleChange('cnpj', value)}
                    />
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="Data de Nascimento"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.dtNascimento}
                        onChangeText={(value) => handleChange('dtNascimento', value)}
                    />
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="E-mail"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.email}
                        onChangeText={(value) => handleChange('email', value)}
                    />
                    <TextInput
                        style={[styles.input, theme === 'dark' && styles.inputDark]}
                        placeholder="Contato"
                        placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                        value={formData.contato}
                        onChangeText={(value) => handleChange('contato', value)}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserEdit;
