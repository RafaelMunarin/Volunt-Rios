import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    containerDark: {
        backgroundColor: '#121212', // Fundo escuro para o tema dark
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 30,
        color: '#004d40', // Verde escuro (não altera com o tema)
        marginBottom: 20,
    },
    form: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco translúcido
        padding: 20,
        borderRadius: 8,
    },
    formDark: {
        backgroundColor: 'rgba(18, 18, 18, 0.9)', // Fundo translúcido escuro
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
        color: '#000', // Texto preto para tema claro
    },
    inputDark: {
        backgroundColor: '#1E1E1E', // Fundo escuro
        borderColor: '#555', // Borda mais escura
        color: '#fff', // Texto branco para tema escuro
    },
    button: {
        backgroundColor: '#004d40', // Verde escuro (fixo)
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    toggleButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    toggleButtonText: {
        color: '#004d40', // Verde escuro (fixo)
        textDecorationLine: 'underline',
        fontSize: 14,
    },
    themeToggle: {
        backgroundColor: '#004d40', // Fundo verde escuro
        paddingVertical: 10, // Altura do botão
        paddingHorizontal: 15, // Largura do botão
        borderRadius: 4, // Bordas levemente arredondadas
        alignItems: 'center', // Centralizar o conteúdo
        justifyContent: 'center', // Centralizar o conteúdo
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    themeToggleText: {
        color: '#fff', // Cor do texto
        fontSize: 14,
    },
    
});
