import React from 'react';
import { StyleSheet, Text, View, Button, Icon, Image,TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import { StackNavigator} from 'react-navigation';
import Hamburger from 'react-native-hamburger';
import I18n from 'react-native-i18n';

import Splashscreen from './src/components/Splashscreen/Splashscreen';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Settings from './src/components/Settings/Settings';
import DashboardTrips from './src/components/Dashboard/DashboardTrips';
import TripDashboard from './src/components/Trip/TripDashboard'
import AddTrip from './src/components/Trip/AddTrip';
import AddExpense from './src/components/Expense/AddExpense';
import DetailExpense from './src/components/Expense/DetailExpense';
import TripSettings from './src/components/Settings/TripSettings';
// import DetailEvent from './src/components/Event/DetailEvent';
// import DetailPerson from './src/components/User/DetailPerson';
// import DetailGroup from './src/components/Groups/DetailGroup';
// import AddGroup from './src/components/Groups/AddGroup';

import nl from './src/Translations/Dutch';
import en from './src/Translations/English';

I18n.defaultLocale = "nl";
I18n.fallbacks = false;

I18n.translations = {
  nl,
  en
};

export default App = StackNavigator({
    Splashscreen: {
      navigationOptions: {
        title: 'Splashscreen',
        header: null,
      },
      screen: Splashscreen
    },
    Login: {
      navigationOptions: {
        title: 'Login',
        header: null,
      },
      screen: Login
    },
    Register: {
      navigationOptions: {
        title: I18n.t('registerpage'),
        headerStyle:{
          backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
          color: '#FFF'
        },
        headerBackTitleStyle:{
          color: "#FFF"
        }
      },
      screen: Register
    },
    DashboardTrips: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('trips'),
        headerStyle:{
          backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
            color: '#FFF'
        },
        headerBackTitleStyle:{
            color: "#FFF"
        },
        gesturesEnabled: false,
        headerLeft: null,
        headerRight:
          <TouchableOpacity onPress={()=>{ navigation.navigate('Settings') }}>
              <Image source={require('./src/images/settings.png')} style={{width: 35, height: 35, marginRight: 5}}/>
          </TouchableOpacity>,
        drawer:() => ({
          label: 'Home'
        })
      }),
      screen: DashboardTrips
    },
    Settings: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('settings'),
        headerStyle:{
          backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
            color: '#FFF'
        },
        headerBackTitleStyle:{
            color: "#FFF"
        },
        headerLeft:
        <TouchableOpacity onPress={()=>{ navigation.navigate('DashboardTrips') }}>
          <Image source={require('./src/images/left-arrow-png-left-icon-1600.png')} style={{width: 22, height: 22, marginLeft: 15}}/>
        </TouchableOpacity>,
      }),
      screen: Settings
    },
    TripDashboard: {
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.trip.name + I18n.t('tripdetails'),
        headerStyle:{
          backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
            color: '#FFF'
        },
        headerBackTitleStyle:{
            color: "#FFF"
        },
      }),
      screen: TripDashboard
    },
    AddTrip: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('addEvent'),
        headerStyle:{
           backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
           color: '#FFF'
        },
        headerBackTitleStyle:{
           color: "#FFF"
        },
         drawer:() => ({
           label: 'Home'
        })
      }),
      screen: AddTrip
    },
    AddExpense: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('addExpense'),
        headerStyle:{
          backgroundColor: '#6fc2b0'
        },
        headerTitleStyle:{
            color: '#FFF'
        },
        headerBackTitleStyle:{
            color: "#FFF"
        }
      }),
      screen: AddExpense
    },
    TripSettings: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('tripsettings'),
        headerStyle: {
           backgroundColor: '#6fc2b0'
        },
        headerTitleStyle: {
           color: '#FFF'
        },
        headerBackTitleStyle: {
           color: "#FFF"
        },
        headerLeft: 
        <TouchableOpacity onPress={()=>{ navigation.navigate('DashboardTrips') }}>
          <Image source={require('./src/images/chevron_left.png')} style={{width: 35, height: 35, marginLeft: 5}}/>
        </TouchableOpacity>,
      }),
      screen: TripSettings
    },
    DetailExpense: {
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('detailExpense'),
        headerStyle: {
           backgroundColor: '#6fc2b0'
        },
        headerTitleStyle: {
           color: '#FFF'
        },
        headerBackTitleStyle: {
           color: "#FFF"
        }
      }),
      screen: DetailExpense
    },
    // AddGroup: {
    //   navigationOptions: ({ navigation }) => ({
    //     title: 'Add Group',
    //     headerStyle:{
    //        backgroundColor: '#0992ef',
    //        marginTop: 24
    //     },
    //     headerTitleStyle:{
    //        color: '#FFF'
    //     },
    //     headerBackTitleStyle:{
    //        color: "#FFF"
    //     },
    //     headerLeftStyle:{
    //       color:'#fff'
    //     },
    //     drawer:() => ({
    //       label: 'Home'
    //     })
    //   }),
    //   screen: AddGroup
    // },
    // DetailEvent: {
    //   navigationOptions: ({ navigation }) => ({
    //     title: I18n.t('detailExpense'),
    //     headerStyle: {
    //        backgroundColor: '#0992ef',
    //        marginTop: 24
    //     },
    //     headerTitleStyle: {
    //        color: '#FFF'
    //     },
    //     headerBackTitleStyle: {
    //        color: "#FFF"
    //     },
    //     headerLeftStyle: {
    //       color:'#fff'
    //     },
    //     drawer:() => ({
    //       label: 'Home'
    //     })
    //   }),
    //   screen: DetailEvent
    // },
    // DetailPerson: {
    //   navigationOptions: ({ navigation }) => ({
    //     title: 'Detail Person',
    //     headerStyle: {
    //        backgroundColor: '#0992ef',
    //        marginTop: 24
    //     },
    //     headerTitleStyle: {
    //        color: '#FFF'
    //     },
    //     headerBackTitleStyle: {
    //        color: "#FFF"
    //     },
    //     headerLeftStyle: {
    //       color:'#fff'
    //     },
    //     drawer:() => ({
    //       label: 'Home'
    //     })
    //   }),
    //   screen: DetailPerson
    // },
    // DetailGroup: {
    //   navigationOptions: ({ navigation }) => ({
    //     title: 'Detail Group',
    //     headerStyle: {
    //        backgroundColor: '#0992ef',
    //        marginTop: 24
    //     },
    //     headerTitleStyle: {
    //        color: '#FFF'
    //     },
    //     headerBackTitleStyle: {
    //        color: "#FFF"
    //     },
    //     headerLeftStyle: {
    //       color:'#fff'
    //     },
    //     drawer:() => ({
    //       label: 'Home'
    //     })
    //   }),
    //   screen: DetailGroup
    // }
  },
  {
    headerMode: 'screen'
  }
);

const styles = StyleSheet.create({});
