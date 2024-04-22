import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.PrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    txtAppName: {
        fontSize: 40,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 100,

        // position: 'absolute',
        // top: 0,
        // bottom: 0,
    },

    viewButtonGroup: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        flexDirection: 'column',
    },
})