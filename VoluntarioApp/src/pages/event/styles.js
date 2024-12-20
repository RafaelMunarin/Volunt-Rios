import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        padding: 16,
        borderRadius: 8,
        elevation: 2, // Para sombra no Android
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    cardInfo: {
        fontSize: 12,
        color: '#666',
    },
    cardLocation: {
        fontSize: 12,
        color: '#666',
    },
    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    }
});

export default styles;
