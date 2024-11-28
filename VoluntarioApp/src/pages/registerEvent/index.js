import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Text as RNText, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/customHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cepQuery } from '../../services/cepQuery';
import { Picker } from '@react-native-picker/picker';
import { registerEvent } from '../../services/eventService';
import { useTheme } from '../../contexts/themeContext'; // Importando o contexto de tema

const RegisterEvent = () => {
    const { theme } = useTheme(); // Acesso ao tema atual

    // Definindo as cores de fundo, texto e botões conforme o tema
    const backgroundColor = theme === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.8)';
    const textColor = theme === 'dark' ? '#e0f7fa' : '#121212'; // Cor do texto no input
    const placeholderColor = theme === 'dark' ? '#bbb' : '#ccc';
    const inputBorderColor = theme === 'dark' ? '#444' : '#ccc';
    const cardBackground = theme === 'dark' ? '#333333' : '#e0e0e0';
    // Para o TextInput, cinza mais escuro no tema claro e cinza mais claro no tema escuro
    const inputBackgroundColor = theme === 'dark' ? '#444' : '#e0e0e0'; // cinza mais escuro para tema claro e mais claro para tema escuro

    // Cor do botão verde escuro do padrão fornecido
    const buttonColor = '#004d40';
    const buttonTextColor = '#e0f7fa';

    const [tituloEvento, setTituloEvento] = useState('');
    const [descricaoEvento, setDescricaoEvento] = useState('');
    const [dataEvento, setDataEvento] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [contatoResponsavel, setContatoResponsavel] = useState({ telefone: '', email: '' });
    const [endereco, setEndereco] = useState({ rua: '', numero: '', bairro: '', cidade: '', estado: '', cep: '' });
    const [tipoEvento, setTipoEvento] = useState('');

    const refLeituraCep = useRef();

    const setRefFocus = (ref) => {
        if (ref) {
            setTimeout(() => {
                ref.current.focus();
            }, 100);
        }
    };

    const handleCEPChange = (cep) => {
        setEndereco({ ...endereco, cep });
    };

    const handleSubmit = async () => {
        const data = { tituloEvento, descricaoEvento, dataEvento, responsavel, ...contatoResponsavel, ...endereco, tipoEvento };
        await registerEvent('register-event', data).then(async (ret) => {
            if (!ret.success) {
                clearFields();
                Alert.alert(ret.title, ret.message);
            } else {
                clearFields();
                Alert.alert('Sucesso', 'Evento cadastrado com sucesso!');
            }
        });
    };

    const consultCEP = () => {
        const { cep } = endereco;
        cepQuery(cep).then(ret => {
            if (!ret.success) {
                setEndereco({ rua: '', numero: '', bairro: '', cidade: '', estado: '', cep: '' });
                setRefFocus(refLeituraCep);
                Alert.alert("Erro", ret.message);
            } else {
                setEndereco({
                    rua: ret.logradouro,
                    numero: '',
                    bairro: ret.bairro,
                    cidade: ret.localidade,
                    estado: ret.uf,
                    cep: ret.cep,
                });
            }
        });
    };

    const clearFields = () => {
        setTituloEvento('');
        setDescricaoEvento('');
        setDataEvento('');
        setResponsavel('');
        setContatoResponsavel({ telefone: '', email: '' });
        setEndereco({ rua: '', numero: '', bairro: '', cidade: '', estado: '', cep: '' });
        setTipoEvento('');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={"height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <CustomHeader backAction={true} nameScreen={'Cadastrar Evento'} />
                    <View style={styles.container}>
                        <View style={styles.form}>
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Titulo do Evento"
                                placeholderTextColor={placeholderColor}
                                value={tituloEvento}
                                onChangeText={setTituloEvento}
                            />
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Descrição do Evento"
                                placeholderTextColor={placeholderColor}
                                value={descricaoEvento}
                                onChangeText={setDescricaoEvento}
                            />
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Data do Evento (YYYY-MM-DD)"
                                placeholderTextColor={placeholderColor}
                                value={dataEvento}
                                onChangeText={setDataEvento}
                            />
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Responsável pelo Evento"
                                placeholderTextColor={placeholderColor}
                                value={responsavel}
                                onChangeText={setResponsavel}
                            />
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Telefone do Responsável"
                                placeholderTextColor={placeholderColor}
                                value={contatoResponsavel.telefone}
                                onChangeText={telefone => setContatoResponsavel({ ...contatoResponsavel, telefone })}
                            />
                            <TextInput
                                style={[styles.input, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                placeholder="Email do Responsável"
                                placeholderTextColor={placeholderColor}
                                value={contatoResponsavel.email}
                                onChangeText={email => setContatoResponsavel({ ...contatoResponsavel, email })}
                            />
                            <Picker
                                selectedValue={tipoEvento}
                                style={[styles.picker, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                onValueChange={(itemValue) => setTipoEvento(itemValue)}
                            >
                                <Picker.Item label="Selecione o tipo do evento" value="" />
                                <Picker.Item label="Limpeza" value="limpeza" />
                                <Picker.Item label="Conscientização" value="conscientizacao" />
                                <Picker.Item label="Oficina" value="oficina" />
                                <Picker.Item label="Palestra" value="palestra" />
                                <Picker.Item label="Ação Social" value="acao_social" />
                                <Picker.Item label="Outros" value="outros" />
                            </Picker>
                            <View style={styles.row}>
                                <TextInput
                                    ref={refLeituraCep}
                                    style={[styles.inputHalf, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="CEP"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.cep}
                                    onChangeText={handleCEPChange}
                                />
                                <TouchableOpacity style={[styles.buttonSearch, { backgroundColor: buttonColor }]} onPress={consultCEP}>
                                    <Icon name="search" size={20} color={buttonTextColor} />
                                </TouchableOpacity>
                                <TextInput
                                    style={[styles.inputHalf, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="Número"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.numero}
                                    onChangeText={numero => setEndereco({ ...endereco, numero })}
                                />
                            </View>
                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.inputHalf, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="Rua"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.rua}
                                    onChangeText={rua => setEndereco({ ...endereco, rua })}
                                />
                                <TextInput
                                    style={[styles.inputHalf, { marginLeft: 10, backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="Bairro"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.bairro}
                                    onChangeText={bairro => setEndereco({ ...endereco, bairro })}
                                />
                            </View>
                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.inputHalf, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="Cidade"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.cidade}
                                    onChangeText={cidade => setEndereco({ ...endereco, cidade })}
                                />
                                <TextInput
                                    style={[styles.inputHalf, { marginLeft: 10, backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
                                    placeholder="Estado"
                                    placeholderTextColor={placeholderColor}
                                    value={endereco.estado}
                                    onChangeText={estado => setEndereco({ ...endereco, estado })}
                                />
                            </View>
                            <View style={styles.row}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: buttonColor }]}
                                    onPress={handleSubmit}
                                >
                                    <RNText style={{ color: buttonTextColor, fontSize: 16 }}>Cadastrar</RNText>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: buttonColor }]}
                                    onPress={clearFields}
                                >
                                    <RNText style={{ color: buttonTextColor, fontSize: 16 }}>Limpar</RNText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterEvent;
