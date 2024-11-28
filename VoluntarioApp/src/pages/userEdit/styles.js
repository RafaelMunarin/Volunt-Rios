import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    form: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    // input: {
    //     height: 50,
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     marginBottom: 15,
    //     paddingLeft: 10,
    // },
    input: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
        fontSize: 16,
        height: 40,
        width: '100%', // Garantir que os inputs ocupem a largura total do container
    },
    inputDark: {
        backgroundColor: '#333',
        borderColor: '#555',
        color: '#e0f7fa', // Cor do texto no tema escuro
    },
    button: {
        backgroundColor: '#004d40', // Cor do botão
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#e0f7fa', // Cor do texto do botão
        fontSize: 16,
    },
});
