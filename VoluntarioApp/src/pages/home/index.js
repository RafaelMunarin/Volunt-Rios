import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import { styles } from './styles';
import { registerUser } from '../../services/authService';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../contexts/userContext';
import { useTheme } from '../../contexts/themeContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterLogin = () => {
    const navigation = useNavigation();
    const { saveUser } = useUser();
    const { theme, toggleTheme } = useTheme();

    const [formType, setFormType] = useState('login');
    const [formDataVoluntary, setFormDataVoluntary] = useState({
        nome: '',
        cpf: '',
        dtNascimento: '',
        email: '',
        contato: '',
        senha: ''
    });

    const refLeituraNome = useRef();
    const refLeituraCpf = useRef();
    const refLeituraDtNascimento = useRef();
    const refLeituraEmail = useRef();
    const refLeituraContato = useRef();
    const refLeituraSenha = useRef();

    const setRefFocus = (ref) => {
        if (ref) {
            setTimeout(() => {
                ref.current.focus();
            }, 100);
        }
    };

    useEffect(() => {
        const checkLogin = async () => {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                navigation.navigate('NavigatePages');
            }
        };
        checkLogin();
    }, []);

    const handleChange = (prop, value) => {
        setFormDataVoluntary({ ...formDataVoluntary, [prop]: value });
    };

    const handleSubmit = async () => {
        await registerUser(
            formType === 'login' ? 'login' : 'register',
            formDataVoluntary,
            formType === 'login' ? true : false
        ).then(async (ret) => {
            if (!ret.success) {
                if (formType === 'login') setRefFocus(refLeituraEmail);
                else setRefFocus(refLeituraNome);
                clearStates();
                Alert.alert(ret.title, ret.message);
            } else {
                const token = ret.object?.data?.token;
                const user = ret.object?.data?.user;

                await AsyncStorage.setItem('userToken', token);
                saveUser(user);
                clearStates();
                navigation.navigate('NavigatePages');
            }
        });
    };

    const clearStates = () => {
        setFormDataVoluntary({
            nome: '',
            cpf: '',
            dtNascimento: '',
            email: '',
            contato: '',
            senha: ''
        });
    };

    const renderLogin = () => (
        <>
            <TextInput
                ref={refLeituraEmail}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Email"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.email}
                onChangeText={(value) => handleChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                ref={refLeituraSenha}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Senha"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.senha}
                onChangeText={(value) => handleChange('senha', value)}
                secureTextEntry
            />
        </>
    );

    const renderRegister = () => (
        <>
            <TextInput
                ref={refLeituraNome}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Nome"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.nome}
                onChangeText={(value) => handleChange('nome', value)}
            />
            <TextInput
                ref={refLeituraCpf}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="CPF"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.cpf}
                onChangeText={(value) => handleChange('cpf', value)}
            />
            <TextInput
                ref={refLeituraContato}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Contato"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.contato}
                onChangeText={(value) => handleChange('contato', value)}
            />
            <TextInput
                ref={refLeituraDtNascimento}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Data Nascimento (YYYY-MM-DD)"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.dtNascimento}
                onChangeText={(value) => handleChange('dtNascimento', value)}
            />
            <TextInput
                ref={refLeituraEmail}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="E-mail"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.email}
                onChangeText={(value) => handleChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                ref={refLeituraSenha}
                style={[styles.input, theme === 'dark' && styles.inputDark]}
                placeholder="Senha"
                placeholderTextColor={theme === 'dark' ? '#ccc' : '#000'}
                value={formDataVoluntary.senha}
                onChangeText={(value) => handleChange('senha', value)}
                secureTextEntry
            />
        </>
    );

    return (
        <ImageBackground
            source={require('../../images/blurred_image.jpeg')}
            style={[
                styles.container,
                theme === 'dark' && styles.containerDark
            ]}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.themeToggle}
                        onPress={toggleTheme}
                    >
                        <Icon
                            name={theme === 'light' ? 'moon-o' : 'sun-o'}
                            size={20}
                            color="#fff" // Cor do ícone branca
                        />
                    </TouchableOpacity>
                    <View
                        style={[
                            styles.form,
                            theme === 'dark' && styles.formDark
                        ]}
                    >
                        {formType === 'register' ? renderRegister() : renderLogin()}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>
                                {formType === 'register' ? 'Cadastrar' : 'Entrar'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.toggleButton}
                            onPress={() => {
                                setFormType((prev) =>
                                    prev === 'register' ? 'login' : 'register'
                                );
                                clearStates();
                            }}
                        >
                            <Text style={styles.toggleButtonText}>
                                {formType === 'register'
                                    ? 'Já tem uma conta? Faça Login'
                                    : 'Não tem uma conta? Cadastre-se'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default RegisterLogin;
