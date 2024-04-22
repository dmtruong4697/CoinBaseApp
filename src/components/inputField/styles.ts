import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 16,
    },

    inputContainer: {
        width: '100%',
        height: 58,
        borderRadius: 4,
        borderWidth: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
    },

    inputField: {
        flex: 1,
        padding: 10,

        fontSize: 16,
        fontWeight: '400',
        color: '#707070',
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#111111',
        marginBottom: 10,
    },

    imgShow: {
        width: 24,
        height: 24,
        marginHorizontal: 10,
    }
})