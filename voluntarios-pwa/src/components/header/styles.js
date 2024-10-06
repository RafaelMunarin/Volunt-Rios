// src/components/styles.js
export const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        margin: '0 10px', // Margem nas laterais
        marginBottom: '20px', // Margem inferior do cabeçalho
    },
    backButtonContainer: {
        alignSelf: 'flex-start',
        marginBottom: '10px',
    },
    backButton: {
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#007BFF',
        fontSize: '24px',
    },
    title: {
        fontSize: '24px',
        textAlign: 'center',
        margin: '0',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: '10px',
    },
    greeting: {
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
        color: '#007BFF',
        display: 'flex',
        alignItems: 'center',
    },
    userIcon: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#007BFF',
        marginLeft: '8px',
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        marginLeft: '10px',
        padding: '10px 20px', // Aumentando o tamanho dos botões
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '8px', // Bordas arredondadas
        transition: 'background-color 0.3s, transform 0.3s', // Transição suave para o hover
        fontSize: '16px', // Tamanho da fonte maior
    },
    buttonHover: {
        backgroundColor: '#0056b3', // Cor de fundo ao passar o mouse
        transform: 'scale(1.05)', // Efeito de aumento ao passar o mouse
    },
};
