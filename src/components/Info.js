import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Header } from './common'
import {
  // Health,
  // Facilities,
  Subsidy,
  Welfare
} from './categories'
import Facilities from './categories/Facilities'

import InfoText from './InfoText'
import { TEXTS } from '../Texts'

const Info = (props) => {

  return (
    <ScrollView style={{flex:1}}>
      <Header topText={ props.info.name } />

      <View sytle={{margin:10}}>
        { renderContent(props) }
      </View>

      { renderContact(props) }
    </ScrollView>
  )

};

const renderContent = (props) => {
  const { category, type } = props.info

  switch ( category ){
    case "info":
      switch ( type ){
        case "facility":
          return <Facilities info={ props.info } />
        case "health":
          return <Text> { props.info.name } </Text>
        case "subsidy":
          return <Text> { props.info.name } </Text>
        case "welfare":
          return <Welfare info={ props.info } />
      }
    case "facility": // == category
      return <Text> { props.info.name } </Text>
    case "news": // == category
      return <Text> { props.info.name } </Text>
  }
}

const renderContact = (props) => {
  if ( props.info.contact!== "" ){
    const {contactStyle, contactTitle, contactText} = styles

    return (
      <View style={ contactStyle }>
        <Text style={ contactTitle }>{TEXTS["contact"]["jp"]}</Text>
        <InfoText text={ props.info.contact } />
      </View>
    )
  }
}

const styles = {
  contactStyle:{
    backgroundColor: '#F5F3EB',
    justifyContent: 'center',
    alignItems:"flex-start",
    margin:10,
    padding:15,
    borderRadius:3,
    // shadowColor: '#000',
    // shadowOffset: {witdh:0, height:2},
    // shadowOpacity: 0.2,
    // elevation: 2,
    position: 'relative',
  },
  contactTitle:{
    fontSize:18,
    fontWeight: 'bold',
    paddingBottom:5,
    alignSelf: "flex-start",
  }
};


export default Info;
