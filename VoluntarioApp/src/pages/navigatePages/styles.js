import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Estilo para o fundo claro (translúcido, como na tela de login)
    containerLight: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo translúcido, igual à tela de login
    },

    // Estilo para o fundo escuro (sem translúcido)
    containerDark: {
        flex: 1,
        backgroundColor: '#121212', // Cor de fundo escura (sem transparência)
    },

    // Contêiner dos itens de conteúdo (botões, etc)
    containerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 30,
        color: '#004d40', // Verde escuro
        marginBottom: 20,
    },

    button: {
        backgroundColor: '#004d40',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
        maxWidth: 300,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
