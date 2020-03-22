import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import FadeInView from './Animation'
export default class RowData extends React.Component {

    day() {
        return moment(this.props.item.dt * 1000).format('LL')
    }

    hour() {
        return moment(this.props.item.dt * 1000).format('HH:mm')
    }
    render() {
        return (
            <FadeInView delay = {this.props.index * 50}>
                <View style={[style.view, style.flex]}>
                    <View style={style.flex}>
                        <Image source={{uri: `http://openweathermap.org/img/wn/${this.props.item.weather[0].icon}.png`}} style={{width: 70, height: 70}}/>
                        <Text style={[style.hour, {marginLeft: 20}]}>{this.day()} {this.hour()}</Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.item.main.temp)} °C</Text>
                </View>
            </FadeInView>
        )
    }
}

const style = StyleSheet.create({
    hour: {
        fontWeight: 'bold',
        color: '#2c3e50'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view: {
        backgroundColor: '#dcdde1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#7f8fa6',
        justifyContent: 'space-between',
    },
    temp: {
        color: '#2c3e50',
        fontWeight: 'bold',
        fontSize: 22,
        margin:20
    }
})