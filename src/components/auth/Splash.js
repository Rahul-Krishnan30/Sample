import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import commonCss from '../../assets/css/commonCss';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1000);
    };


    render() {
        return (
            <SafeAreaView style={[commonCss.fullFlex, commonCss.bgColor]}>
                <View style={commonCss.fullFlex}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/splash.png')} style={commonCss.splashImg} />
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

export default Splash;
