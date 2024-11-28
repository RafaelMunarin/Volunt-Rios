import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        marginBottom: 8,
    },
    cardInfo: {
        fontSize: 12,
        marginBottom: 4,
    },
    cardLocation: {
        fontSize: 12,
    },
    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
});
