webpackJsonp([3],{

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

Globalize.a1117629345 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1304637800 = numberFormatterFn(["",,1,2,2,,,0,3,,"","#,##0.00","-#,##0.00","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a129462533 = numberFormatterFn(["",,1,2,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1328248169 = numberFormatterFn(["",,1,,,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a244970549 = numberFormatterFn(["",,1,,,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b995516865 = numberFormatterFn(["",,2,,,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1490558989 = numberFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound("floor"),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1102796554 = numberFormatterFn(["",,1,0,5,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a51291562 = numberFormatterFn(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","-'£''£'#,##0.00","-'£'","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b789140589 = numberFormatterFn(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","-'£''£'#,##0.00","-'£'","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b525359377 = numberFormatterFn(["'£'",,1,2,2,,,0,3,,"","'£'#,##0.00","('£''£'#,##0.00)","('£'",")",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1848230093 = pluralGeneratorFn(function(n) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b1692338638 = pluralGeneratorFn(function(n) {
  var s = String(n).split('.'), t0 = Number(s[0]) == n,
      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
  return (n10 == 1 && n100 != 11) ? 'one'
      : (n10 == 2 && n100 != 12) ? 'two'
      : (n10 == 3 && n100 != 13) ? 'few'
      : 'other';
  ;
});
Globalize.b470844175 = messageFormatterFn((function(  ) {
  return function (d) { return "Province"; }
})(), Globalize("en-CA").pluralGenerator({}));
Globalize.a321116422 = messageFormatterFn((function( number, plural, pluralFuncs ) {
  return function (d) { return plural(d.count, 0, pluralFuncs["en-CA"], { 0: function() { return "You have no remaining tasks";}, 1: function() { return "You have one remaining task";}, other: function() { return "You have " + number(d.count) + " remaining tasks";} }) + "."; }
})(messageFormat.number, messageFormat.plural, {"en-CA": Globalize("en-CA").pluralGenerator()}), Globalize("en-CA").pluralGenerator({}));
Globalize.b1322455143 = messageFormatterFn((function(  ) {
  return function (d) { return "Postal Code"; }
})(), Globalize("en-CA").pluralGenerator({}));
Globalize.b923455179 = messageFormatterFn((function(  ) {
  return function (d) { return "Region"; }
})(), Globalize("en-CA").pluralGenerator({}));
Globalize.a917953032 = currencyFormatterFn(Globalize("en-CA").numberFormatter({"raw":"#,##0.00"}), Globalize("en-CA").pluralGenerator({}), {"currency":"GBP","pattern":"#,##0.00","unitPatterns":{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"},"displayNames":{"displayName":"British Pound","displayName-count-one":"British pound","displayName-count-other":"British pounds"}});
Globalize.a137843558 = currencyFormatterFn(Globalize("en-CA").numberFormatter({"raw":"#,##0.00"}), Globalize("en-CA").pluralGenerator({}), {"currency":"GBP","pattern":"#,##0.00","unitPatterns":{"unitPattern-count-one":"{0} {1}","unitPattern-count-other":"{0} {1}"}});
Globalize.a511445613 = currencyFormatterFn(Globalize("en-CA").numberFormatter({"rounf":"ceil","raw":"'£'#,##0.00"}));
Globalize.a718687180 = currencyFormatterFn(Globalize("en-CA").numberFormatter({"raw":"'£'#,##0.00"}));
Globalize.b1365205762 = currencyFormatterFn(Globalize("en-CA").numberFormatter({"raw":"'£'#,##0.00;('£'#,##0.00)"}));
Globalize.a516947738 = dateFormatterFn({"1":Globalize("en-CA").numberFormatter({"raw":"0"}),"2":Globalize("en-CA").numberFormatter({"raw":"00"})}, {"pattern":"MMM d, y, h:mm:ss a","timeSeparator":":","months":{"M":{"3":{"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"}}},"dayPeriods":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"}});
Globalize.a892508524 = dateFormatterFn({"1":Globalize("en-CA").numberFormatter({"raw":"0"}),"2":Globalize("en-CA").numberFormatter({"raw":"00"})}, {"pattern":"h:mm:ss a","timeSeparator":":","dayPeriods":{"midnight":"midnight","am":"AM","am-alt-variant":"am","noon":"noon","pm":"PM","pm-alt-variant":"pm","morning1":"in the morning","afternoon1":"in the afternoon","evening1":"in the evening","night1":"at night"}});
Globalize.b1444590541 = dateFormatterFn({"1":Globalize("en-CA").numberFormatter({"raw":"0"}),"2":Globalize("en-CA").numberFormatter({"raw":"00"})}, {"pattern":"y-MM-dd","timeSeparator":":"});
Globalize.a1577373816 = dateFormatterFn({"1":Globalize("en-CA").numberFormatter({"raw":"0"})}, {"pattern":"MMM d, y G","timeSeparator":":","months":{"M":{"3":{"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"}}},"eras":{"0":"BC","1":"AD","0-alt-variant":"BCE","1-alt-variant":"CE"}});
Globalize.a2051665101 = dateFormatterFn({"1":Globalize("en-CA").numberFormatter({"raw":"0"})}, {"pattern":"MMM d, y","timeSeparator":":","months":{"M":{"3":{"1":"Jan","2":"Feb","3":"Mar","4":"Apr","5":"May","6":"Jun","7":"Jul","8":"Aug","9":"Sep","10":"Oct","11":"Nov","12":"Dec"}}}});
Globalize.a2014980380 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} year","relativeTimePattern-count-other":"in {0} years"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} year ago","relativeTimePattern-count-other":"{0} years ago"},"relative-type--1":"last year","relative-type-0":"this year","relative-type-1":"next year"});
Globalize.a1553724741 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} second","relativeTimePattern-count-other":"in {0} seconds"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} second ago","relativeTimePattern-count-other":"{0} seconds ago"},"relative-type-0":"now"});
Globalize.b1112041563 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} minute","relativeTimePattern-count-other":"in {0} minutes"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} minute ago","relativeTimePattern-count-other":"{0} minutes ago"}});
Globalize.b799593515 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} hour","relativeTimePattern-count-other":"in {0} hours"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} hour ago","relativeTimePattern-count-other":"{0} hours ago"}});
Globalize.a154096397 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} day","relativeTimePattern-count-other":"in {0} days"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} day ago","relativeTimePattern-count-other":"{0} days ago"},"relative-type--1":"yesterday","relative-type-0":"today","relative-type-1":"tomorrow"});
Globalize.a157557929 = relativeTimeFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-one":"in {0} month","relativeTimePattern-count-other":"in {0} months"},"relativeTime-type-past":{"relativeTimePattern-count-one":"{0} month ago","relativeTimePattern-count-other":"{0} months ago"},"relative-type--1":"last month","relative-type-0":"this month","relative-type-1":"next month"});
Globalize.b1432132386 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"MByte","one":"{0} MB","other":"{0} MB"}});
Globalize.b1012854813 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"miles","one":"{0} mi","other":"{0} mi"}});
Globalize.b1321366347 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} per {1}","unitProperties":{"displayName":"kilometres per hour","one":"{0} kilometre per hour","other":"{0} kilometres per hour"}});
Globalize.b361936193 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"km/hour","one":"{0} kph","other":"{0} kph"}});
Globalize.a1162819182 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"km/hr","one":"{0}kph","other":"{0}kph"}});
Globalize.b1205585644 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} per {1}","unitProperties":{"displayName":"megabytes","one":"{0} megabyte","other":"{0} megabytes"}});
Globalize.b1835788854 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"mi","one":"{0}mi","other":"{0}mi"}});
Globalize.b1948491729 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"MByte","one":"{0}MB","other":"{0}MB"}});
Globalize.b1629921063 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} per {1}","unitProperties":{"displayName":"miles","one":"{0} mile","other":"{0} miles"}});
Globalize.b1012803100 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"secs","one":"{0} sec","other":"{0} secs","perUnitPattern":"{0}/s"}});
Globalize.b511881062 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0} per {1}","unitProperties":{"displayName":"seconds","one":"{0} second","other":"{0} seconds","perUnitPattern":"{0} per second"}});
Globalize.b1834185751 = unitFormatterFn(Globalize("en-CA").numberFormatter({}), Globalize("en-CA").pluralGenerator({}), {"compoundUnitPattern":"{0}/{1}","unitProperties":{"displayName":"sec","one":"{0}s","other":"{0}s","perUnitPattern":"{0}/s"}});

Globalize.locale("en-CA"); return Globalize;

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