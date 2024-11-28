import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { useUser } from '../../contexts/userContext';
import { useTheme } from '../../contexts/themeContext';

const CustomHeader = (props) => {
    const { username = false, backAction = false, nameScreen = false, showMenu = false } = props;
    const navigation = useNavigation();
    const { user, logoutUser } = useUser();
    const { theme, toggleTheme } = useTheme(); // Acesso ao tema global

    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken');
        logoutUser();
        navigation.navigate('Home');
        setModalVisible(false);
    };

    const handleEditProfile = () => {
        navigation.navigate('UserEdit', { userId: user?.id }); // Passa o ID do usuário para a tela de edição
        setModalVisible(false);
    };

    // Definindo as cores de texto e ícones baseadas no tema
    const textColor = theme === 'dark' ? '#121212' : 'rgba(255, 255, 255, 0.8)'; // Cor do texto com base no tema
    const iconColor = textColor; // Ícones terão a mesma cor que o texto

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {backAction && (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={navigation.goBack}
                    >
                        <Icon name="chevron-back-outline" size={24} color={iconColor} />
                    </TouchableOpacity>
                )}
                {username && (
                    <Text style={[styles.usernameText, { color: textColor }]}>Olá, {user?.nome}</Text>
                )}
                {nameScreen && (
                    <Text style={[styles.nameScreen, { color: textColor }]}>{nameScreen}</Text>
                )}
            </View>
            {showMenu && (
                <View style={styles.rightContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Icon name="menu-outline" size={30} color={iconColor} />
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        animationType="fade"
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContent}>
                                <TouchableOpacity onPress={handleEditProfile} style={styles.modalButton}>
                                        <Icon name="person-outline" size={24} color={iconColor} />
                                        <Text style={[styles.modalButtonText, { color: textColor }]}>Editar Perfil</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={toggleTheme} style={styles.modalButton}>
                                        <Icon
                                            name={theme === 'light' ? 'moon-outline' : 'sunny-outline'}
                                            size={24}
                                            color={iconColor}
                                        />
                                        <Text style={[styles.modalButtonText, { color: textColor }]}>
                                            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleLogout} style={styles.modalButton}>
                                        <Icon name="log-out-outline" size={24} color={iconColor} />
                                        <Text style={[styles.modalButtonText, { color: textColor }]}>Sair</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            )}
        </View>
    );
};

export default CustomHeader;
