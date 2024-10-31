import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { useUser } from '../../contexts/userContext';

const CustomHeader = (props) => {
    const { username = false, backAction = false, logOut = false, nameScreen = false } = props;
    const navigation = useNavigation();
    const { user, logoutUser } = useUser();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        logoutUser();
        navigation.navigate('Home');
    };

    return (
        <View style={styles.headerContainer}>
            {/* Container para o botão de voltar, nome do usuário e nome da tela */}
            <View style={styles.leftContainer}>
                {backAction && (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={navigation.goBack}
                    >
                        <Icon name="chevron-back-outline" size={24} color='#e0f7fa' />
                    </TouchableOpacity>
                )}
                {username && (
                    <Text style={styles.usernameText}>Olá, {user?.nome}</Text>
                )}
                {nameScreen && (
                    <Text style={styles.nameScreen}>{nameScreen}</Text>
                )}
            </View>

            {/* Botão de logout no lado direito */}
            {logOut && (
                <TouchableOpacity style={styles.rightContainer} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default CustomHeader;
