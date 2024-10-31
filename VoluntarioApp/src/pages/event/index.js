// src/pages/events/index.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/userContext';
import styles from './styles';
import CustomHeader from '../../components/customHeader';
import { searchEvents } from '../../services/eventService';

const Event = () => {
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        const fetchEvents = async () => {
            await searchEvents('search-event').then(async (ret) => {
                if (!ret.success) {
                    Alert.alert(ret.title, ret.message)
                } else
                    setEvents(ret.object?.data)
            })
        }

        fetchEvents()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader backAction={true} nameScreen={'Eventos'} />
            <View style={styles.container}>
                <FlatList
                    data={events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.card} 
                            // onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}
                            onPress={() => console.log('vai pra outra tela')}
                        >
                            <Text style={styles.cardTitle}>{item.titulo}</Text>
                            <Text style={styles.cardDescription}>{item.descricao}</Text>
                            <Text style={styles.cardInfo}>
                                {`Responsável: ${item.responsavel} | Data: ${new Date(item.data).toLocaleDateString()}`}
                            </Text>
                            <Text style={styles.cardLocation}>
                                {`${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade} - ${item.estado}`}
                            </Text>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyText}>Nenhum evento encontrado.</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export default Event;
