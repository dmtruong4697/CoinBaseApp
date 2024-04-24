import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    imgPhoto: {
        width: '100%',
        height: '100%',
    },

    viewHeader: {
        width: '96%',
        height: 24,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        alignSelf: 'center',

        zIndex: 1,
    },

    btnCancel: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 0,
    },

    txtModalTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtModalDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#707070',
        marginVertical: 15,
    },

    viewModalButtonGroup: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 25,
        flexDirection: 'column',
        gap: 16,
        alignSelf: 'center',
    },

    viewModal: {
        flex: 1,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },

})