import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import I18n from 'react-native-i18n';

export default class TripCategory extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    componentDidMount() {

    }

    getAllExpensesByTrip(){

    }

    renderExpenses() {

    }

    render() {
      return(
        <View style={styles.container}>
          <Text>TRIP CATEGORY</Text>
          <TouchableOpacity style={styles.addTripButton} onPress={() => this.props.navigator.navigate('AddExpense', {trip: this.props.navigator.state.params.trip})}>
              <Text style={styles.addTripButtonText} >+</Text>
            </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#d4e8e5'
    },
    addTripButton: {
      backgroundColor: '#3B4859',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 10,
      right: 10,
  },
  addTripButtonText: {
      color: '#fff'
  }
});
