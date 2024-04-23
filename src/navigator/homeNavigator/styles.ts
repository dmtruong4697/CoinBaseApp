import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewIconAdd: {
        width: 43,
        height: 43,
        borderRadius: 1000,
        backgroundColor: colors.PrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: -15,
    },

    imgAddIcon: {
        height: 20, 
        width: 20, 
    },

    imgTabBarIcon: {
        height: 20,
        resizeMode: 'contain',
    },

})