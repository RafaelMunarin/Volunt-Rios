// src/pages/registerLogin/index.js
import { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { registerUser } from '../../services/authService';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../contexts/userContext';

const RegisterLogin = () => {
    const navigation = useNavigation()
    const { saveUser } = useUser()

    const [formType, setFormType] = useState('login')
    const [formDataVoluntary, setFormDataVoluntary] = useState({ nome: '', cpf: '', dtNascimento: '', email: '', contato: '', senha: '' })

    const refLeituraNome = useRef()
    const refLeituraCpf = useRef()
    const refLeituraDtNascimento = useRef()
    const refLeituraEmail = useRef()
    const refLeituraContato = useRef()
    const refLeituraSenha = useRef()

    const setRefFocus = (ref) => {
        if (ref) {
            setTimeout(() => {
                ref.current.focus()
            }, 100)
        }
    }

    useEffect(() => {
        const checkLogin = async () => {
            const token = await AsyncStorage.getItem('userToken')
            if (token) {
                navigation.navigate('NavigatePages')
            }
        }
        checkLogin()
    }, [])

    const handleChange = (prop, value) => {
        setFormDataVoluntary({ ...formDataVoluntary, [prop]: value })
    }

    const handleSubmit = async () => {
        await registerUser(formType === 'login' ? 'login' : 'register', formDataVoluntary, formType === 'login' ? true : false).then(async (ret) => {
            if (!ret.success) {
                if (formType === 'login') 
                    setRefFocus(refLeituraEmail)
                else setRefFocus(refLeituraNome)
                clearStates()
                Alert.alert(ret.title, ret.message)
            } else {
                const token = ret.object?.data?.token
                const user = ret.object?.data?.user

                await AsyncStorage.setItem('userToken', token)
                saveUser(user)

                navigation.navigate('NavigatePages')
            }
        })
    }

    const clearStates = () => {
        setFormDataVoluntary({ nome: '', cpf: '', dtNascimento: '', email: '', contato: '', senha: '' })
    }

    const renderLogin = () => (
        <>
            <TextInput
                ref={refLeituraEmail}
                style={styles.input}
                placeholder="Email"
                value={formDataVoluntary.email}
                onChangeText={(value) => handleChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                ref={refLeituraSenha}
                style={styles.input}
                placeholder="Senha"
                value={formDataVoluntary.senha}
                onChangeText={(value) => handleChange('senha', value)}
                secureTextEntry
            />
        </>
    )

    const renderRegister = () => (
        <>
            <TextInput
                ref={refLeituraNome}
                style={styles.input}
                placeholder="Nome"
                value={formDataVoluntary.nome}
                onChangeText={(value) => handleChange('nome', value)}
            />
            <TextInput
                ref={refLeituraCpf}
                style={styles.input}
                placeholder="CPF"
                value={formDataVoluntary.cpf}
                onChangeText={(value) => handleChange('cpf', value)}
            />
            <TextInput
                ref={refLeituraContato}
                style={styles.input}
                placeholder="Contato"
                value={formDataVoluntary.contato}
                onChangeText={(value) => handleChange('contato', value)}
            />
            <TextInput
                ref={refLeituraDtNascimento}
                style={styles.input}
                placeholder="Data Nascimento (YYYY-MM-DD)"
                value={formDataVoluntary.dtNascimento}
                onChangeText={(value) => handleChange('dtNascimento', value)}
            />
            <TextInput
                ref={refLeituraEmail}
                style={styles.input}
                placeholder="E-mail"
                value={formDataVoluntary.email}
                onChangeText={(value) => handleChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                ref={refLeituraSenha}
                style={styles.input}
                placeholder="Senha"
                value={formDataVoluntary.senha}
                onChangeText={(value) => handleChange('senha', value)}
                secureTextEntry
            />
        </>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>{formType === 'register' ? 'Cadastro' : 'Entrar'}</Text>
                <View style={styles.form}>
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
                        onPress={() => setFormType(prev => (prev === 'register' ? 'login' : 'register'))}
                    >
                        <Text style={styles.toggleButtonText}>
                            {formType === 'register' ? 'Já tem uma conta? Faça Login' : 'Não tem uma conta? Cadastre-se'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterLogin;
