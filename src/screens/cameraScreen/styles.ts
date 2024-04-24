import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    viewHeader: {
        width: '96%',
        height: 24,
        // backgroundColor: 'pink',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        alignSelf: 'center',

        zIndex: 3,
    },

    btnCancel: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 0,
    },

    txtTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: '#FFFFFF',
        marginBottom: 20,
    },

    txtDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFFFFF',
    },
    
    btnCapture: {
        width: 64,
        height: 64,
        borderRadius: 1000,
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: '#FFFFFF',

        position: 'absolute',
        alignSelf: 'center',

        justifyContent: 'center',
        alignItems: 'center',

    },

    viewButtonGroup: {
        zIndex: 4,
        height: 64,
        width: '100%',
        position: 'absolute',
        bottom: 20,

        alignItems: 'center',

        justifyContent: 'center',
        flexDirection: 'row',

    },

    viewButton: {
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 1000,
    },

    btnSwap: {
        width: 40,
        height: 40,
        // backgroundColor: '#FFFFFF',

        position: 'absolute',
        right: 15,
    },

    viewText: {
        zIndex: 3,
        width: '100%',
        height: '45%',
        padding: 15,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
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

    viewPhoto: {
        flex: 1,
        zIndex: 5,
    },
})