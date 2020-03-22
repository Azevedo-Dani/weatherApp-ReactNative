import React from 'react'
import { Text, ActivityIndicator, FlatList, ListItem } from 'react-native'
import axios from 'axios'
import RowData from './RowData'
import moment from 'moment'
export default class Resultat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.route.params.city,
            result: null
        }
    }
    async componentDidMount() {
        try {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=d2575a59780d65d164863fe01c48c6e8`)
            this.setState({
                result: resp
            })
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        if (!this.state.result) {
            return <ActivityIndicator size="large"></ActivityIndicator>
        }
        // const data = this.filterData(this.state.result.data.list)
        return (<FlatList
                data={this.state.result.data.list}
                renderItem={({item,index}) =>{
                    console.log(':' + index)
                    return <RowData key={index} index={parseInt(index, 10)} item = {item}/>
                }  }
                keyExtractor={(item, index) => index.toString()}
            />)
    }
}