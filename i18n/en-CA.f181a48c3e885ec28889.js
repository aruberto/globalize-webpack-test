webpackJsonp([3],{0:function(e,t,r){!function(n,a){"object"==typeof t?e.exports=a(r(5),r(7),r(48),r(46),r(47),r(49),r(50)):a(n.Globalize)}(this,function(e){var t=(e._validateParameterTypeNumber,e._validateParameterPresence,e._numberRound),r=(e._numberFormat,e._numberFormatterFn),n=e._pluralGeneratorFn,a=(e._validateParameterTypeMessageVariables,e._messageFormat),o=e._messageFormatterFn,i=(e._currencyNameFormat,e._currencyFormatterFn),m=(e._validateParameterTypeDate,e._dateFormat,e._dateFormatterFn),u=e._relativeTimeFormatterFn,p=e._unitFormatterFn;return e.b1102796554=r(["",,1,0,5,,,,3,,"","#,##0.###","-#,##0.###","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a1117629345=r(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1328248169=r(["",,1,,,,,,3,,"%","#,##0%","-#,##0%%","-","%",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a244970549=r(["",,1,,,,,,,,"","0","-0","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b995516865=r(["",,2,,,,,,,,"","00","-00","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b525359377=r(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","('£''£'#,##0.00)","('£'",")",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a129462533=r(["",,1,2,3,,,,3,,"","#,##0.###","-#,##0.###","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a51291562=r(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","-'£''£'#,##0.00","-'£'","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b789140589=r(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","-'£''£'#,##0.00","-'£'","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1490558989=r(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",t("floor"),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1304637800=r(["",,1,2,2,,,0,3,,"","#,##0.00","-#,##0.00","-","",t(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1692338638=n(function(e){var t=String(e).split("."),r=Number(t[0])==e,n=r&&t[0].slice(-1),a=r&&t[0].slice(-2);return 1==n&&11!=a?"one":2==n&&12!=a?"two":3==n&&13!=a?"few":"other"}),e.b1848230093=n(function(e){var t=String(e).split("."),r=!t[1];return 1==e&&r?"one":"other"}),e.a321116422=o(function(e,t,r){return function(n){return t(n.count,0,r["en-CA"],{0:function(){return"You have no remaining tasks"},1:function(){return"You have one remaining task"},other:function(){return"You have "+e(n.count)+" remaining tasks"}})+"."}}(a.number,a.plural,{"en-CA":e("en-CA").pluralGenerator()}),e("en-CA").pluralGenerator({})),e.b1322455143=o(function(){return function(e){return"Postal Code"}}(),e("en-CA").pluralGenerator({})),e.b923455179=o(function(){return function(e){return"Region"}}(),e("en-CA").pluralGenerator({})),e.b470844175=o(function(){return function(e){return"Province"}}(),e("en-CA").pluralGenerator({})),e.a917953032=i(e("en-CA").numberFormatter({raw:"#,##0.00"}),e("en-CA").pluralGenerator({}),{currency:"GBP",pattern:"#,##0.00",unitPatterns:{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},displayNames:{displayName:"British Pound","displayName-count-one":"British pound","displayName-count-other":"British pounds"}}),e.a137843558=i(e("en-CA").numberFormatter({raw:"#,##0.00"}),e("en-CA").pluralGenerator({}),{currency:"GBP",pattern:"#,##0.00",unitPatterns:{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"}}),e.a511445613=i(e("en-CA").numberFormatter({rounf:"ceil",raw:"'£'#,##0.00"})),e.a718687180=i(e("en-CA").numberFormatter({raw:"'£'#,##0.00"})),e.b1365205762=i(e("en-CA").numberFormatter({raw:"'£'#,##0.00;('£'#,##0.00)"})),e.a516947738=m({1:e("en-CA").numberFormatter({raw:"0"}),2:e("en-CA").numberFormatter({raw:"00"})},{pattern:"MMM d, y, h:mm:ss a",timeSeparator:":",months:{M:{3:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}}},dayPeriods:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"in the morning",afternoon1:"in the afternoon",evening1:"in the evening",night1:"at night"}}),e.a892508524=m({1:e("en-CA").numberFormatter({raw:"0"}),2:e("en-CA").numberFormatter({raw:"00"})},{pattern:"h:mm:ss a",timeSeparator:":",dayPeriods:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"in the morning",afternoon1:"in the afternoon",evening1:"in the evening",night1:"at night"}}),e.a2051665101=m({1:e("en-CA").numberFormatter({raw:"0"})},{pattern:"MMM d, y",timeSeparator:":",months:{M:{3:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}}}}),e.a1577373816=m({1:e("en-CA").numberFormatter({raw:"0"})},{pattern:"MMM d, y G",timeSeparator:":",months:{M:{3:{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}}},eras:{0:"BC",1:"AD","0-alt-variant":"BCE","1-alt-variant":"CE"}}),e.b1444590541=m({1:e("en-CA").numberFormatter({raw:"0"}),2:e("en-CA").numberFormatter({raw:"00"})},{pattern:"y-MM-dd",timeSeparator:":"}),e.a2014980380=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} year","relativeTimePattern-count-other":"in {0} years"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} year ago","relativeTimePattern-count-other":"{0} years ago"},"relative-type--1":"last year","relative-type-0":"this year","relative-type-1":"next year"}),e.a1553724741=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} second","relativeTimePattern-count-other":"in {0} seconds"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} second ago","relativeTimePattern-count-other":"{0} seconds ago"},"relative-type-0":"now"}),e.b1112041563=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} minute","relativeTimePattern-count-other":"in {0} minutes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} minute ago","relativeTimePattern-count-other":"{0} minutes ago"}}),e.b799593515=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} hour","relativeTimePattern-count-other":"in {0} hours"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} hour ago","relativeTimePattern-count-other":"{0} hours ago"}}),e.a154096397=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} day","relativeTimePattern-count-other":"in {0} days"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} day ago","relativeTimePattern-count-other":"{0} days ago"},"relative-type--1":"yesterday","relative-type-0":"today","relative-type-1":"tomorrow"}),e.a157557929=u(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} month","relativeTimePattern-count-other":"in {0} months"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} month ago","relativeTimePattern-count-other":"{0} months ago"},"relative-type--1":"last month","relative-type-0":"this month","relative-type-1":"next month"}),e.b1321366347=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0} per {1}",unitProperties:{displayName:"kilometres per hour",one:"{0} kilometre per hour",other:"{0} kilometres per hour"}}),e.b511881062=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0} per {1}",unitProperties:{displayName:"seconds",one:"{0} second",other:"{0} seconds",perUnitPattern:"{0} per second"}}),e.b1834185751=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"sec",one:"{0}s",other:"{0}s",perUnitPattern:"{0}/s"}}),e.b1629921063=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0} per {1}",unitProperties:{displayName:"miles",one:"{0} mile",other:"{0} miles"}}),e.b1012854813=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"miles",one:"{0} mi",other:"{0} mi"}}),e.b1835788854=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"mi",one:"{0}mi",other:"{0}mi"}}),e.b1012803100=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"secs",one:"{0} sec",other:"{0} secs",perUnitPattern:"{0}/s"}}),e.b361936193=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"km/hour",one:"{0} kph",other:"{0} kph"}}),e.a1162819182=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"km/hr",one:"{0}kph",other:"{0}kph"}}),e.b1205585644=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0} per {1}",unitProperties:{displayName:"megabytes",one:"{0} megabyte",other:"{0} megabytes"}}),e.b1432132386=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"MByte",one:"{0} MB",other:"{0} MB"}}),e.b1948491729=p(e("en-CA").numberFormatter({}),e("en-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"MByte",one:"{0}MB",other:"{0}MB"}}),e.locale("en-CA"),e})},60:function(e,t,r){e.exports=r(5)},61:function(e,t,r){e.exports=r(5)},62:function(e,t,r){e.exports=r(5)},63:function(e,t,r){e.exports=r(5)},64:function(e,t,r){e.exports=r(5)},65:function(e,t,r){e.exports=r(5)},66:function(e,t,r){e.exports=r(5)}});