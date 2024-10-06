// src/pages/expeditions/styles.js
export const styles = {
    container: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Alinha os itens ao centro
        backgroundColor: '#f9f9f9', // Cor de fundo leve
        minHeight: '100vh', // Garante que a altura mínima ocupe toda a tela
    },
    title: {
        fontSize: '28px',
        marginBottom: '20px',
        fontWeight: 'bold', // Adiciona peso à fonte
        color: '#333', // Cor do texto
    },
    list: {
        listStyle: 'none',
        padding: 0,
        width: '100%', // Faz a lista ocupar toda a largura disponível
        maxWidth: '600px', // Limita a largura máxima da lista
    },
    item: {
        marginBottom: '15px',
        padding: '15px',
        backgroundColor: '#fff', // Fundo branco para os itens da lista
        borderRadius: '8px', // Bordas arredondadas
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave
    },
    button: {
        marginTop: '10px',
        padding: '8px 12px',
        cursor: 'pointer',
        backgroundColor: '#007BFF', // Cor do botão
        color: '#fff', // Cor do texto do botão
        border: 'none',
        borderRadius: '4px', // Bordas arredondadas no botão
        transition: 'background-color 0.3s', // Transição suave para o hover
    },
};
