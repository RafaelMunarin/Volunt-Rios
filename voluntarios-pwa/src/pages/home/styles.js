// src/pages/styles.js
export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza verticalmente
        minHeight: '100vh', // Faz o container ocupar toda a altura da tela
        padding: '20px',
        backgroundColor: '#e0f7fa',
    },
    title: {
        fontSize: '2.5rem', // Aumenta o tamanho do título
        color: '#007BFF', // Cor do título para se alinhar com as outras telas
        marginBottom: '20px', // Espaçamento abaixo do título
    },
    description: {
        fontSize: '1.2rem',
        color: '#004d40',
        textAlign: 'center',
        margin: '10px 0',
        maxWidth: '600px', // Limita a largura do texto para melhor legibilidade
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex', // Flex para os botões ficarem alinhados
        justifyContent: 'center', // Centraliza os botões
    },
    button: {
        backgroundColor: '#007BFF', // Altera a cor do botão para se alinhar com as outras telas
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0 10px',
        textDecoration: 'none',
        transition: 'background-color 0.3s', // Transição suave ao passar o mouse
    },
    buttonHover: {
        backgroundColor: '#0056b3', // Cor do botão ao passar o mouse
    },
};
