import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'
import globalStyle from '../style/style'
import { createStackNavigator } from '@react-navigation/stack'
import Resultat from './Resultat'
class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity(city) {
        this.setState({
            city
        })
    }

    submit() {
        this.props.navigation.navigate('Resultat', { city: this.state.city })
    }

    render() {
        return (
            <View style={ globalStyle.container }>
                <TextInput style={style.input} value={ this.state.city } onChangeText={ (city) => this.setCity(city) }/>
                <Button onPress={ () => this.submit() } title="Recherche" color={globalStyle.button.color } ></Button>
            </View>
        )
    }
}
const screenOptions = {
    headerStyle: globalStyle.header,
    headerTitleStyle: globalStyle.headerTitleStyle
}
export default function MyStack() {
    const Stack = createStackNavigator()
    return (
      <Stack.Navigator screenOptions ={screenOptions}>
        <Stack.Screen style ={{color: "#2980b9"}} name="Search" component={Search} />
        <Stack.Screen name="Resultat" component={Resultat} />

      </Stack.Navigator>
    )
  }
const style = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderWidth: 1
    }
})