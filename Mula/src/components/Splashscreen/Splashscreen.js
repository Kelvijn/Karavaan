import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ToolbarAndroid, Image, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { NavigationActions } from 'react-navigation';

export default class Splashscreen extends React.Component {

    componentWillMount() {
       /*const resetAction = NavigationActions.reset({
            index: 0,
            actions: [

              NavigationActions.navigate({ routeName: 'Login'}),
            ]
          })
          this.props.navigation.dispatch(resetAction)*/

        //setTimeout(() => this.props.navigation.navigate('Login'), 3000);

    }

    /*
    If username is in AsyncStorage => navigate to Dashboard
    If username is not in AsyncStorage => navigate to LoginScreen
    */
    checkIfLoggedIn(){
        try{
            AsyncStorage.getItem('userName').then((username) => {
                console.log(username);
                if(username != null){
                    setTimeout(() => this.props.navigation.navigate('Dashboard'), 2500);
                } else {
                    setTimeout(() => this.props.navigation.navigate('Login'), 2500);
                }
            })
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        this.checkIfLoggedIn();

        return (
        <View style={styles.container}>
            <Image
                style={{width: 200, height: 133}}
                source={require('../../images/Karavaan_pos.png')}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#6FC2B0',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
