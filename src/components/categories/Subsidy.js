import React, { Component } from 'react'
import {Text, Image, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { TEXTS } from '../../Texts'

import { moveSubsidySection } from '../../actions'

class Subsidy extends Component {

  renderTab(section) {

    let tabStyle = [styles.normalTabStyle]
    let textStyle = [styles.tabTextStyle]

    if (section === this.props.subsidySection){
      tabStyle.push({ borderColor:'#FF6600', borderBottomWidth:1 })
      textStyle.push({ color:'#FF6600' })
    }

    return (
      <TouchableOpacity
        key={section}
        style={tabStyle}
        onPress={ () => this.props.moveSubsidySection(section) }
      >
        <Text style={textStyle}>
          {TEXTS[section]["jp"]}
        </Text>
      </TouchableOpacity>
    )
  }


  render() {
    console.log("this.props.subsidySection",this.props.subsidySection)
    return(
      <View sytle={{marginTop:9, marginBottom:9}}>
        <View style={styles.tabBarStyle}>
          { subsidySections.map( section => this.renderTab(section) ) }
        </View>
        <Text style={{lineHeight:18}}>
          {this.props.info[this.props.subsidySection].replace(/\s\s/g, '\n')}
        </Text>
      </View>
    )
  }

}

const subsidySections = [
  "recepient",
  "amount_period",
  "apply",
  "procedure"
]


const styles = {
  tabBarStyle:{
    margin:12,
    backgroundColor:"#EFEFF2",
    borderRadius:5,
    flexDirection: 'row',
    alignSelf:"center",
  },
  normalTabStyle:{
    padding:8
  },
  tabTextStyle:{

  },
  tileContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tileStyle: {
    marginTop:6,
    marginBottom:6,
    borderRadius:3,
    // ここでサイズを指定するのは、写真サイズと文字サイズ両方考えなきゃいけないので面倒。
    // flexで指定するとwrapが効かなくなる
  },
  imageStyle: {
    height: 256,
    width: 160
  },
}


const mapStateToProps = ( state ) => {
  const { regions, lang, localData } = state.Init
  const { subsidySection } = state.Tab
  return { regions, lang, localData, subsidySection }
}

export default connect(mapStateToProps, { moveSubsidySection } )(Subsidy)
