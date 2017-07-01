import React, { Component } from 'react'
import { Text } from 'react-native'

class InfoText extends Component {

  render() {


    return(
      <Text style={styles.infoTextStyle}>
        { this.props.text.replace(/\s\s/g, '\n') }

      </Text>
    )
  }
}

// {this.props.text.split("  ").map( m => { return(<Text>{m}{"\n"}</Text>) } )}

const styles = {
  infoTextStyle:{
    lineHeight:18
  }
}

export default InfoText
