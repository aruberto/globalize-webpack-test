webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {
(function( root, factory ) {

	// UMD returnExports
	if ( false ) {

		// AMD
		define( ["globalize-runtime/number","globalize-runtime/plural","globalize-runtime/message","globalize-runtime/currency","globalize-runtime/date","globalize-runtime/relative-time","globalize-runtime/unit"], factory );
	} else if ( typeof exports === "object" ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__(5), __webpack_require__(7), __webpack_require__(48), __webpack_require__(46), __webpack_require__(47), __webpack_require__(49), __webpack_require__(50) );
	} else {

		// Global
		factory( root.Globalize );
	}
}( this, function( Globalize ) {

var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var numberRound = Globalize._numberRound;
var numberFormat = Globalize._numberFormat;
var numberFormatterFn = Globalize._numberFormatterFn;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;
var currencyNameFormat = Globalize._currencyNameFormat;
var currencyFormatterFn = Globalize._currencyFormatterFn;
var validateParameterTypeDate = Globalize._validateParameterTypeDate;
var dateFormat = Globalize._dateFormat;
var dateFormatterFn = Globalize._dateFormatterFn;
var relativeTimeFormatterFn = Globalize._relativeTimeFormatterFn;
var unitFormatterFn = Globalize._unitFormatterFn;

Globalize.a366169688 = numberFormatterFn(["",,1,,,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1986448926 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1010181416 = numberFormatterFn(["",,1,2,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1016131142 = numberFormatterFn(["",,1,,,,,,3,," %","#,##0 %","-#,##0 % %","-"," %",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b222077671 = numberFormatterFn(["",,1,0,5,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b873475114 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound("floor"),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1533310852 = numberFormatterFn(["",,2,,,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1994017593 = numberFormatterFn(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","-#,##0.00 '£' '£'","-"," '£'",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a645093141 = numberFormatterFn(["",,1,2,2,,,0,3,,"","#,##0.00","-#,##0.00","-","",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1682994832 = numberFormatterFn(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","(#,##0.00 '£' '£')","("," '£')",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b90906614 = numberFormatterFn(["",,1,2,2,,,0,3,," '£'","#,##0.00 '£'","-#,##0.00 '£' '£'","-"," '£'",numberRound(),"∞","NaN",{".":",",",":" ","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b979410512 = pluralGeneratorFn(function(n) {
  return (n >= 0 && n < 2) ? 'one' : 'other';
});
Globalize.a257392303 = pluralGeneratorFn(function(n) {
  return (n == 1) ? 'one' : 'other';
  ;
});
Globalize.b1159671186 = messageFormatterFn((function(  ) {
  return function (d) { return "Province"; }
})(), Globalize("fr-CA").pluralGenerator({}));
Globalize.b1438137870 = messageFormatterFn((function(  ) {
  return function (d) { return "Région"; }
})(), Globalize("fr-CA").pluralGenerator({}));
Globalize.b1860249130 = messageFormatterFn((function(  ) {
  return function (d) { return "Code Postal"; }
})(), Globalize("fr-CA").pluralGenerator({}));
Globalize.a544044291 = messageFormatterFn((function( number, plural, pluralFuncs ) {
  return function (d) { return plural(d.count, 0, pluralFuncs["fr-CA"], { 0: function() { return "Vous avez pas d'autres tâches";}, 1: function() { return "Vous avez une tâche restante";}, other: function() { return "Vous avez " + number(d.count) + " tâches restantes";} }) + "."; }
})(messageFormat.number, messageFormat.plural, {"fr-CA": Globalize("fr-CA").pluralGenerator()}), Globalize("fr-CA").pluralGenerator({}));
Globalize.a592108549 = currencyFormatterFn(Globalize("fr-CA").numberFormatter({"raw":"#,##0.00"}), Globalize("fr-CA").pluralGenerator({}), {"currency":"GBP","pattern":"#,##0.00","unitPatterns":{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"displayNames":{"displayName":"livre sterling","displayName-count-one":"livre sterling","displayName-count-other":"livres sterling"}});
Globalize.b188000925 = currencyFormatterFn(Globalize("fr-CA").numberFormatter({"raw":"#,##0.00"}), Globalize("fr-CA").pluralGenerator({}), {"currency":"GBP","pattern":"#,##0.00","unitPatterns":{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"}});
Globalize.a185601130 = currencyFormatterFn(Globalize("fr-CA").numberFormatter({"rounf":"ceil","raw":"#,##0.00 '£'"}));
Globalize.a167275835 = currencyFormatterFn(Globalize("fr-CA").numberFormatter({"raw":"#,##0.00 '£';(#,##0.00 '£')"}));
Globalize.a204004489 = currencyFormatterFn(Globalize("fr-CA").numberFormatter({"raw":"#,##0.00 '£'"}));
Globalize.a505140400 = dateFormatterFn({"1":Globalize("fr-CA").numberFormatter({"raw":"0"}),"2":Globalize("fr-CA").numberFormatter({"raw":"00"})}, {"pattern":"y-MM-dd","timeSeparator":":"});
Globalize.b186300035 = dateFormatterFn({"1":Globalize("fr-CA").numberFormatter({"raw":"0"}),"2":Globalize("fr-CA").numberFormatter({"raw":"00"})}, {"pattern":"d MMM y HH:mm:ss","timeSeparator":":","months":{"M":{"3":{"1":"janv.","2":"févr.","3":"mars","4":"avr.","5":"mai","6":"juin","7":"juil.","8":"août","9":"sept.","10":"oct.","11":"nov.","12":"déc."}}}});
Globalize.b1626218320 = dateFormatterFn({"1":Globalize("fr-CA").numberFormatter({"raw":"0"})}, {"pattern":"d MMM y","timeSeparator":":","months":{"M":{"3":{"1":"janv.","2":"févr.","3":"mars","4":"avr.","5":"mai","6":"juin","7":"juil.","8":"août","9":"sept.","10":"oct.","11":"nov.","12":"déc."}}}});
Globalize.a1509592399 = dateFormatterFn({"2":Globalize("fr-CA").numberFormatter({"raw":"00"})}, {"pattern":"HH:mm:ss","timeSeparator":":"});
Globalize.a874126043 = dateFormatterFn({"1":Globalize("fr-CA").numberFormatter({"raw":"0"})}, {"pattern":"d MMM y G","timeSeparator":":","months":{"M":{"3":{"1":"janv.","2":"févr.","3":"mars","4":"avr.","5":"mai","6":"juin","7":"juil.","8":"août","9":"sept.","10":"oct.","11":"nov.","12":"déc."}}},"eras":{"0":"av. J.-C.","1":"ap. J.-C.","0-alt-variant":"AEC","1-alt-variant":"EC"}});
Globalize.a1674923880 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} seconde","relativeTimePattern-count-other":"dans {0} secondes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} seconde","relativeTimePattern-count-other":"il y a {0} secondes"},"relative-type-0":"maintenant"});
Globalize.b1055281153 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"Dans {0} an","relativeTimePattern-count-other":"Dans {0} ans"},"relativeTime-type-past":{"relativeTimePattern-count-one":"Il y a {0} an","relativeTimePattern-count-other":"Il y a {0} ans"},"relative-type--1":"l’année dernière","relative-type-0":"cette année","relative-type-1":"l’année prochaine"});
Globalize.b531269082 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} mois","relativeTimePattern-count-other":"dans {0} mois"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} mois","relativeTimePattern-count-other":"il y a {0} mois"},"relative-type--1":"le mois dernier","relative-type-0":"ce mois-ci","relative-type-1":"le mois prochain"});
Globalize.b360586294 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} jour","relativeTimePattern-count-other":"dans {0} jours"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} jour","relativeTimePattern-count-other":"il y a {0} jours"},"relative-type--2":"avant-hier","relative-type--1":"hier","relative-type-0":"aujourd’hui","relative-type-1":"demain","relative-type-2":"après-demain"});
Globalize.a425112248 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"dans {0} heure","relativeTimePattern-count-other":"dans {0} heures"},"relativeTime-type-past":{"relativeTimePattern-count-one":"il y a {0} heure","relativeTimePattern-count-other":"il y a {0} heures"}});
Globalize.b990842424 = relativeTimeFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"Dans {0} minute","relativeTimePattern-count-other":"Dans {0} minutes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"Il y a {0} minute","relativeTimePattern-count-other":"Il y a {0} minutes"}});
Globalize.a1770868102 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"mi","one":"{0} mi","other":"{0} mi"}});
Globalize.b551413503 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"Mo","one":"{0} Mo","other":"{0} Mo"}});
Globalize.b697330057 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} par {1}","unitProperties":{"displayName":"mégaoctets","one":"{0} mégaoctet","other":"{0} mégaoctets"}});
Globalize.b341729685 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"km/h","one":"{0}km/h","other":"{0}km/h"}});
Globalize.a1113550626 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"km/h","one":"{0} km/h","other":"{0} km/h"}});
Globalize.b1439724409 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"mi","one":"{0}mi","other":"{0}mi"}});
Globalize.b416010132 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"Mo","one":"{0} Mo","other":"{0} Mo"}});
Globalize.b405215300 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} par {1}","unitProperties":{"displayName":"mille","one":"{0} mille","other":"{0} milles"}});
Globalize.a826623846 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"s","one":"{0}s","other":"{0}s","perUnitPattern":"{0}/s"}});
Globalize.b1619707193 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"s","one":"{0} s","other":"{0} s","perUnitPattern":"{0}/s"}});
Globalize.b390681923 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} par {1}","unitProperties":{"displayName":"secondes","one":"{0} seconde","other":"{0} secondes","perUnitPattern":"{0} à la seconde"}});
Globalize.a1462356568 = unitFormatterFn(Globalize("fr-CA").numberFormatter({}), Globalize("fr-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} par {1}","unitProperties":{"displayName":"kilomètres à l’heure","one":"{0} kilomètre par heure","other":"{0} kilomètres par heure"}});

Globalize.locale("fr-CA"); return Globalize;

}));

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {
module.exports = __webpack_require__(5);
/***/ }

});