import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        // height: '200%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        alignItems: 'center',
    },

    viewHeader: {
        width: '100%',
        height: 24,
        // backgroundColor: 'pink',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnCancel: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 0,
    },

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: '#111111',
        marginBottom: 20,
        marginTop: 10,
    },

    txtDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: '#707070',
        marginBottom: 20,
    },

    txtCode: {
        fontSize: 18,
        fontWeight: '400',
        color: '#707070',
    },

    viewFormContainer: {
        flexDirection: 'column',
        width: '100%',
    },

    viewInput: {
        width: '100%',
        flexDirection: 'row',
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        gap: 10,
        marginBottom: 30,
    },

})