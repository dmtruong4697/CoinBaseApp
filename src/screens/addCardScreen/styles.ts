import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flexGrow: 1,
        // height: '200%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        // alignItems: 'center',
    },

    viewHeader: {
        width: '100%',
        height: 40,
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
        fontWeight: '600',
        color: colors.PrimaryTextColor,
        marginVertical: 10,
    },

    viewFormContainer: {
        // flex: 1,
        flexDirection: 'column',
        gap: 10,
        // backgroundColor: 'pink'
    },

    viewFormItem: {
        width: '100%',
        // height: 88,
        flexDirection: 'column',
        // backgroundColor: 'pink'
    },

    txtFormItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.PrimaryTextColor,
        marginBottom:5,
    },

    viewInputContainer: {
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.BorderColor,
        borderRadius: 4,

        alignItems: 'center',
    },

    inputField: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    viewBottom: {
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        // position: 'absolute',
        // bottom: 20,
        alignSelf: 'center',
    },

    txtBottom: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },

    txtLink: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.PrimaryColor,
    },

    imgVisa: {
        height: 14,
        maxWidth: 40,
        resizeMode: 'contain',
    }

})