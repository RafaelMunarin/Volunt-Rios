// src/pages/styles.js
export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        minHeight: '100vh', // Faz o container ocupar toda a altura da tela
        padding: '20px',
        backgroundColor: '#e0f7fa',
    },
    title: {
        fontSize: '2.5rem', // Aumenta o tamanho do título
        color: '#007BFF', // Cor do título para se alinhar com as outras telas
        marginBottom: '20px', // Espaçamento abaixo do título
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem', // Aumenta a legibilidade
    },
    button: {
        backgroundColor: '#007BFF', // Cor do botão para consistência
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.3s', // Transição suave ao passar o mouse
    },
    toggleButton: {
        backgroundColor: 'transparent', // Transparente para o botão de alternância
        color: '#007BFF', // Cor do texto para alinhamento
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '0.9rem', // Tamanho menor para diferenciar
        textDecoration: 'underline', // Sinaliza que é um link
    },
};
