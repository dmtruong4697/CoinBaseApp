import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 15,
    },

    viewHeader: {
        width: '100%',
        marginVertical: 10,
    },

    btnCancel: {
        width: 24,
        height: 24,
    },

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: '#111111',
        marginBottom: 20,
        marginTop: 10,
    },

    viewFormContainer: {
        flexDirection: 'column',
        width: '100%',
    },

    viewOptionGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 40,
    },

    txtDescription: {
        fontSize: 18,
        fontWeight: '400',
        color: '#707070',
        marginBottom: 20,
    },

    viewButtonGroup: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 25,
        flexDirection: 'column',
        gap: 16,
    },

})