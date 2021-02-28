import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import commonCss from '../../assets/css/commonCss';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount = async () => {
        setTimeout(async () => {
            let userName = await AsyncStorage.getItem('userName')
            if (userName) {
                this.props.navigation.navigate('Home', { user: userName })
            } else {
                this.props.navigation.navigate('Login')
            }
        }, 1000);
    };

    render() {
        return (
            <SafeAreaView style={[commonCss.fullFlex, commonCss.bgColor]}>
                <View style={commonCss.fullFlex}>
                    <View style={commonCss.splashImgContainer}>
                        <Image source={require('../../assets/images/splash.png')} style={commonCss.splashImg} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Splash;
