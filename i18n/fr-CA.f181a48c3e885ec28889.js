webpackJsonp([2],{0:function(e,r,t){!function(a,n){"object"==typeof r?e.exports=n(t(5),t(7),t(48),t(46),t(47),t(49),t(50)):n(a.Globalize)}(this,function(e){var r=(e._validateParameterTypeNumber,e._validateParameterPresence,e._numberRound),t=(e._numberFormat,e._numberFormatterFn),a=e._pluralGeneratorFn,n=(e._validateParameterTypeMessageVariables,e._messageFormat),o=e._messageFormatterFn,i=(e._currencyNameFormat,e._currencyFormatterFn),u=(e._validateParameterTypeDate,e._dateFormat,e._dateFormatterFn),m=e._relativeTimeFormatterFn,l=e._unitFormatterFn;return e.b222077671=t(["",,1,0,5,,,,3,,"","#,##0.###","-#,##0.###","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a1986448926=t(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1016131142=t(["",,1,,,,,,3,," %","#,##0 %","-#,##0 % %","-"," %",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a366169688=t(["",,1,,,,,,,,"","0","-0","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1533310852=t(["",,2,,,,,,,,"","00","-00","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b1682994832=t(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","(#,##0.00 '£' '£')","("," '£')",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a1010181416=t(["",,1,2,3,,,,3,,"","#,##0.###","-#,##0.###","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a1994017593=t(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","-#,##0.00 '£' '£'","-"," '£'",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b90906614=t(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","-#,##0.00 '£' '£'","-"," '£'",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.b873475114=t(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",r("floor"),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a645093141=t(["",,1,2,2,,,0,3,,"","#,##0.00","-#,##0.00","-","",r(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),e.a257392303=a(function(e){return 1==e?"one":"other"}),e.b979410512=a(function(e){return e>=0&&2>e?"one":"other"}),e.a544044291=o(function(e,r,t){return function(a){return r(a.count,0,t["fr-CA"],{0:function(){return"Vous avez pas d'autres tâches"},1:function(){return"Vous avez une tâche restante"},other:function(){return"Vous avez "+e(a.count)+" tâches restantes"}})+"."}}(n.number,n.plural,{"fr-CA":e("fr-CA").pluralGenerator()}),e("fr-CA").pluralGenerator({})),e.b1860249130=o(function(){return function(e){return"Code Postal"}}(),e("fr-CA").pluralGenerator({})),e.b1438137870=o(function(){return function(e){return"Région"}}(),e("fr-CA").pluralGenerator({})),e.b1159671186=o(function(){return function(e){return"Province"}}(),e("fr-CA").pluralGenerator({})),e.a592108549=i(e("fr-CA").numberFormatter({raw:"#,##0.00"}),e("fr-CA").pluralGenerator({}),{currency:"GBP",pattern:"#,##0.00",unitPatterns:{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},displayNames:{displayName:"livre sterling","displayName-count-one":"livre sterling","displayName-count-other":"livres sterling"}}),e.b188000925=i(e("fr-CA").numberFormatter({raw:"#,##0.00"}),e("fr-CA").pluralGenerator({}),{currency:"GBP",pattern:"#,##0.00",unitPatterns:{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"}}),e.a185601130=i(e("fr-CA").numberFormatter({rounf:"ceil",raw:"#,##0.00 '£'"})),e.a204004489=i(e("fr-CA").numberFormatter({raw:"#,##0.00 '£'"})),e.a167275835=i(e("fr-CA").numberFormatter({raw:"#,##0.00 '£';(#,##0.00 '£')"})),e.b186300035=u({1:e("fr-CA").numberFormatter({raw:"0"}),2:e("fr-CA").numberFormatter({raw:"00"})},{pattern:"d MMM y HH:mm:ss",timeSeparator:":",months:{M:{3:{1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."}}}}),e.a1509592399=u({2:e("fr-CA").numberFormatter({raw:"00"})},{pattern:"HH:mm:ss",timeSeparator:":"}),e.b1626218320=u({1:e("fr-CA").numberFormatter({raw:"0"})},{pattern:"d MMM y",timeSeparator:":",months:{M:{3:{1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."}}}}),e.a874126043=u({1:e("fr-CA").numberFormatter({raw:"0"})},{pattern:"d MMM y G",timeSeparator:":",months:{M:{3:{1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."}}},eras:{0:"av. J.-C.",1:"ap. J.-C.","0-alt-variant":"AEC","1-alt-variant":"EC"}}),e.a505140400=u({1:e("fr-CA").numberFormatter({raw:"0"}),2:e("fr-CA").numberFormatter({raw:"00"})},{pattern:"y-MM-dd",timeSeparator:":"}),e.b1055281153=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"Dans {0} an","relativeTimePattern-count-other":"Dans {0} ans"},"relativeTime-type-past":{"relativeTimePattern-count-one":"Il y a {0} an","relativeTimePattern-count-other":"Il y a {0} ans"},"relative-type--1":"l’année dernière","relative-type-0":"cette année","relative-type-1":"l’année prochaine"}),e.a1674923880=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} seconde","relativeTimePattern-count-other":"dans {0} secondes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} seconde","relativeTimePattern-count-other":"il y a {0} secondes"},"relative-type-0":"maintenant"}),e.b990842424=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"Dans {0} minute","relativeTimePattern-count-other":"Dans {0} minutes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"Il y a {0} minute","relativeTimePattern-count-other":"Il y a {0} minutes"}}),e.a425112248=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} heure","relativeTimePattern-count-other":"dans {0} heures"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} heure","relativeTimePattern-count-other":"il y a {0} heures"}}),e.b360586294=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} jour","relativeTimePattern-count-other":"dans {0} jours"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} jour","relativeTimePattern-count-other":"il y a {0} jours"},"relative-type--2":"avant-hier","relative-type--1":"hier","relative-type-0":"aujourd’hui","relative-type-1":"demain","relative-type-2":"après-demain"}),e.b531269082=m(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} mois","relativeTimePattern-count-other":"dans {0} mois"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} mois","relativeTimePattern-count-other":"il y a {0} mois"},"relative-type--1":"le mois dernier","relative-type-0":"ce mois-ci","relative-type-1":"le mois prochain"}),e.a1462356568=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0} par {1}",unitProperties:{displayName:"kilomètres à l’heure",one:"{0} kilomètre par heure",other:"{0} kilomètres par heure"}}),e.b390681923=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0} par {1}",unitProperties:{displayName:"secondes",one:"{0} seconde",other:"{0} secondes",perUnitPattern:"{0} à la seconde"}}),e.a826623846=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"s",one:"{0}s",other:"{0}s",perUnitPattern:"{0}/s"}}),e.b405215300=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0} par {1}",unitProperties:{displayName:"mille",one:"{0} mille",other:"{0} milles"}}),e.a1770868102=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"mi",one:"{0} mi",other:"{0} mi"}}),e.b1439724409=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"mi",one:"{0}mi",other:"{0}mi"}}),e.b1619707193=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"s",one:"{0} s",other:"{0} s",perUnitPattern:"{0}/s"}}),e.a1113550626=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"km/h",one:"{0} km/h",other:"{0} km/h"}}),e.b341729685=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"km/h",one:"{0}km/h",other:"{0}km/h"}}),e.b697330057=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0} par {1}",unitProperties:{displayName:"mégaoctets",one:"{0} mégaoctet",other:"{0} mégaoctets"}}),e.b551413503=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"Mo",one:"{0} Mo",other:"{0} Mo"}}),e.b416010132=l(e("fr-CA").numberFormatter({}),e("fr-CA").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"Mo",one:"{0} Mo",other:"{0} Mo"}}),e.locale("fr-CA"),e})},60:function(e,r,t){e.exports=t(5)},61:function(e,r,t){e.exports=t(5)},62:function(e,r,t){e.exports=t(5)},63:function(e,r,t){e.exports=t(5)},64:function(e,r,t){e.exports=t(5)},65:function(e,r,t){e.exports=t(5)},66:function(e,r,t){e.exports=t(5)}});