import React, {Component} from 'react'
import {
  AsyncStorage,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native'
import {Header} from './common'

import {TEXTS} from '../Texts'

import Facilities from './categories/Facilities'
import Subsidy from './categories/Subsidy'

class Info extends Component {

  componentDidMount() {
    AsyncStorage.getItem('contentsMetaData'). //当該のキーがなければ(catchされるのではなく)nullが返る
    then(req => {
      this.setState({
        'contentsMetaData': (req === null
          ? {}
          : JSON.parse(req)) //req初期値はnull, またparse前は文字列
      })
      if (typeof this.state['contentsMetaData'][this.props.info.key] === "undefined") {
        this.state['contentsMetaData'][this.props.info.key] = {
          privateImpressions: 0,
          lastBrowse: 0
        }
      }
      this.state['contentsMetaData'][this.props.info.key]['privateImpressions'] += 1
      this.state['contentsMetaData'][this.props.info.key]['lastBrowse'] = String(Date.now())
      AsyncStorage.setItem('contentsMetaData', JSON.stringify(this.state['contentsMetaData']));
    }).catch(error => console.log('error!'));
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1
      }}>
        <Header topText={this.props.info.name}/>

        <View style={styles.contentStyle}>
          {renderText(this.props)}
          {renderCategorizedContent(this.props)}
          {renderExternalLink(this.props)}
          {renderContact(this.props)}
        </View>

      </ScrollView>
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
      return <Text>
        {props.info.name}
      </Text>
    case "news": // == category
      return <Text>
        {props.info.name}
      </Text>
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

export default Info;
