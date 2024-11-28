import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        marginBottom: 8,
    },
    location: {
        fontSize: 14,
        marginBottom: 16,
    },
    footer: {
        padding: 16,
    },
    applyButton: {
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyButtonText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default styles;
