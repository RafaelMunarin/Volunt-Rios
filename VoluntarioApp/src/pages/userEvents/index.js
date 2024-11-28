import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/userContext';
import { useTheme } from '../../contexts/themeContext'; // Importando o contexto de tema
import styles from './styles';
import CustomHeader from '../../components/customHeader';
import { fetchUserEvents, cancelCandidacy } from '../../services/eventService';

const UserEvents = () => {
    const navigation = useNavigation();
    const [userEvents, setUserEvents] = useState([]);
    const { user } = useUser();
    const { theme } = useTheme(); // Acesso ao tema atual

    const fetchEvents = async () => {
        const response = await fetchUserEvents('user-events', user.id);

        if (!response.success) {
            Alert.alert('Erro', response.message);
            navigation.goBack();
        } else {
            setUserEvents(response.object?.data);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [user.id]);

    const handleCancelCandidacy = async (eventoId) => {
        Alert.alert(
            'Cancelar Candidatura',
            'Tem certeza de que deseja cancelar sua candidatura neste evento?',
            [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: async () => {
                        const response = await cancelCandidacy('cancel-candidacy', {
                            usuarioId: user.id,
                            eventoId,
                        });

                        if (!response.success) {
                            Alert.alert('Erro', response.message);
                        } else {
                            Alert.alert('Sucesso', 'Candidatura cancelada com sucesso.');
                            fetchEvents(); // Atualiza a lista de eventos
                        }
                    },
                },
            ]
        );
    };

    // Definindo as cores de fundo e do texto conforme o tema
    const backgroundColor = theme === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.8)';
    const textColor = theme === 'dark' ? '#e0f7fa' : '#121212'; // Cor do texto com base no tema
    const cardBackground = theme === 'dark' ? '#333333' : '#e0e0e0'; // Cor do card ajustada para o meio termo

    return (
        <SafeAreaView style={[{ flex: 1 }, { backgroundColor }]}>
            <CustomHeader backAction={true} nameScreen={'Meus Eventos'} />
            <View style={[styles.container, { backgroundColor }]}>
                <FlatList
                    data={userEvents}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.card, { backgroundColor: cardBackground }]}
                            onLongPress={() => handleCancelCandidacy(item.id)} // Ação ao pressionar e segurar
                        >
                            <Text style={[styles.cardTitle, { color: textColor }]}>{item.titulo}</Text>
                            <Text style={[styles.cardDescription, { color: textColor }]}>{item.descricao}</Text>
                            <Text style={[styles.cardInfo, { color: textColor }]}>
                                {`Responsável: ${item.responsavel} | Data: ${new Date(
                                    item.data
                                ).toLocaleDateString()}`}
                            </Text>
                            <Text style={[styles.cardLocation, { color: textColor }]}>
                                {`${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade} - ${item.estado}`}
                            </Text>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={[styles.emptyText, { color: textColor }]}>
                            Você ainda não se candidatou a nenhum evento.
                        </Text>
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default UserEvents;
