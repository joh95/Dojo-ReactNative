import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';
 
export default class App extends Component<{}>
{
    constructor(){
        super();
        this.state = { currentTime: null, currentDay: null }
    }
 
    componentWillMount(){
        this.getCurrentTime();
    }
 
    getCurrentTime = () =>{
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let period = 'PM';
 
        if( minutes < 10 ){
            minutes = '0' + minutes;
        }
 
        if( seconds < 10 ){
            seconds = '0' + seconds;
        }
 
        if( hour > 12 ){
            hour = hour - 12;
        }
 
        if( hour == 0 ){
            hour = 12;
        }

        if(new Date().getHours() < 12 ){
          period = 'AM';
        }        

        this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' '+ period  });    
    }
 
    componentWillUnmount(){
        clearInterval(this.timer);
    }
 
    componentDidMount(){
        this.timer = setInterval(() =>
        {
            this.getCurrentTime();
        }, 1000);
    }
 
    render(){
        return(
            <View style = { styles.container }>
                <View>
                    <Text style = { styles.normalText }>{ "Hora: " }</Text>   
                    <Text style = { styles.timeText }>{ this.state.currentTime }</Text> 
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A4058',
    },
 
    timeText:{
        fontSize: 70,
        color: '#FFFFFF'
    },

    normalText: {
      fontSize: 40,
        color: '#B6C5BE'
    }
});