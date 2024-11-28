import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    form: {
        width: '100%',
        maxWidth: 400, // Definindo uma largura máxima para os campos de input
        alignSelf: 'center', // Centralizando o formulário na tela
    },
    input: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
        fontSize: 16,
        height: 40,
        width: '100%', // Garantir que os inputs ocupem a largura total do container
    },
    picker: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 4,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20, // Adicionando mais espaçamento entre os campos e os botões
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 10,
        flex: 1,
        marginHorizontal: 5, // Espaçamento entre os botões
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    inputHalf: {
        flex: 1,
        padding: 10,
        borderRadius: 4,
        fontSize: 16,
        height: 40, 
    },
    inputHalfLast: {
        flex: 1,
        padding: 10,
        marginLeft: 10,
        borderRadius: 4,
        fontSize: 16,
        height: 40,
    },
    buttonSearch: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#004d40', 
        marginRight: 10,
        marginLeft: 10,
    },
});

export default styles;
