export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: '20px',
        backgroundColor: '#e0f7fa',
    },
    title: {
        fontSize: '2.5rem', 
        color: '#007BFF', 
        marginBottom: '20px', 
    },
    description: {
        fontSize: '1.2rem',
        color: '#004d40',
        textAlign: 'center',
        margin: '10px 0',
        maxWidth: '600px', 
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center', 
    },
    button: {
        backgroundColor: '#007BFF', 
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0 10px',
        textDecoration: 'none',
        transition: 'background-color 0.3s', 
    },
    buttonHover: {
        backgroundColor: '#0056b3', 
    },
};
