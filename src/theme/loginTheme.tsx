import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50,
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    inputField: {
        color: 'white',
        fontSize: 20,
    },
    inputFieldIOS: {
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 4,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    buttonText: {
        fontSize: 18,
        color:'white',
    },
    SkipLogin: {
        alignItems: 'flex-end',
        marginTop: 10,
    }
    
});
