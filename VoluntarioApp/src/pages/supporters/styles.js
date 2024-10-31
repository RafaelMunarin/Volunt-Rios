import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#e0f7fa', // Verde claro
    },
    title: {
        fontSize: 30,
        color: '#004d40', // Verde escuro
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#004d40', // Verde escuro para o botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    supportersList: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    supporterItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 4,
        width: '100%',
        maxWidth: 300,
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    supporterText: {
        fontSize: 18,
        color: '#004d40', // Verde escuro para o texto
    },
});
