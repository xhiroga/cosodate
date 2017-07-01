import React, { Component } from 'react'
import {Text, Image, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

class Facilities extends Component {

  componentWillMount(){
    this.dataSource = []

    this.props.localData["Facilities"]["data"].map( facility => {
      if (facility["type"] === this.props.info.name){
        this.dataSource.push(facility)
      }
    })
    // console.log(this.dataSource)
  }

  renderTile(facility) {
    return(
      <View style={styles.tileStyle} key={facility.key}>
        <Image
          style={styles.imageStyle}
          source={{ uri: facility.image_url }}
        >
        </Image>
        <Text style={{ marginTop:3, }}>
          { facility.name }
        </Text>
      </View>
    )
  }

  render() {
    return(
      <View style={{marginTop: 18,}}>
        <Text style={{marginBottom:6, fontSize:18}}>{ this.props.info.name }</Text>
        <View style={styles.tileContainerStyle}>
          { this.dataSource.map( facility => this.renderTile(facility)  ) }
        </View>
      </View>
    )
  }
}


const styles = {
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
  return { regions, lang, localData }
}


export default connect(mapStateToProps)(Facilities)
