import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { applyToEvent } from '../../services/eventService';
import { useTheme } from '../../contexts/themeContext'; // Importando o contexto de tema
import styles from './styles';
import CustomHeader from '../../components/customHeader';

const EventDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { event, userId } = route.params;
    const { theme } = useTheme(); // Acesso ao tema atual

    const handleApply = async () => {
        const response = await applyToEvent('apply-event', { usuarioId: userId, eventoId: event.id });

        if (response.success) {
            Alert.alert('Sucesso', 'Você se candidatou ao evento com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert(response.title, response.message);
        }
    };

    // Definindo as cores de fundo e do texto conforme o tema
    const backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
    const textColor = theme === 'dark' ? '#e0f7fa' : '#121212';
    const cardBackground = theme === 'dark' ? '#333333' : '#f5f5f5'; // Card com tom neutro

    return (
        <SafeAreaView style={[{ flex: 1 }, { backgroundColor }]}>
            <CustomHeader backAction={true} nameScreen={'Detalhes do Evento'} />
            <View style={[styles.container, { backgroundColor }]}>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={[styles.title, { color: textColor }]}>{event.titulo}</Text>
                    <Text style={[styles.description, { color: textColor }]}>{event.descricao}</Text>
                    <Text style={[styles.info, { color: textColor }]}>
                        {`Data: ${new Date(event.data).toLocaleDateString()} | Responsável: ${event.responsavel}`}
                    </Text>
                    <Text style={[styles.location, { color: textColor }]}>
                        {`${event.rua}, ${event.numero} - ${event.bairro}, ${event.cidade} - ${event.estado}`}
                    </Text>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.applyButton, { backgroundColor: theme === 'dark' ? '#004d40' : '#00695c' }]}
                        onPress={handleApply}
                    >
                        <Text style={styles.applyButtonText}>Candidatar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EventDetails;
