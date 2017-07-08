// 開発期間はローカルからとってる

import Facilities_Info from '../reducers/Facilities-Info.json'
import Health from '../reducers/Health.json'
import Subsidy from '../reducers/Subsidy.json'
import Welfare from '../reducers/Welfare.json'
import Facility from '../reducers/Facility.json'
import News from '../reducers/News.json'

export const fetchAndStoreData = () => {
  console.log("本当はここで地域情報と言語情報をもらってくる")
  // ↓↓しばらくはローカルのjsonで代用する(linkdataにデータをアップするのが面倒だから)
  // axios.get('http://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
  //   .then(function (response) {console.log(response);})
  //   .catch(function (error) {console.log(error);});
  // Error: Network Errorの場合はinfo.plist(複数あるので注意)を見る

  localData = []

  localData["facilities-info"] = Facilities_Info
  localData["health"] = Health
  localData["subsidy"] = Subsidy
  localData["welfare"] = Welfare
  localData["facility"] = Facility
  localData["news"] = News

  return { type: "storeDataOnLocal", payload: localData }
}
