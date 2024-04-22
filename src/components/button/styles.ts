import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.PrimaryColor,
        backgroundColor: colors.PrimaryColor,
    },

    txtTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFFFFF',
    },
})