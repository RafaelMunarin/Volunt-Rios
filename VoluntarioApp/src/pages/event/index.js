import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/userContext';
import { useTheme } from '../../contexts/themeContext'; // Importando o contexto de tema
import styles from './styles';
import CustomHeader from '../../components/customHeader';
import { searchEvents } from '../../services/eventService';

const Event = () => {
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);
    const { user } = useUser();
    const { theme } = useTheme(); // Pegando o tema atual

    useEffect(() => {
        const fetchEvents = async () => {
            await searchEvents('search-event').then(async (ret) => {
                if (!ret.success) {
                    Alert.alert(ret.title, ret.message)
                } else {
                    setEvents(ret.object?.data)
                }
            })
        }

        fetchEvents()
    }, [])

    // Definindo a cor do fundo e do texto com base no tema
    const backgroundColor = theme === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.8)';
    const textColor = theme === 'dark' ? '#e0f7fa' : '#121212'; // Cor do texto com base no tema
    const cardBackground = theme === 'dark' ? '#333333' : '#e0e0e0'; // Cor do card ajustada para o meio termo

    return (
        <SafeAreaView style={[{ flex: 1 }, { backgroundColor }]}>
            <CustomHeader backAction={true} nameScreen={'Eventos'} />
            <View style={styles.container}>
                <FlatList
                    data={events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.card, { backgroundColor: cardBackground }]}
                            onPress={() => navigation.navigate('EventDetails', { event: item, userId: user.id })}
                        >
                            <Text style={[styles.cardTitle, { color: textColor }]}>{item.titulo}</Text>
                            <Text style={[styles.cardDescription, { color: textColor }]}>{item.descricao}</Text>
                            <Text style={[styles.cardInfo, { color: textColor }]}>
                                {`Responsável: ${item.responsavel} | Data: ${new Date(item.data).toLocaleDateString()}`}
                            </Text>
                            <Text style={[styles.cardLocation, { color: textColor }]}>
                                {`${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade} - ${item.estado}`}
                            </Text>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={<Text style={[styles.emptyText, { color: textColor }]}>Nenhum evento encontrado.</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export default Event;
