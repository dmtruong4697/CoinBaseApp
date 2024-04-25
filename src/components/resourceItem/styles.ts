import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },

    imgIcon: {
        height: 20,
        width: 20,
    },

    txtLink: {
        flex: 1,
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryColor,
    }
})