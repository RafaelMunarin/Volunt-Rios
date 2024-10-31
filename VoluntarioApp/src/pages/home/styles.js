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
    form: {
        width: '100%',
        maxWidth: 300,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#004d40', // Verde escuro para o botão
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    toggleButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    toggleButtonText: {
        color: '#004d40', // Verde escuro para o texto do botão de alternância
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});
