import React, {Component} from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { TEXTS } from '../Texts'

class FlavorItems extends Component {

  constructor(props) {
    super(props)
  }

  epoch2DateString(str) {
    // dt = new Date(str) <- fail. why?

    dt = new Date(0)
    dt.setUTCMilliseconds(str)
    console.log(dt)
    return ((dt.getYear()+1900)+'/'+(dt.getMonth()+1)+'/'+dt.getDate())
  }

  renderMetaData() {
    // expect this.state['contentsMetaData'][info.key] of List.js
    if ( typeof this.props.meta === "undefined" || this.props.meta.length === 0 ){
      return
    } else {
      return(
        <View style={styles.metaContainer}>
          <Text style={styles.metaTexts}>
            {TEXTS['privateImpressions'][this.props.lang]}
            ・
            {this.props.meta['privateImpressions']}
          </Text>
          <Text style={styles.metaTexts}>
            {TEXTS['lastBrowse'][this.props.lang]}
            ・
            {this.epoch2DateString(this.props.meta['lastBrowse'])}
          </Text>
        </View>
      )
    }
  }

  render() {
    const {key, name, author, date, text, link} = this.props.info

    return (
      <TouchableHighlight
        key={key}
        onPress={()=>Actions.info({ info: this.props.info })}
        style={styles.container}
        underlayColor={'#f3f3f2'}
      >
        <View>
          <Text style={styles.name}>
              {name}
          </Text>
          <Text
            numberOfLines={2}
            style={styles.explain}>
              {text}
          </Text>
          {this.renderMetaData()}
        </View>
      </TouchableHighlight>
    )
  }

};

var styles = {
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 15,
    textAlign: 'left',
    marginRight: 10,
    color: '#FF6600'
  },
  explain: {
    fontSize: 12,
    marginTop: 10,
    color: '#545454',
  },
  metaContainer:{
    marginTop:5
  },
  metaTexts: {
    fontSize: 12,
    color: 'gray',
  },
};

const mapStateToProps = ( state ) => {
  const { regions, lang } = state.Init // Initに紐付くreducerのdefaultが返ってくる。
  return { regions, lang }
}

export default connect(mapStateToProps)(FlavorItems);
