import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        height: '200%',
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

    viewFormContainer: {
        flexDirection: 'column',
        width: '100%',
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'column',
    },

    viewTerm: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        paddingRight: 10,
    },

    viewCheck: {
        width: 20,
        height: 20,
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },

    imgCheck: {
        width: 18,
        height: 18,
    },

    txtTerm: {
        fontSize: 16,
        fontWeight: '400',
        color: '#111111',
        // textAlign: 'justify',
        lineHeight: 20,
    },

})