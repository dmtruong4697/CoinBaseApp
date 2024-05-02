import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        // backgroundColor: 'pink',
    },

    btnItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    txtItem: {
        fontSize: 28,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    }
})