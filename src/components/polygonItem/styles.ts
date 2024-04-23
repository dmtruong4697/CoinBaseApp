import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: 74,
        // borderRadius: 10,
        // borderWidth: 1,
        // borderColor: colors.BorderColor,
        // padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgIcon: {
        width: 32,
        height: 32,
        // borderRadius: 1000,
        // backgroundColor: colors.BorderColor,
    },

    viewText: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: 'column',
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.PrimaryTextColor,
    },

    txtSymbol: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
    },

    txtWatch: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.PrimaryColor,
    }

})