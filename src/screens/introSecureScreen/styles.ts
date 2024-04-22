import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        height: '200%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        // alignItems: 'center',
    },

    viewHeader: {
        width: '100%',
        height: 24,
        // backgroundColor: 'pink',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
        marginBottom: 30,
        marginTop: 10,
    },

    txtDescription: {
        fontSize: 16,
        fontWeight: '400',
        color: '#707070',
        marginBottom: 20,
        textAlign: 'center',
    },

    viewFormContainer: {
        flexDirection: 'column',
        width: '100%',
    },

    viewButtonGroup: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 25,
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 16,
    },

    imgSecure: {
        width: 316,
        height: 198,
        marginVertical: 30,
        alignSelf: 'center',
    },

    viewStepGroup: {
        width: '100%',
        flexDirection: 'column',
        gap: 20,
    },

    viewStep: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewStepIndex: {
        width: 24,
        height: 24,
        backgroundColor: colors.PrimaryColor,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtStepIndex: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFFFFF',
    },

    viewText: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
    },

    txtStepTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#111111',
    },

    txtStepDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    }

})