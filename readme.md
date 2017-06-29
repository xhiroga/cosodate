# はじめに...

このアプリは、みたか子育てねっとの非公式版iPhone/Androidアプリです。


# Open Data Format
情報ごとに以下のカテゴリ分類あり
News, Event, Facility, Support
また、外部リンクのみの場合はクリック後即アプリ内ブラウザに遷移する
本当はtypeは英語の方がいいと思うけどまだやらない

子要素としての表示の仕方...カテゴリ単位で統一
開いた時の画面内の表示の形式...typeで統一(typeが自由設定のfacilityを除く)

Category:News
{
  "title": "三鷹ちびっ子農園　参加者募集",
  "author": "みたか子育てねっと",
  "date": "20170310",
  "text": "平成29年度の参加家族を募集します  ちびっ子農園では、種まきから収穫まで、1年を通していろいろな野菜を共同作業で育てます。    対象と定員  市内の3歳から中学生までのお子さんとその保護者60家族。    期間  平成29年4月から1年間、毎週日曜日午前9時から正午まで。    場所  三鷹ちびっ子  農園新川三丁目6番1号  駐車場はありません。徒歩や自転車にて登園してください。    詳細は三鷹市ホームページ",
  contact: "",
  "link": "http://www.city.mitaka.tokyo.jp/c_news/064/064574.html"
}


Category:Event
{将来的に新設する。現在はイベント情報をニュースカテゴリで配信 }


施設(facility)とサポート(support)カテゴリの情報は、以下のプロパティを持ちます。
Category:Facility
{
  "name": "あけぼの保育園",
  "type": "保育施設",
  "location": "三鷹市上連雀4-11-21",
  "tel": "0422-40-7555",
  "open": "7:30",
  "close": "19:30",
  "text": "保育所方針    （保育目標）  ・心身ともに健康な子ども  ・意欲的に遊びこめる子ども  ・自分で考え行動する子ども  ・自分も友だちも大切にする子ども",
  "link": ""
  "image-url":""
  stageの各値
  purposeの各値
}
type...
  "保育施設","幼稚園","学童保育所","その他の子育て施設"
* 本当は保育施設のサブカテゴリとして認可保育園、認証保育所、地域型保育施設、認定こども園があるらしい。まだデモ版なので実装しない。


Category:Subsidy(助成手当)
{
  "name": "ひとり親家庭医療費助成制度",
  "type":"助成手当"
  "recepient"(対象となる方): "受給対象について  18歳に到達後、最初の3月31日までの児童（中程度以上の障がいのある児童は20歳未満まで）を扶養している方で、次の受給資格要件を満たしている方が対象となります。 略",
  "amount-period":"助成額  健康保険が適用される医療費の自己負担分である3割のうち、次のとおり助成します。  【住民税非課税世帯】  健康保険が適用される医療費の自己負担分が無料になります。 略",
  "apply":"申請方法について  申請書及び必要書類を市役所4階子育て支援課43番窓口に提出してください。  略",
  "procedure":"認定後の手続きについて  次の事柄が生じた場合、届出をしてください。 略",
  "contact":"三鷹市子ども政策部子育て支援課  電話：0422-45-1151　内線：2751～2755  時間：8:30～17:00（土・日・祝日・年末年始を除く）",
  "link": ""
  stageの各値
  purposeの各値
}
type...
  "助成手当"


Category:Support("母子の健康","子育て支援・福祉サービス")
{
  "name": "妊婦さんを応援！「ゆりかご面接」",
  "link": "http://www.city.mitaka.tokyo.jp/c_service/056/056266.html",
  stageの各値
  purposeの各値
}
type...
  "母子の健康","子育て支援・福祉サービス"
  health, welfare


(facility, supportに共通)
stage...
  妊娠、0歳、1歳、2歳、3歳、4歳、5歳、小学生以上
  (アプリ内では次の通り変換...p,0,1,2,3,4,5,6)
purpose...
  "妊娠したら","出産したら","保育サービスを探すときに",
  "幼稚園へ入園するときに","小学校に上がるときに",
  "転入したら","障がいのある方",
  "子どもが病気になったら","経済的支援"



# デザイン
### base
Theme Color:#C43B30

### Special Thanks!
みたか子育てねっと:  http://www.kosodate.mitaka.ne.jp/
Icon made by SimpleIcon from www.flaticon.com
