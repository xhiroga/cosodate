import React, { Component } from 'react'
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

class Facilities extends Component {

  componentWillMount(){
    this.dataSource = []

    this.props.localData["facility"]["data"].map( facility => {
      if (facility["type"] === this.props.info.name){
        this.dataSource.push(facility)
      }
    })
    // console.log(this.dataSource)
  }

  renderTile(facility) {
    return(
      <TouchableOpacity style={styles.tileStyle} key={facility.key} onPress={()=>Actions.facility({info: facility, headerOfG: facility.name})}>
        <Image
          style={styles.imageStyle}
          source={{ uri: facility.image_url }}
        >
        </Image>
        <Text style={{ marginTop:3, }}>
          { facility.name }
        </Text>
      </TouchableOpacity>
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
    height: 240,
    width: 150
  },
}


const mapStateToProps = ( state ) => {
  const { regions, lang, localData } = state.Init
  return { regions, lang, localData }
}


export default connect(mapStateToProps)(Facilities)
