import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        height: 247,
        width: 314,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.BorderColor,
        flexDirection: 'column',
    },

    viewBanner: {
        width: '100%',
        height: 164,
        borderBottomWidth: 1,
        borderBottomColor: colors.BorderColor,
    },

    viewContent: {
        padding: 15,
        width: '100%',
        flexDirection: 'column',
    }
})