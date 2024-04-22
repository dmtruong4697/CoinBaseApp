import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
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

    txtOption: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryColor,
    },

})