import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

//css load
import commonCss from '../../assets/css/commonCss';
import loginCss from '../../assets/css/loginCss';

let backPressed = 0;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",

        };
    }

    //for android back button press to exit app
    handleBackButton() {
        if (backPressed > 0) {
            BackHandler.exitApp();
            backPressed = 0;
        } else {
            backPressed++;
            ToastAndroid.show("Press Again To Exit", ToastAndroid.SHORT);
            setTimeout(() => { backPressed = 0 }, 2000);
            return true;
        }
    }

    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    login = async () => {
        //login function 
        if (this.state.userName.trim() === "") {
            alert("Please enter user name")
        } else if (this.state.password.trim() === "") {
            alert("Please enter password")
        } else if (this.state.password.trim().length < 8) {
            alert("Password must have minimum 8 characters")
        } else {
            await AsyncStorage.setItem('userName', this.state.userName)
            this.props.navigation.navigate('Home', { user: this.state.userName })
        }
    };

    feildInputChange = (value, feildName) => {
        //feild value changing
        if (feildName === 'userName') {
            this.setState({ userName: value })
        } else if (feildName === 'password') {
            this.setState({ password: value })
        }
    }

    render() {
        return (
            <>
                <SafeAreaView style={[commonCss.fullFlex, { backgroundColor: "#EF0D33" }]}>
                    <ScrollView style={[commonCss.fullFlex, { backgroundColor: "#FFFFFF" }]} showsVerticalScrollIndicator={false}>
                        <KeyboardAwareScrollView
                            enableOnAndroid={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={commonCss.fullFlex}
                        >
                            <View style={commonCss.fullFlex}>
                                <View style={loginCss.mainContainer}>
                                    <View style={loginCss.mainLogo}>
                                        <Image source={require('../../assets/images/logo.png')} style={loginCss.logoImg} />
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text style={[loginCss.mainTitle,]}>Welcome </Text>
                                        <Text style={[loginCss.subTitle,]}>Login in to continue</Text>
                                    </View>
                                    <View style={loginCss.feildContainer}>
                                        <View>
                                            <View style={loginCss.emailPhoneContainer}>
                                                <TextInput placeholder="Enter Username" ref={(input) => { this.textInput = input }}
                                                    onSubmitEditing={() => { this.secondTextInput.focus() }} returnKeyType="next"
                                                    style={loginCss.labelValueText} onChangeText={(value) => { this.feildInputChange(value, "userName") }} />
                                            </View>
                                        </View>
                                        <View style={[loginCss.feildSubContainer, loginCss.feildSubContainerExtra]}>
                                            <View style={loginCss.passwordFeildContainer}>
                                                <TextInput placeholder="Enter Password" ref={(input) => { this.secondTextInput = input }} secureTextEntry={true}
                                                    style={[loginCss.feildInput, loginCss.passwordFeildValue]}
                                                    onChangeText={(value) => { this.feildInputChange(value, "password") }} />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={loginCss.signInContainer}>
                                        <TouchableOpacity style={loginCss.signInBtn} onPress={() => this.login()}>
                                            <Text style={[loginCss.signInText,]}>LOGIN</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

export default Login;
