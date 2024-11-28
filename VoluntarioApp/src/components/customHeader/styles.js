import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#004d40',
        paddingTop: 30,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        alignItems: 'center',
    },
    backButton: {
        marginRight: 10,
    },
    usernameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nameScreen: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo translúcido para o modal
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
    },
    modalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        backgroundColor: '#004d40',
        borderRadius: 4,
        width: '100%',
        justifyContent: 'center',
    },
    modalButtonText: {
        marginLeft: 10,
        fontSize: 16,
    },
});
