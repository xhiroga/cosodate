// 開発期間はローカルからとってる

import Info_Facilities from '../reducers/Info_Facilities.json'
import Info_Health from '../reducers/Info_Health.json'
import Info_Subsidies from '../reducers/Info_Subsidies.json'
import Info_Welfare from '../reducers/Info_Welfare.json'
import Facilities from '../reducers/Facilities.json'
import News from '../reducers/News.json'

export const fetchAndStoreData = () => {
  console.log("本当はここで地域情報と言語情報をもらってくる")
  // ↓↓しばらくはローカルのjsonで代用する(linkdataにデータをアップするのが面倒だから)
  // axios.get('http://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
  //   .then(function (response) {console.log(response);})
  //   .catch(function (error) {console.log(error);});
  // Error: Network Errorの場合はinfo.plist(複数あるので注意)を見る

  localData = []

  localData["Info_Facilities"] = Info_Facilities
  localData["Info_Health"] = Info_Health
  localData["Info_Subsidies"] = Info_Subsidies
  localData["Info_Welfare"] = Info_Welfare
  localData["Facilities"] = Facilities
  localData["News"] = News

  return { type: "storeDataOnLocal", payload: localData }
}
