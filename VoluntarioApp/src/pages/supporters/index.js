import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import CustomHeader from '../../components/customHeader';

const Supporters = () => {
    const [supporters, setSupporters] = useState([
        { id: '1', name: 'Empresa A' },
        { id: '2', name: 'Empresa B' },
        { id: '3', name: 'Empresa C' },
    ])

    const handleBecomeSupporter = () => {
        // Aqui você pode implementar a lógica para que novos apoiadores se registrem
        console.log('Apoiador cadastrado')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader backAction={true} nameScreen={'Apoiadores'}/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleBecomeSupporter}>
                    <Text style={styles.buttonText}>Seja um Apoiador</Text>
                </TouchableOpacity>

                <FlatList
                    data={supporters}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.supporterItem}>
                            <Text style={styles.supporterText}>{item.name}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.supportersList}
                />
            </View>
        </SafeAreaView>
    )
}

export default Supporters;
