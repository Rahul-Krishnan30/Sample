import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    logoImg: {
        width: width / 2,
        height: width / 2
    },
    mainBackground: {
        backgroundColor: "#FFFFFF"
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    detailsContainer: {
        marginTop: RFValue(20),
        alignItems: "center"
    },
    welcomeText: {
        margin: RFValue(10),
        fontSize: RFValue(24),
        color: "#EF0D33",
        fontFamily: "Montserrat-Bold"
    },
    userNameText: {
        margin: RFValue(10),
        fontSize: RFValue(20),
        color: "#EF0D33",
        fontFamily: "Montserrat-Italic"
    },
    logOutContainer: {
        marginTop: RFValue(50),
        alignItems: "center"
    },
    logOutBtn: {
        height: RFValue(50),
        width: width / 2,
        backgroundColor: "#EF0D33",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(7)
    },
    logOutText: {
        color: "#FFFFFF",
        fontFamily: "Montserrat-Bold"

    }

});

