import { StyleSheet, Dimensions, Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

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
    logoImg: { width: width / 2, height: width / 2 },
    mainTitle: {
        fontSize: RFValue(24),
        lineHeight: RFValue(27),
        color: "#EF0D33",
        marginTop: RFValue(20),
        fontFamily: "Montserrat-Bold"
    },
    formContainer: {
        flex: 5,
        backgroundColor: "#FFFFFF",
        marginLeft: RFValue(16),
        marginRight: RFValue(16),
        bottom: RFValue(70),
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
    emailPhoneContainer: {
        borderWidth: RFValue(1),
        borderRadius: RFValue(5),
        height: RFValue(48),
        borderColor: "#D8D8D8"
    },
    emailPhoneSubContainer: {
        backgroundColor: "#ffffff",
        // width: RFValue(95),
        alignSelf: "flex-start",
        marginLeft: Platform.OS === "ios" ? RFValue(14) : RFValue(19),
        bottom: RFValue(8)
    },
    labeText: {
        color: "#A2A2A2",
        fontSize: RFValue(11),
        fontFamily: "Poppins-Medium"
    },
    labelValueText: {
        marginLeft: RFValue(14),
        fontSize: RFValue(14),
        color: "#000000"
    },
    passwordLabel: {
        backgroundColor: "#ffffff",
        alignSelf: "flex-start",
        marginLeft: Platform.OS === "ios" ? RFValue(14) : RFValue(19),
        bottom: Platform.OS === "ios" ? RFValue(14) : null
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
    feildLabelContainer: {
        backgroundColor: "#ffffff",
        bottom: Platform.OS === "ios" ? RFValue(15) : RFValue(8),
        marginLeft: RFValue(7),
        width: RFValue(Platform.OS === "ios" ? 100 : 120),
    },
    feildLabelText: {
        textAlign: "center",
        color: "#A2A2A2",
    },
    feildLabelError: {
        color: "#FC4873",
    },
    passwordFeildContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    feildInput: {
        marginLeft: RFValue(14)
    },
    feildPasswordLabel: {
        backgroundColor: "#ffffff",
        bottom: Platform.OS === "ios" ? RFValue(15) : RFValue(8),
        marginLeft: RFValue(7),
        width: RFValue(75),
    },
    forgotPasswordContainer: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginTop: RFValue(20),
        flexDirection: "row"
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
});
