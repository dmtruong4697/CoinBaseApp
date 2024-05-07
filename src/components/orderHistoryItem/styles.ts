import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        paddingVertical: 5,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    },

    viewGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    txtTop: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtBottom: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.SecondTextColor,
    },
})