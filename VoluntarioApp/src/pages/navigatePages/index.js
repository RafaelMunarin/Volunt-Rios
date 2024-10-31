import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';

const NavigatePages = () => {
    const navigation = useNavigation()
    
    const handleNavigation = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader username={true} logOut={true}/>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('Event')}>
                    <Text style={styles.buttonText}>Eventos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('RegisterEvent')}>
                    <Text style={styles.buttonText}>Cadastrar Evento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('Supporters')}>
                    <Text style={styles.buttonText}>Apoiadores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNavigation('FindOutMore')}>
                    <Text style={styles.buttonText}>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigatePages;
