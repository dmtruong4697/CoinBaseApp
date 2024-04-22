import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    viewContainer: {
        width: 180,
        height: 24,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
        position: 'absolute',

    },

    viewItem: {
        flex: 1,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#F3F3F3',
        marginHorizontal: 5,
    }
})