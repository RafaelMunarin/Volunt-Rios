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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
        color: '#fff',
        marginRight: 10,
    },
    nameScreen: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    logoutText: {
        fontSize: 16,
        color: '#e0f7fa',
        fontWeight: 'bold',
    },
});
