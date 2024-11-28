import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';
import { useTheme } from '../../contexts/themeContext';

const NavigatePages = () => {
    const navigation = useNavigation();
    const { theme } = useTheme(); // Acesso ao tema global

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <SafeAreaView 
            style={[
                theme === 'dark' ? styles.containerDark : styles.containerLight, 
                { flex: 1 } // Garantir que a tela ocupe todo o espaço disponível
            ]}
        >
            <CustomHeader username={true} showMenu={true} />
            <View style={styles.containerContent}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('Event')}
                >
                    <Text style={[styles.buttonText, { color: theme === 'dark' ? '#121212' : '#e0f7fa' }]}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('RegisterEvent')}
                >
                    <Text style={[styles.buttonText, { color: theme === 'dark' ? '#121212' : '#e0f7fa' }]}>Cadastrar Evento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('UserEvents')}
                >
                    <Text style={[styles.buttonText, { color: theme === 'dark' ? '#121212' : '#e0f7fa' }]}>Participando</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('Supporters')}
                >
                    <Text style={[styles.buttonText, { color: theme === 'dark' ? '#121212' : '#e0f7fa' }]}>Apoiadores</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('FindOutMore')}
                >
                    <Text style={[styles.buttonText, { color: theme === 'dark' ? '#121212' : '#e0f7fa' }]}>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigatePages;
