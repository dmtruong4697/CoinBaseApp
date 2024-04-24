import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: 5,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgFlag: {
        width: 37.5,
        height: 25,
        backgroundColor: '#666666',
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
        marginHorizontal: 10,

        flex: 1,
    },

    txtCode: {
        fontSize: 16,
        fontWeight: '400',
        color: '#707070',
    },

})