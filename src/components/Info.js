import React, {Component} from 'react'
import {
  AsyncStorage,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native'
import { connect } from 'react-redux'
import {Header} from './common'

import {TEXTS} from '../Texts'

import Facilities from './categories/Facilities'
import Subsidy from './categories/Subsidy'
import { setContentsMetaData2AsyncAndState } from '../actions'
import s from './styles';

class Info extends Component {

  componentDidMount() {
    this.props.setContentsMetaData2AsyncAndState(this.props.info.key)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header topText={this.props.info.name}/>
        <ScrollView style={s.wallStyle}>
          <View style={styles.contentStyle}>
            {renderText(this.props)}
            {renderCategorizedContent(this.props)}
            {renderExternalLink(this.props)}
            {renderContact(this.props)}
          </View>
        </ScrollView>
      </View>
    )
  }

};

const renderCategorizedContent = (props) => {
  const {category, type} = props.info

  switch (category) {
    case "facilities-info":
      return <Facilities info={props.info}/>
    case "health":
      return
    case "subsidy":
      return <Subsidy info={props.info}/>
    case "welfare":
      return
    case "facility": // == category
      return <Text>{props.info.name}</Text>
    case "news": // == category
      return <Text>{props.info.name}</Text>
  }
}

const renderText = (props) => {
  console.log(props)
  if (props.info.text !== "") {
    return (
      <Text style={{
        marginTop: 9,
        marginBottom: 9,
        lineHeight: 18
      }}>
        {props.info.text.replace(/\s\s/g, '\n')}
      </Text>
    )
  }
}

const renderExternalLink = (props) => {
  if (props.info.link !== "") {
    return (
      <TouchableOpacity style={styles.linkStyle} onPress={() => {
        Linking.openURL(props.info.link)
      }}>
        <Text style={styles.titleStyle}>{TEXTS["link"]["jp"]}</Text>
      </TouchableOpacity>
    )
  }
}

const renderContact = (props) => {
  if (props.info.contact !== "") {
    const {contactStyle, titleStyle, contactText} = styles

    return (
      <View style={contactStyle}>
        <Text style={titleStyle}>{TEXTS["contact"]["jp"]}</Text>
        <Text style={{
          marginTop: 6,
          lineHeight: 20
        }}>
          {props.info.contact.replace(/\s\s/g, '\n')}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { contentsMetaData } = state.Info
  return { contentsMetaData };
  // react-reduxがconnectの引数state経由で渡したreducerの実行結果をmapしてclassに渡す、の意
};

const styles = {
  contentStyle: {
    margin: 18
  },
  linkStyle: {
    backgroundColor: '#C3D48F',
    justifyContent: 'center',
    alignItems: "flex-start",
    marginTop: 9,
    marginBottom: 9,
    padding: 9,
    borderRadius: 3
  },
  contactStyle: {
    backgroundColor: '#F5F3EB',
    justifyContent: 'center',
    alignItems: "flex-start",
    marginTop: 9,
    marginBottom: 9,
    padding: 15,
    borderRadius: 3
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: "flex-start"
  }
};

export default connect(mapStateToProps, { setContentsMetaData2AsyncAndState })(Info);
