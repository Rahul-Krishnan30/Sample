import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: RFValue(16),
        position: "relative",
        backgroundColor: "#ffffff",
    },
    mainLogo: {
        alignItems: "center",
        justifyContent: "center"
    },
    logoImg: {
        width: width / 2,
        height: width / 2
    },
    mainTitle: {
        fontSize: RFValue(24),
        lineHeight: RFValue(27),
        color: "#EF0D33",
        marginTop: RFValue(20),
        fontFamily: "Montserrat-Bold"
    },
    subTitle: {
        color: "#073C3D",
        fontSize: RFValue(20),
        lineHeight: RFValue(27),
        fontFamily: "Montserrat-Bold"
    },
    feildContainer: {
        marginTop: RFValue(39),
    },
    userNameContainer: {
        borderWidth: RFValue(1),
        borderRadius: RFValue(5),
        height: RFValue(48),
        borderColor: "#D8D8D8"
    },
    labelValueText: {
        marginLeft: RFValue(14),
        fontSize: RFValue(14),
        color: "#000000"
    },
    feildSubContainer: {
        borderColor: "#D8D8D8",
        borderWidth: RFValue(1),
        borderRadius: RFValue(5),
        height: RFValue(48),
        justifyContent: "center"
    },
    feildSubContainerExtra: {
        marginTop: RFValue(31),
    },
    passwordFeildContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    feildInput: {
        marginLeft: RFValue(14)
    },
    signInBtn: {
        backgroundColor: "#EF0D33",
        height: RFValue(48),
        justifyContent: "center",
        borderRadius: RFValue(5),
    },
    signInText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: RFValue(20),
        fontFamily: "Montserrat-Bold"
    },
    signInContainer: {
        marginTop: RFValue(28),
    },
    passwordFeildValue: {
        width: RFValue(250),
        fontSize: RFValue(14)
    }
});
