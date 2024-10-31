import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Text as RNText, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './styles';
import CustomHeader from '../../components/customHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cepQuery } from '../../services/cepQuery';
import { Picker } from '@react-native-picker/picker';
import { registerEvent } from '../../services/eventService';

const RegisterEvent = () => {
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
        <SafeAreaView style={{ flex: 1 }}>
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
                                style={styles.input}
                                placeholder="Titulo do Evento"
                                value={tituloEvento}
                                onChangeText={setTituloEvento}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Descrição do Evento"
                                value={descricaoEvento}
                                onChangeText={setDescricaoEvento}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Data do Evento (YYYY-MM-DD)"
                                value={dataEvento}
                                onChangeText={setDataEvento}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Responsável pelo Evento"
                                value={responsavel}
                                onChangeText={setResponsavel}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Telefone do Responsável"
                                value={contatoResponsavel.telefone}
                                onChangeText={telefone => setContatoResponsavel({ ...contatoResponsavel, telefone })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Email do Responsável"
                                value={contatoResponsavel.email}
                                onChangeText={email => setContatoResponsavel({ ...contatoResponsavel, email })}
                            />
                            <Picker
                                selectedValue={tipoEvento}
                                style={styles.input}
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
                                    style={styles.inputHalf}
                                    placeholder="CEP"
                                    value={endereco.cep}
                                    onChangeText={handleCEPChange}
                                />
                                <TouchableOpacity style={styles.buttonSearch} onPress={consultCEP}>
                                    <Icon name="search" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.inputHalf}
                                    placeholder="Número"
                                    value={endereco.numero}
                                    onChangeText={numero => setEndereco({ ...endereco, numero })}
                                />
                            </View>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.inputHalf}
                                    placeholder="Estado"
                                    value={endereco.estado}
                                    onChangeText={estado => setEndereco({ ...endereco, estado })}
                                />
                                <TextInput
                                    style={styles.inputHalf}
                                    placeholder="Cidade"
                                    value={endereco.cidade}
                                    onChangeText={cidade => setEndereco({ ...endereco, cidade })}
                                />
                            </View>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.inputHalf}
                                    placeholder="Bairro"
                                    value={endereco.bairro}
                                    onChangeText={bairro => setEndereco({ ...endereco, bairro })}
                                />
                                <TextInput
                                    style={styles.inputHalf}
                                    placeholder="Rua"
                                    value={endereco.rua}
                                    onChangeText={rua => setEndereco({ ...endereco, rua })}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleSubmit}
                                >
                                    <RNText style={styles.buttonText}>Cadastrar</RNText>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={clearFields}
                                >
                                    <RNText style={styles.buttonText}>Limpar</RNText>
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
