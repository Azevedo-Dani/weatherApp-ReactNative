import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import globalStyle from '../style/style'
export default class About extends Component {
    static navigationOptions = {
        tabBarIcon() {
            return (
                <Ionicons name="md-person" size={32} color="gray" />            )
        }
    }

    search() {
       this.props.navigation.navigate('Search')
    }
    render() {
        return (
            <View style={ globalStyle.container }>
                <Text style={style.title}>A propos de l'application</Text>
                <Button onPress={() => this.search()} title="Rechercher une ville" color={ globalStyle.button.color } ></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 40,
        marginBottom:20
    },
})