import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Linking} from 'react-native'
import { connect } from 'react-redux'

import InfoText from '../InfoText'

class Facilities extends Component {

  componentWillMount(){
    this.dataSource = []

    this.props.localData["Facilities"]["data"].map( facility => {
      if (facility["type"] === this.props.info.name){
        this.dataSource.push(facility)
      }
    })
    console.log(this.dataSource)
  }

  renderFacilityCards(){
    //action facilityの一覧をください
    if (this.props.info.type === ""){ return }

  }

  render() {
    return(
      <View style = {{padding:15}}>
        <InfoText text={this.props.info.text} />
      </View>

    )
  }
}

const mapStateToProps = ( state ) => {
  const { regions, lang, localData } = state.Init
  return { regions, lang, localData }
}


export default connect(mapStateToProps)(Facilities)
