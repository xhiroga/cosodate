import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Linking} from 'react-native'
import InfoText from '../InfoText'

class Welfare extends Component {

  render() {
    return(
      <View style = {{padding:15}}>
        <InfoText text={this.props.info.text} />
      </View>
    )
  }
}


export { Welfare }
