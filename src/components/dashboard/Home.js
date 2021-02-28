import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import commonCss from '../../assets/css/commonCss';
import homeCss from '../../assets/css/homeCss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        };
    }
    componentDidMount = () => {
        this.setState({
            user: this.props.route.params.user
        })
    };

    logOut = async () => {
        Alert.alert(
            "Alert",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => this.logoutConfirm() }
            ],
            { cancelable: false }
        );
    }

    logoutConfirm = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <SafeAreaView style={[commonCss.fullFlex, homeCss.mainBackground]}>
                <View style={commonCss.fullFlex}>
                    <ScrollView>
                        <View style={homeCss.logoContainer}>
                            <Image source={require('../../assets/images/logo.png')} style={homeCss.logoImg} />
                        </View>
                        <View style={homeCss.detailsContainer}>
                            <Text style={homeCss.welcomeText}> Welcome </Text>
                            <Text style={homeCss.userNameText}> {this.state.user} </Text>
                        </View>
                        <View style={homeCss.logOutContainer}>
                            <TouchableOpacity onPress={() => this.logOut()} style={homeCss.logOutBtn}>
                                <Text style={homeCss.logOutText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
