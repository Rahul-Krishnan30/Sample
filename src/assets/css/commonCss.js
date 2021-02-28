import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    fullFlex: {
        flex: 1
    },
    bgColor: {
        backgroundColor: "#EF0D33"
    },
    splashImg: {
        width: width / 2,
        height: width / 2
    }
});
