/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"main","2":"globalize-compiled-data-fr-CA","3":"globalize-compiled-data-en-CA","4":"globalize-compiled-data-en"}[chunkId]||chunkId) + "-" + "4f0bb1dd5bd95db24f44" + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/globalize-webpack-test";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(48);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(49);
	module.exports = __webpack_require__(50);


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory( __webpack_require__( 25 ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var createError = Globalize._createError,
		regexpEscape = Globalize._regexpEscape,
		runtimeKey = Globalize._runtimeKey,
		stringPad = Globalize._stringPad,
		validateParameterType = Globalize._validateParameterType,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	var createErrorUnsupportedFeature = function( feature ) {
		return createError( "E_UNSUPPORTED", "Unsupported {feature}.", {
			feature: feature
		});
	};




	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	/**
	 * goupingSeparator( number, primaryGroupingSize, secondaryGroupingSize )
	 *
	 * @number [Number].
	 *
	 * @primaryGroupingSize [Number]
	 *
	 * @secondaryGroupingSize [Number]
	 *
	 * Return the formatted number with group separator.
	 */
	var numberFormatGroupingSeparator = function( number, primaryGroupingSize, secondaryGroupingSize ) {
		var index,
			currentGroupingSize = primaryGroupingSize,
			ret = "",
			sep = ",",
			switchToSecondary = secondaryGroupingSize ? true : false;

		number = String( number ).split( "." );
		index = number[ 0 ].length;

		while ( index > currentGroupingSize ) {
			ret = number[ 0 ].slice( index - currentGroupingSize, index ) +
				( ret.length ? sep : "" ) + ret;
			index -= currentGroupingSize;
			if ( switchToSecondary ) {
				currentGroupingSize = secondaryGroupingSize;
				switchToSecondary = false;
			}
		}

		number[ 0 ] = number[ 0 ].slice( 0, index ) + ( ret.length ? sep : "" ) + ret;
		return number.join( "." );
	};




	/**
	 * integerFractionDigits( number, minimumIntegerDigits, minimumFractionDigits,
	 * maximumFractionDigits, round, roundIncrement )
	 *
	 * @number [Number]
	 *
	 * @minimumIntegerDigits [Number]
	 *
	 * @minimumFractionDigits [Number]
	 *
	 * @maximumFractionDigits [Number]
	 *
	 * @round [Function]
	 *
	 * @roundIncrement [Function]
	 *
	 * Return the formatted integer and fraction digits.
	 */
	var numberFormatIntegerFractionDigits = function( number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round,
		roundIncrement ) {

		// Fraction
		if ( maximumFractionDigits ) {

			// Rounding
			if ( roundIncrement ) {
				number = round( number, roundIncrement );

			// Maximum fraction digits
			} else {
				number = round( number, { exponent: -maximumFractionDigits } );
			}

			// Minimum fraction digits
			if ( minimumFractionDigits ) {
				number = String( number ).split( "." );
				number[ 1 ] = stringPad( number[ 1 ] || "", minimumFractionDigits, true );
				number = number.join( "." );
			}
		} else {
			number = round( number );
		}

		number = String( number );

		// Minimum integer digits
		if ( minimumIntegerDigits ) {
			number = number.split( "." );
			number[ 0 ] = stringPad( number[ 0 ], minimumIntegerDigits );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * toPrecision( number, precision, round )
	 *
	 * @number (Number)
	 *
	 * @precision (Number) significant figures precision (not decimal precision).
	 *
	 * @round (Function)
	 *
	 * Return number.toPrecision( precision ) using the given round function.
	 */
	var numberToPrecision = function( number, precision, round ) {
		var roundOrder;

		// Get number at two extra significant figure precision.
		number = number.toPrecision( precision + 2 );

		// Then, round it to the required significant figure precision.
		roundOrder = Math.ceil( Math.log( Math.abs( number ) ) / Math.log( 10 ) );
		roundOrder -= precision;

		return round( number, { exponent: roundOrder } );
	};




	/**
	 * toPrecision( number, minimumSignificantDigits, maximumSignificantDigits, round )
	 *
	 * @number [Number]
	 *
	 * @minimumSignificantDigits [Number]
	 *
	 * @maximumSignificantDigits [Number]
	 *
	 * @round [Function]
	 *
	 * Return the formatted significant digits number.
	 */
	var numberFormatSignificantDigits = function( number, minimumSignificantDigits, maximumSignificantDigits, round ) {
		var atMinimum, atMaximum;

		// Sanity check.
		if ( minimumSignificantDigits > maximumSignificantDigits ) {
			maximumSignificantDigits = minimumSignificantDigits;
		}

		atMinimum = numberToPrecision( number, minimumSignificantDigits, round );
		atMaximum = numberToPrecision( number, maximumSignificantDigits, round );

		// Use atMaximum only if it has more significant digits than atMinimum.
		number = +atMinimum === +atMaximum ? atMinimum : atMaximum;

		// Expand integer numbers, eg. 123e5 to 12300.
		number = ( +number ).toString( 10 );

		if ( ( /e/ ).test( number ) ) {
			throw createErrorUnsupportedFeature({
				feature: "integers out of (1e21, 1e-7)"
			});
		}

		// Add trailing zeros if necessary.
		if ( minimumSignificantDigits - number.replace( /^0+|\./g, "" ).length > 0 ) {
			number = number.split( "." );
			number[ 1 ] = stringPad( number[ 1 ] || "", minimumSignificantDigits - number[ 0 ].replace( /^0+/, "" ).length, true );
			number = number.join( "." );
		}

		return number;
	};




	/**
	 * format( number, properties )
	 *
	 * @number [Number].
	 *
	 * @properties [Object] Output of number/format-properties.
	 *
	 * Return the formatted number.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberFormat = function( number, properties ) {
		var infinitySymbol, maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
		minimumIntegerDigits, minimumSignificantDigits, nanSymbol, nuDigitsMap, padding, prefix,
		primaryGroupingSize, pattern, ret, round, roundIncrement, secondaryGroupingSize, suffix,
		symbolMap;

		padding = properties[ 1 ];
		minimumIntegerDigits = properties[ 2 ];
		minimumFractionDigits = properties[ 3 ];
		maximumFractionDigits = properties[ 4 ];
		minimumSignificantDigits = properties[ 5 ];
		maximumSignificantDigits = properties[ 6 ];
		roundIncrement = properties[ 7 ];
		primaryGroupingSize = properties[ 8 ];
		secondaryGroupingSize = properties[ 9 ];
		round = properties[ 15 ];
		infinitySymbol = properties[ 16 ];
		nanSymbol = properties[ 17 ];
		symbolMap = properties[ 18 ];
		nuDigitsMap = properties[ 19 ];

		// NaN
		if ( isNaN( number ) ) {
			return nanSymbol;
		}

		if ( number < 0 ) {
			pattern = properties[ 12 ];
			prefix = properties[ 13 ];
			suffix = properties[ 14 ];
		} else {
			pattern = properties[ 11 ];
			prefix = properties[ 0 ];
			suffix = properties[ 10 ];
		}

		// Infinity
		if ( !isFinite( number ) ) {
			return prefix + infinitySymbol + suffix;
		}

		ret = prefix;

		// Percent
		if ( pattern.indexOf( "%" ) !== -1 ) {
			number *= 100;

		// Per mille
		} else if ( pattern.indexOf( "\u2030" ) !== -1 ) {
			number *= 1000;
		}

		// Significant digit format
		if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
			number = numberFormatSignificantDigits( number, minimumSignificantDigits,
				maximumSignificantDigits, round );

		// Integer and fractional format
		} else {
			number = numberFormatIntegerFractionDigits( number, minimumIntegerDigits,
				minimumFractionDigits, maximumFractionDigits, round, roundIncrement );
		}

		// Remove the possible number minus sign
		number = number.replace( /^-/, "" );

		// Grouping separators
		if ( primaryGroupingSize ) {
			number = numberFormatGroupingSeparator( number, primaryGroupingSize,
				secondaryGroupingSize );
		}

		ret += number;

		// Scientific notation
		// TODO implement here

		// Padding/'([^']|'')+'|''|[.,\-+E%\u2030]/g
		// TODO implement here

		ret += suffix;

		return ret.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				literal = literal.replace( /''/, "'" );
				if ( literal.length > 2 ) {
					literal = literal.slice( 1, -1 );
				}
				return literal;
			}

			// Symbols
			character = character.replace( /[.,\-+E%\u2030]/, function( symbol ) {
				return symbolMap[ symbol ];
			});

			// Numbering system
			if ( nuDigitsMap ) {
				character = character.replace( /[0-9]/, function( digit ) {
					return nuDigitsMap[ +digit ];
				});
			}

			return character;
		});
	};




	var numberFormatterFn = function( properties ) {
		return function numberFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return numberFormat( value, properties );
		};
	};




	/**
	 * EBNF representation:
	 *
	 * number_pattern_re =        prefix_including_padding?
	 *                            number
	 *                            scientific_notation?
	 *                            suffix?
	 *
	 * number =                   integer_including_group_separator fraction_including_decimal_separator
	 *
	 * integer_including_group_separator =
	 *                            regexp([0-9,]*[0-9]+)
	 *
	 * fraction_including_decimal_separator =
	 *                            regexp((\.[0-9]+)?)

	 * prefix_including_padding = non_number_stuff
	 *
	 * scientific_notation =      regexp(E[+-]?[0-9]+)
	 *
	 * suffix =                   non_number_stuff
	 *
	 * non_number_stuff =         regexp([^0-9]*)
	 *
	 *
	 * Regexp groups:
	 *
	 * 0: number_pattern_re
	 * 1: prefix
	 * 2: integer_including_group_separator fraction_including_decimal_separator
	 * 3: integer_including_group_separator
	 * 4: fraction_including_decimal_separator
	 * 5: scientific_notation
	 * 6: suffix
	 */
	var numberNumberRe = ( /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)(E[+-]?[0-9]+)?([^0-9]*)$/ );




	/**
	 * parse( value, properties )
	 *
	 * @value [String].
	 *
	 * @properties [Object] Parser properties is a reduced pre-processed cldr
	 * data set returned by numberParserProperties().
	 *
	 * Return the parsed Number (including Infinity) or NaN when value is invalid.
	 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
	 */
	var numberParse = function( value, properties ) {
		var aux, infinitySymbol, invertedNuDigitsMap, invertedSymbolMap, localizedDigitRe,
			localizedSymbolsRe, negativePrefix, negativeSuffix, number, prefix, suffix;

		infinitySymbol = properties[ 0 ];
		invertedSymbolMap = properties[ 1 ];
		negativePrefix = properties[ 2 ];
		negativeSuffix = properties[ 3 ];
		invertedNuDigitsMap = properties[ 4 ];

		// Infinite number.
		if ( aux = value.match( infinitySymbol ) ) {

			number = Infinity;
			prefix = value.slice( 0, aux.length );
			suffix = value.slice( aux.length + 1 );

		// Finite number.
		} else {

			// TODO: Create it during setup, i.e., make it a property.
			localizedSymbolsRe = new RegExp(
				Object.keys( invertedSymbolMap ).map(function( localizedSymbol ) {
					return regexpEscape( localizedSymbol );
				}).join( "|" ),
				"g"
			);

			// Reverse localized symbols.
			value = value.replace( localizedSymbolsRe, function( localizedSymbol ) {
				return invertedSymbolMap[ localizedSymbol ];
			});

			// Reverse localized numbering system.
			if ( invertedNuDigitsMap ) {

				// TODO: Create it during setup, i.e., make it a property.
				localizedDigitRe = new RegExp(
					Object.keys( invertedNuDigitsMap ).map(function( localizedDigit ) {
						return regexpEscape( localizedDigit );
					}).join( "|" ),
					"g"
				);
				value = value.replace( localizedDigitRe, function( localizedDigit ) {
					return invertedNuDigitsMap[ localizedDigit ];
				});
			}

			// Add padding zero to leading decimal.
			if ( value.charAt( 0 ) === "." ) {
				value = "0" + value;
			}

			// Is it a valid number?
			value = value.match( numberNumberRe );
			if ( !value ) {

				// Invalid number.
				return NaN;
			}

			prefix = value[ 1 ];
			suffix = value[ 6 ];

			// Remove grouping separators.
			number = value[ 2 ].replace( /,/g, "" );

			// Scientific notation
			if ( value[ 5 ] ) {
				number += value[ 5 ];
			}

			number = +number;

			// Is it a valid number?
			if ( isNaN( number ) ) {

				// Invalid number.
				return NaN;
			}

			// Percent
			if ( value[ 0 ].indexOf( "%" ) !== -1 ) {
				number /= 100;
				suffix = suffix.replace( "%", "" );

			// Per mille
			} else if ( value[ 0 ].indexOf( "\u2030" ) !== -1 ) {
				number /= 1000;
				suffix = suffix.replace( "\u2030", "" );
			}
		}

		// Negative number
		// "If there is an explicit negative subpattern, it serves only to specify the negative prefix
		// and suffix. If there is no explicit negative subpattern, the negative subpattern is the
		// localized minus sign prefixed to the positive subpattern" UTS#35
		if ( prefix === negativePrefix && suffix === negativeSuffix ) {
			number *= -1;
		}

		return number;
	};




	var numberParserFn = function( properties ) {
		return function numberParser( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			return numberParse( value, properties );
		};

	};




	var numberTruncate = function( value ) {
		if ( isNaN( value ) ) {
			return NaN;
		}
		return Math[ value < 0 ? "ceil" : "floor" ]( value );
	};




	/**
	 * round( method )
	 *
	 * @method [String] with either "round", "ceil", "floor", or "truncate".
	 *
	 * Return function( value, incrementOrExp ):
	 *
	 *   @value [Number] eg. 123.45.
	 *
	 *   @incrementOrExp [Number] optional, eg. 0.1; or
	 *     [Object] Either { increment: <value> } or { exponent: <value> }
	 *
	 *   Return the rounded number, eg:
	 *   - round( "round" )( 123.45 ): 123;
	 *   - round( "ceil" )( 123.45 ): 124;
	 *   - round( "floor" )( 123.45 ): 123;
	 *   - round( "truncate" )( 123.45 ): 123;
	 *   - round( "round" )( 123.45, 0.1 ): 123.5;
	 *   - round( "round" )( 123.45, 10 ): 120;
	 *
	 *   Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	 *   Ref: #376
	 */
	var numberRound = function( method ) {
		method = method || "round";
		method = method === "truncate" ? numberTruncate : Math[ method ];

		return function( value, incrementOrExp ) {
			var exp, increment;

			value = +value;

			// If the value is not a number, return NaN.
			if ( isNaN( value ) ) {
				return NaN;
			}

			// Exponent given.
			if ( typeof incrementOrExp === "object" && incrementOrExp.exponent ) {
				exp = +incrementOrExp.exponent;
				increment = 1;

				if ( exp === 0 ) {
					return method( value );
				}

				// If the exp is not an integer, return NaN.
				if ( !( typeof exp === "number" && exp % 1 === 0 ) ) {
					return NaN;
				}

			// Increment given.
			} else {
				increment = +incrementOrExp || 1;

				if ( increment === 1 ) {
					return method( value );
				}

				// If the increment is not a number, return NaN.
				if ( isNaN( increment ) ) {
					return NaN;
				}

				increment = increment.toExponential().split( "e" );
				exp = +increment[ 1 ];
				increment = +increment[ 0 ];
			}

			// Shift & Round
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] / increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] - exp ) : -exp;
			value = method( +( value[ 0 ] + "e" + value[ 1 ] ) );

			// Shift back
			value = value.toString().split( "e" );
			value[ 0 ] = +value[ 0 ] * increment;
			value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] + exp ) : exp;
			return +( value[ 0 ] + "e" + value[ 1 ] );
		};
	};




	Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
	Globalize._numberFormat = numberFormat;
	Globalize._numberFormatterFn = numberFormatterFn;
	Globalize._numberParse = numberParse;
	Globalize._numberParserFn = numberParserFn;
	Globalize._numberRound = numberRound;
	Globalize._validateParameterPresence = validateParameterPresence;
	Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
	Globalize._validateParameterTypeString = validateParameterTypeString;

	Globalize.numberFormatter =
	Globalize.prototype.numberFormatter = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "numberFormatter", this._locale, [ options ] ) ];
	};

	Globalize.numberParser =
	Globalize.prototype.numberParser = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "numberParser", this._locale, [ options ] ) ];
	};

	Globalize.formatNumber =
	Globalize.prototype.formatNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.numberFormatter( options )( value );
	};

	Globalize.parseNumber =
	Globalize.prototype.parseNumber = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.numberParser( options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory( __webpack_require__( 25 ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType;


	var validateParameterTypeNumber = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "number",
			"Number"
		);
	};




	var pluralGeneratorFn = function( plural ) {
		return function pluralGenerator( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return plural( value );
		};
	};




	Globalize._pluralGeneratorFn = pluralGeneratorFn;
	Globalize._validateParameterTypeNumber = validateParameterTypeNumber;

	Globalize.plural =
	Globalize.prototype.plural = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );
		return this.pluralGenerator( options )( value );
	};

	Globalize.pluralGenerator =
	Globalize.prototype.pluralGenerator = function( options ) {
		options = options || {};
		return Globalize[ runtimeKey( "pluralGenerator", this._locale, [ options ] ) ];
	};

	return Globalize;




	}));


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define( factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory();
		} else {

			// Globalize
			root.Globalize = factory();
		}
	}( this, function() {


	/**
	 * A toString method that outputs meaningful values for objects or arrays and
	 * still performs as fast as a plain string in case variable is string, or as
	 * fast as `"" + number` in case variable is a number.
	 * Ref: http://jsperf.com/my-stringify
	 */
	var toString = function( variable ) {
		return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
			variable : JSON.stringify( variable ) );
	};




	/**
	 * formatMessage( message, data )
	 *
	 * @message [String] A message with optional {vars} to be replaced.
	 *
	 * @data [Array or JSON] Object with replacing-variables content.
	 *
	 * Return the formatted message. For example:
	 *
	 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
	 *
	 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
	 *
	 * - formatMessage( "{name} <{email}>", {
	 *     name: "Foo",
	 *     email: "bar@baz.qux"
	 *   }); // Foo <bar@baz.qux>
	 */
	var formatMessage = function( message, data ) {

		// Replace {attribute}'s
		message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return toString( data[ name ] );
		});

		return message;
	};




	var objectExtend = function() {
		var destination = arguments[ 0 ],
			sources = [].slice.call( arguments, 1 );

		sources.forEach(function( source ) {
			var prop;
			for ( prop in source ) {
				destination[ prop ] = source[ prop ];
			}
		});

		return destination;
	};




	var createError = function( code, message, attributes ) {
		var error;

		message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
		error = new Error( message );
		error.code = code;

		objectExtend( error, attributes );

		return error;
	};




	// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
	var stringHash = function( str ) {
		return [].reduce.call( str, function( hash, i ) {
			var chr = i.charCodeAt( 0 );
			hash = ( ( hash << 5 ) - hash ) + chr;
			return hash | 0;
		}, 0 );
	};




	var runtimeKey = function( fnName, locale, args, argsStr ) {
		var hash;
		argsStr = argsStr || JSON.stringify( args );
		hash = stringHash( fnName + locale + argsStr );
		return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
	};




	var validate = function( code, message, check, attributes ) {
		if ( !check ) {
			throw createError( code, message, attributes );
		}
	};




	var validateParameterPresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
			value !== undefined, { name: name });
	};




	var validateParameterType = function( value, name, check, expected ) {
		validate(
			"E_INVALID_PAR_TYPE",
			"Invalid `{name}` parameter ({value}). {expected} expected.",
			check,
			{
				expected: expected,
				name: name,
				value: value
			}
		);
	};




	var validateParameterTypeString = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || typeof value === "string",
			"a string"
		);
	};




	// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
	var regexpEscape = function( string ) {
		return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
	};




	var stringPad = function( str, count, right ) {
		var length;
		if ( typeof str !== "string" ) {
			str = String( str );
		}
		for ( length = str.length; length < count; length += 1 ) {
			str = ( right ? ( str + "0" ) : ( "0" + str ) );
		}
		return str;
	};




	function Globalize( locale ) {
		if ( !( this instanceof Globalize ) ) {
			return new Globalize( locale );
		}

		validateParameterPresence( locale, "locale" );
		validateParameterTypeString( locale, "locale" );

		this._locale = locale;
	}

	Globalize.locale = function( locale ) {
		validateParameterTypeString( locale, "locale" );

		if ( arguments.length ) {
			this._locale = locale;
		}
		return this._locale;
	};

	Globalize._createError = createError;
	Globalize._formatMessage = formatMessage;
	Globalize._regexpEscape = regexpEscape;
	Globalize._runtimeKey = runtimeKey;
	Globalize._stringPad = stringPad;
	Globalize._validateParameterPresence = validateParameterPresence;
	Globalize._validateParameterTypeString = validateParameterTypeString;
	Globalize._validateParameterType = validateParameterType;

	return Globalize;




	}));


/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime",
				"./number"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory(
				__webpack_require__( 25 ),
				__webpack_require__( 5 )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * nameFormat( formattedNumber, pluralForm, properties )
	 *
	 * Return the appropriate name form currency format.
	 */
	var currencyNameFormat = function( formattedNumber, pluralForm, properties ) {
		var displayName, unitPattern,
			displayNames = properties.displayNames || {},
			unitPatterns = properties.unitPatterns;

		displayName = displayNames[ "displayName-count-" + pluralForm ] ||
			displayNames[ "displayName-count-other" ] ||
			displayNames.displayName ||
			properties.currency;
		unitPattern = unitPatterns[ "unitPattern-count-" + pluralForm ] ||
			unitPatterns[ "unitPattern-count-other" ];

		return formatMessage( unitPattern, [ formattedNumber, displayName ]);
	};




	var currencyFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		var fn;

		// Return formatter when style is "code" or "name".
		if ( pluralGenerator && properties ) {
			fn = function currencyFormatter( value ) {
				validateParameterPresence( value, "value" );
				validateParameterTypeNumber( value, "value" );
				return currencyNameFormat(
					numberFormatter( value ),
					pluralGenerator( value ),
					properties
				);
			};

		// Return formatter when style is "symbol" or "accounting".
		} else {
			fn = function currencyFormatter( value ) {
				return numberFormatter( value );
			};
		}

		return fn;
	};




	Globalize._currencyFormatterFn = currencyFormatterFn;
	Globalize._currencyNameFormat = currencyNameFormat;

	Globalize.currencyFormatter =
	Globalize.prototype.currencyFormatter = function( currency, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "currencyFormatter", this._locale, [ currency, options ] ) ];
	};

	Globalize.formatCurrency =
	Globalize.prototype.formatCurrency = function( value, currency, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.currencyFormatter( currency, options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime",
				"./number"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory(
				__webpack_require__( 25 ),
				__webpack_require__( 5 )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature,
		regexpEscape = Globalize._regexpEscape,
		runtimeKey = Globalize._runtimeKey,
		stringPad = Globalize._stringPad,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterType = Globalize._validateParameterType,
		validateParameterTypeString = Globalize._validateParameterTypeString;


	var validateParameterTypeDate = function( value, name ) {
		validateParameterType( value, name, value === undefined || value instanceof Date, "Date" );
	};




	/**
	 * dayOfWeek( date, firstDay )
	 *
	 * @date
	 *
	 * @firstDay the result of `dateFirstDayOfWeek( cldr )`
	 *
	 * Return the day of the week normalized by the territory's firstDay [0-6].
	 * Eg for "mon":
	 * - return 0 if territory is GB, or BR, or DE, or FR (week starts on "mon");
	 * - return 1 if territory is US (week starts on "sun");
	 * - return 2 if territory is EG (week starts on "sat");
	 */
	var dateDayOfWeek = function( date, firstDay ) {
		return ( date.getDay() - firstDay + 7 ) % 7;
	};




	/**
	 * distanceInDays( from, to )
	 *
	 * Return the distance in days between from and to Dates.
	 */
	var dateDistanceInDays = function( from, to ) {
		var inDays = 864e5;
		return ( to.getTime() - from.getTime() ) / inDays;
	};




	/**
	 * startOf changes the input to the beginning of the given unit.
	 *
	 * For example, starting at the start of a day, resets hours, minutes
	 * seconds and milliseconds to 0. Starting at the month does the same, but
	 * also sets the date to 1.
	 *
	 * Returns the modified date
	 */
	var dateStartOf = function( date, unit ) {
		date = new Date( date.getTime() );
		switch ( unit ) {
			case "year":
				date.setMonth( 0 );
			/* falls through */
			case "month":
				date.setDate( 1 );
			/* falls through */
			case "day":
				date.setHours( 0 );
			/* falls through */
			case "hour":
				date.setMinutes( 0 );
			/* falls through */
			case "minute":
				date.setSeconds( 0 );
			/* falls through */
			case "second":
				date.setMilliseconds( 0 );
		}
		return date;
	};




	/**
	 * dayOfYear
	 *
	 * Return the distance in days of the date to the begin of the year [0-d].
	 */
	var dateDayOfYear = function( date ) {
		return Math.floor( dateDistanceInDays( dateStartOf( date, "year" ), date ) );
	};




	/**
	 * millisecondsInDay
	 */
	var dateMillisecondsInDay = function( date ) {

		// TODO Handle daylight savings discontinuities
		return date - dateStartOf( date, "day" );
	};




	var datePatternRe = ( /([a-z])\1*|'([^']|'')+'|''|./ig );




	/**
	 * hourFormat( date, format, timeSeparator, formatNumber )
	 *
	 * Return date's timezone offset according to the format passed.
	 * Eg for format when timezone offset is 180:
	 * - "+H;-H": -3
	 * - "+HHmm;-HHmm": -0300
	 * - "+HH:mm;-HH:mm": -03:00
	 */
	var dateTimezoneHourFormat = function( date, format, timeSeparator, formatNumber ) {
		var absOffset,
			offset = date.getTimezoneOffset();

		absOffset = Math.abs( offset );
		formatNumber = formatNumber || {
			1: function( value ) {
				return stringPad( value, 1 );
			},
			2: function( value ) {
				return stringPad( value, 2 );
			}
		};

		return format

			// Pick the correct sign side (+ or -).
			.split( ";" )[ offset > 0 ? 1 : 0 ]

			// Localize time separator
			.replace( ":", timeSeparator )

			// Update hours offset.
			.replace( /HH?/, function( match ) {
				return formatNumber[ match.length ]( Math.floor( absOffset / 60 ) );
			})

			// Update minutes offset and return.
			.replace( /mm/, function() {
				return formatNumber[ 2 ]( absOffset % 60 );
			});
	};




	var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];




	/**
	 * format( date, properties )
	 *
	 * @date [Date instance].
	 *
	 * @properties
	 *
	 * TODO Support other calendar types.
	 *
	 * Disclosure: this function borrows excerpts of dojo/date/locale.
	 */
	var dateFormat = function( date, numberFormatters, properties ) {
		var timeSeparator = properties.timeSeparator;

		return properties.pattern.replace( datePatternRe, function( current ) {
			var ret,
				chr = current.charAt( 0 ),
				length = current.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTime;
			}

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					ret = properties.eras[ date.getFullYear() < 0 ? 0 : 1 ];
					break;

				// Year
				case "y":

					// Plain year.
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					ret = date.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				case "Y":

					// Year in "Week of Year"
					// The length specifies the padding, but for two letters it also specifies the
					// maximum length.
					// yearInWeekofYear = date + DaysInAWeek - (dayOfWeek - firstDay) - minDays
					ret = new Date( date.getTime() );
					ret.setDate(
						ret.getDate() + 7 -
						dateDayOfWeek( date, properties.firstDay ) -
						properties.firstDay -
						properties.minDays
					);
					ret = ret.getFullYear();
					if ( length === 2 ) {
						ret = String( ret );
						ret = +ret.substr( ret.length - 2 );
					}
					break;

				// Quarter
				case "Q":
				case "q":
					ret = Math.ceil( ( date.getMonth() + 1 ) / 3 );
					if ( length > 2 ) {
						ret = properties.quarters[ chr ][ length ][ ret ];
					}
					break;

				// Month
				case "M":
				case "L":
					ret = date.getMonth() + 1;
					if ( length > 2 ) {
						ret = properties.months[ chr ][ length ][ ret ];
					}
					break;

				// Week
				case "w":

					// Week of Year.
					// woy = ceil( ( doy + dow of 1/1 ) / 7 ) - minDaysStuff ? 1 : 0.
					// TODO should pad on ww? Not documented, but I guess so.
					ret = dateDayOfWeek( dateStartOf( date, "year" ), properties.firstDay );
					ret = Math.ceil( ( dateDayOfYear( date ) + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				case "W":

					// Week of Month.
					// wom = ceil( ( dom + dow of `1/month` ) / 7 ) - minDaysStuff ? 1 : 0.
					ret = dateDayOfWeek( dateStartOf( date, "month" ), properties.firstDay );
					ret = Math.ceil( ( date.getDate() + ret ) / 7 ) -
						( 7 - ret >= properties.minDays ? 0 : 1 );
					break;

				// Day
				case "d":
					ret = date.getDate();
					break;

				case "D":
					ret = dateDayOfYear( date ) + 1;
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					ret = Math.floor( date.getDate() / 7 ) + 1;
					break;

				// Week day
				case "e":
				case "c":
					if ( length <= 2 ) {

						// Range is [1-7] (deduced by example provided on documentation)
						// TODO Should pad with zeros (not specified in the docs)?
						ret = dateDayOfWeek( date, properties.firstDay ) + 1;
						break;
					}

				/* falls through */
				case "E":
					ret = dateWeekDays[ date.getDay() ];
					ret = properties.days[ chr ][ length ][ ret ];
					break;

				// Period (AM or PM)
				case "a":
					ret = properties.dayPeriods[ date.getHours() < 12 ? "am" : "pm" ];
					break;

				// Hour
				case "h": // 1-12
					ret = ( date.getHours() % 12 ) || 12;
					break;

				case "H": // 0-23
					ret = date.getHours();
					break;

				case "K": // 0-11
					ret = date.getHours() % 12;
					break;

				case "k": // 1-24
					ret = date.getHours() || 24;
					break;

				// Minute
				case "m":
					ret = date.getMinutes();
					break;

				// Second
				case "s":
					ret = date.getSeconds();
					break;

				case "S":
					ret = Math.round( date.getMilliseconds() * Math.pow( 10, length - 3 ) );
					break;

				case "A":
					ret = Math.round( dateMillisecondsInDay( date ) * Math.pow( 10, length - 3 ) );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( date.getTimezoneOffset() === 0 ) {
						ret = properties.gmtZeroFormat;
					} else {
						ret = dateTimezoneHourFormat(
							date,
							length < 4 ? "+H;-H" : properties.tzLongHourFormat,
							timeSeparator,
							numberFormatters
						);
						ret = properties.gmtFormat.replace( /\{0\}/, ret );
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( date.getTimezoneOffset() === 0 ) {
						ret = "Z";
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					ret = length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" );
					ret = dateTimezoneHourFormat( date, ret, ":" );
					break;

				// timeSeparator
				case ":":
					ret = timeSeparator;
					break;

				// ' literals.
				case "'":
					current = current.replace( /''/, "'" );
					if ( length > 2 ) {
						current = current.slice( 1, -1 );
					}
					ret = current;
					break;

				// Anything else is considered a literal, including [ ,:/.@#], chinese, japonese, and
				// arabic characters.
				default:
					ret = current;
			}
			if ( typeof ret === "number" ) {
				ret = numberFormatters[ length ]( ret );
			}
			return ret;
		});
	};




	var dateFormatterFn = function( numberFormatters, properties ) {
		return function dateFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeDate( value, "value" );

			return dateFormat( value, numberFormatters, properties );
		};

	};




	/**
	 * isLeapYear( year )
	 *
	 * @year [Number]
	 *
	 * Returns an indication whether the specified year is a leap year.
	 */
	var dateIsLeapYear = function( year ) {
		return new Date( year, 1, 29 ).getMonth() === 1;
	};




	/**
	 * lastDayOfMonth( date )
	 *
	 * @date [Date]
	 *
	 * Return the last day of the given date's month
	 */
	var dateLastDayOfMonth = function( date ) {
		return new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
	};




	/**
	 * Differently from native date.setDate(), this function returns a date whose
	 * day remains inside the month boundaries. For example:
	 *
	 * setDate( FebDate, 31 ): a "Feb 28" date.
	 * setDate( SepDate, 31 ): a "Sep 30" date.
	 */
	var dateSetDate = function( date, day ) {
		var lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();

		date.setDate( day < 1 ? 1 : day < lastDay ? day : lastDay );
	};




	/**
	 * Differently from native date.setMonth(), this function adjusts date if
	 * needed, so final month is always the one set.
	 *
	 * setMonth( Jan31Date, 1 ): a "Feb 28" date.
	 * setDate( Jan31Date, 8 ): a "Sep 30" date.
	 */
	var dateSetMonth = function( date, month ) {
		var originalDate = date.getDate();

		date.setDate( 1 );
		date.setMonth( month );
		dateSetDate( date, originalDate );
	};




	var outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};




	/**
	 * parse( value, tokens, properties )
	 *
	 * @value [String] string date.
	 *
	 * @tokens [Object] tokens returned by date/tokenizer.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
	 */
	var dateParse = function( value, tokens, properties ) {
		var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid,
			YEAR = 0,
			MONTH = 1,
			DAY = 2,
			HOUR = 3,
			MINUTE = 4,
			SECOND = 5,
			MILLISECONDS = 6,
			date = new Date(),
			truncateAt = [],
			units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];

		if ( !tokens.length ) {
			return null;
		}

		valid = tokens.every(function( token ) {
			var century, chr, value, length;

			if ( token.type === "literal" ) {

				// continue
				return true;
			}

			chr = token.type.charAt( 0 );
			length = token.type.length;

			if ( chr === "j" ) {

				// Locale preferred hHKk.
				// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
				chr = properties.preferredTimeData;
			}

			switch ( chr ) {

				// Era
				case "G":
					truncateAt.push( YEAR );
					era = +token.value;
					break;

				// Year
				case "y":
					value = token.value;
					if ( length === 2 ) {
						if ( outOfRange( value, 0, 99 ) ) {
							return false;
						}

						// mimic dojo/date/locale: choose century to apply, according to a sliding
						// window of 80 years before and 20 years after present year.
						century = Math.floor( date.getFullYear() / 100 ) * 100;
						value += century;
						if ( value > date.getFullYear() + 20 ) {
							value -= 100;
						}
					}
					date.setFullYear( value );
					truncateAt.push( YEAR );
					break;

				case "Y": // Year in "Week of Year"
					throw createErrorUnsupportedFeature({
						feature: "year pattern `" + chr + "`"
					});

				// Quarter (skip)
				case "Q":
				case "q":
					break;

				// Month
				case "M":
				case "L":
					if ( length <= 2 ) {
						value = token.value;
					} else {
						value = +token.value;
					}
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}

					// Setting the month later so that we have the correct year and can determine
					// the correct last day of February in case of leap year.
					month = value;
					truncateAt.push( MONTH );
					break;

				// Week (skip)
				case "w": // Week of Year.
				case "W": // Week of Month.
					break;

				// Day
				case "d":
					day = token.value;
					truncateAt.push( DAY );
					break;

				case "D":
					daysOfYear = token.value;
					truncateAt.push( DAY );
					break;

				case "F":

					// Day of Week in month. eg. 2nd Wed in July.
					// Skip
					break;

				// Week day
				case "e":
				case "c":
				case "E":

					// Skip.
					// value = arrayIndexOf( dateWeekDays, token.value );
					break;

				// Period (AM or PM)
				case "a":
					amPm = token.value;
					break;

				// Hour
				case "h": // 1-12
					value = token.value;
					if ( outOfRange( value, 1, 12 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value === 12 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "K": // 0-11
					value = token.value;
					if ( outOfRange( value, 0, 11 ) ) {
						return false;
					}
					hour = hour12 = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				case "k": // 1-24
					value = token.value;
					if ( outOfRange( value, 1, 24 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value === 24 ? 0 : value );
					truncateAt.push( HOUR );
					break;

				case "H": // 0-23
					value = token.value;
					if ( outOfRange( value, 0, 23 ) ) {
						return false;
					}
					hour = true;
					date.setHours( value );
					truncateAt.push( HOUR );
					break;

				// Minute
				case "m":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setMinutes( value );
					truncateAt.push( MINUTE );
					break;

				// Second
				case "s":
					value = token.value;
					if ( outOfRange( value, 0, 59 ) ) {
						return false;
					}
					date.setSeconds( value );
					truncateAt.push( SECOND );
					break;

				case "A":
					date.setHours( 0 );
					date.setMinutes( 0 );
					date.setSeconds( 0 );

				/* falls through */
				case "S":
					value = Math.round( token.value * Math.pow( 10, 3 - length ) );
					date.setMilliseconds( value );
					truncateAt.push( MILLISECONDS );
					break;

				// Zone
				case "Z":
				case "z":
				case "O":
				case "X":
				case "x":
					timezoneOffset = token.value - date.getTimezoneOffset();
					break;
			}

			return true;
		});

		if ( !valid ) {
			return null;
		}

		// 12-hour format needs AM or PM, 24-hour format doesn't, ie. return null
		// if amPm && !hour12 || !amPm && hour12.
		if ( hour && !( !amPm ^ hour12 ) ) {
			return null;
		}

		if ( era === 0 ) {

			// 1 BC = year 0
			date.setFullYear( date.getFullYear() * -1 + 1 );
		}

		if ( month !== undefined ) {
			dateSetMonth( date, month - 1 );
		}

		if ( day !== undefined ) {
			if ( outOfRange( day, 1, dateLastDayOfMonth( date ) ) ) {
				return null;
			}
			date.setDate( day );
		} else if ( daysOfYear !== undefined ) {
			if ( outOfRange( daysOfYear, 1, dateIsLeapYear( date.getFullYear() ) ? 366 : 365 ) ) {
				return null;
			}
			date.setMonth( 0 );
			date.setDate( daysOfYear );
		}

		if ( hour12 && amPm === "pm" ) {
			date.setHours( date.getHours() + 12 );
		}

		if ( timezoneOffset ) {
			date.setMinutes( date.getMinutes() + timezoneOffset );
		}

		// Truncate date at the most precise unit defined. Eg.
		// If value is "12/31", and pattern is "MM/dd":
		// => new Date( <current Year>, 12, 31, 0, 0, 0, 0 );
		truncateAt = Math.max.apply( null, truncateAt );
		date = dateStartOf( date, units[ truncateAt ] );

		return date;
	};




	/**
	 * Generated by:
	 *
	 * regenerate().add( require( "unicode-7.0.0/categories/N/symbols" ) ).toString();
	 *
	 * https://github.com/mathiasbynens/regenerate
	 * https://github.com/mathiasbynens/unicode-7.0.0
	 */
	var regexpN = /[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDD16-\uDD1B\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9]|\uD806[\uDCE0-\uDCF2]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]/;




	/**
	 * tokenizer( value, pattern, properties )
	 *
	 * @value [String] string date.
	 *
	 * @properties [Object] output returned by date/tokenizer-properties.
	 *
	 * Returns an Array of tokens, eg. value "5 o'clock PM", pattern "h 'o''clock' a":
	 * [{
	 *   type: "h",
	 *   lexeme: "5"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "literal",
	 *   lexeme: "o'clock"
	 * }, {
	 *   type: "literal",
	 *   lexeme: " "
	 * }, {
	 *   type: "a",
	 *   lexeme: "PM",
	 *   value: "pm"
	 * }]
	 *
	 * OBS: lexeme's are always String and may return invalid ranges depending of the token type.
	 * Eg. "99" for month number.
	 *
	 * Return an empty Array when not successfully parsed.
	 */
	var dateTokenizer = function( value, numberParser, properties ) {
		var valid,
			timeSeparator = properties.timeSeparator,
			tokens = [],
			widths = [ "abbreviated", "wide", "narrow" ];

		valid = properties.pattern.match( datePatternRe ).every(function( current ) {
			var chr, length, numeric, tokenRe,
				token = {};

			function hourFormatParse( tokenRe, numberParser ) {
				var aux = value.match( tokenRe );
				numberParser = numberParser || function( value ) {
					return +value;
				};

				if ( !aux ) {
					return false;
				}

				// hourFormat containing H only, e.g., `+H;-H`
				if ( aux.length < 8 ) {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 4 ] ) ) * 60;

				// hourFormat containing H and m, e.g., `+HHmm;-HHmm`
				} else {
					token.value =
						( aux[ 1 ] ? -numberParser( aux[ 1 ] ) : numberParser( aux[ 7 ] ) ) * 60 +
						( aux[ 1 ] ? -numberParser( aux[ 4 ] ) : numberParser( aux[ 10 ] ) );
				}

				return true;
			}

			// Transform:
			// - "+H;-H" -> /\+(\d\d?)|-(\d\d?)/
			// - "+HH;-HH" -> /\+(\d\d)|-(\d\d)/
			// - "+HHmm;-HHmm" -> /\+(\d\d)(\d\d)|-(\d\d)(\d\d)/
			// - "+HH:mm;-HH:mm" -> /\+(\d\d):(\d\d)|-(\d\d):(\d\d)/
			//
			// If gmtFormat is GMT{0}, the regexp must fill {0} in each side, e.g.:
			// - "+H;-H" -> /GMT\+(\d\d?)|GMT-(\d\d?)/
			function hourFormatRe( hourFormat, gmtFormat, timeSeparator ) {
				var re;

				if ( !gmtFormat ) {
					gmtFormat = "{0}";
				}

				re = hourFormat
					.replace( "+", "\\+" )

					// Unicode equivalent to (\\d\\d)
					.replace( /HH|mm/g, "((" + regexpN.source + ")(" + regexpN.source + "))" )

					// Unicode equivalent to (\\d\\d?)
					.replace( /H|m/g, "((" + regexpN.source + ")(" + regexpN.source + ")?)" );

				if ( timeSeparator ) {
					re = re.replace( /:/g, timeSeparator );
				}

				re = re.split( ";" ).map(function( part ) {
					return gmtFormat.replace( "{0}", part );
				}).join( "|" );

				return new RegExp( re );
			}

			function oneDigitIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d/
					numeric = true;
					return tokenRe = regexpN;
				}
			}

			function oneOrTwoDigitsIfLengthOne() {
				if ( length === 1 ) {

					// Unicode equivalent to /\d\d?/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")?" );
				}
			}

			function twoDigitsIfLengthTwo() {
				if ( length === 2 ) {

					// Unicode equivalent to /\d\d/
					numeric = true;
					return tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
				}
			}

			// Brute-force test every locale entry in an attempt to match the given value.
			// Return the first found one (and set token accordingly), or null.
			function lookup( path ) {
				var i, re,
					data = properties[ path.join( "/" ) ];

				for ( i in data ) {
					re = new RegExp( "^" + data[ i ] );
					if ( re.test( value ) ) {
						token.value = i;
						return tokenRe = new RegExp( data[ i ] );
					}
				}
				return null;
			}

			token.type = current;
			chr = current.charAt( 0 ),
			length = current.length;

			if ( chr === "Z" ) {

				// Z..ZZZ: same as "xxxx".
				if ( length < 4 ) {
					chr = "x";
					length = 4;

				// ZZZZ: same as "OOOO".
				} else if ( length < 5 ) {
					chr = "O";
					length = 4;

				// ZZZZZ: same as "XXXXX"
				} else {
					chr = "X";
					length = 5;
				}
			}

			switch ( chr ) {

				// Era
				case "G":
					lookup([
						"gregorian/eras",
						length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
					]);
					break;

				// Year
				case "y":
				case "Y":
					numeric = true;

					// number l=1:+, l=2:{2}, l=3:{3,}, l=4:{4,}, ...
					if ( length === 1 ) {

						// Unicode equivalent to /\d+/.
						tokenRe = new RegExp( "(" + regexpN.source + ")+" );
					} else if ( length === 2 ) {

						// Unicode equivalent to /\d\d/
						tokenRe = new RegExp( "(" + regexpN.source + ")(" + regexpN.source + ")" );
					} else {

						// Unicode equivalent to /\d{length,}/
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",}" );
					}
					break;

				// Quarter
				case "Q":
				case "q":

					// number l=1:{1}, l=2:{2}.
					// lookup l=3...
					oneDigitIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Month
				case "M":
				case "L":

					// number l=1:{1,2}, l=2:{2}.
					// lookup l=3...
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo() || lookup([
						"gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
					break;

				// Day
				case "D":

					// number {l,3}.
					if ( length <= 3 ) {

						// Unicode equivalent to /\d{length,3}/
						numeric = true;
						tokenRe = new RegExp( "(" + regexpN.source + "){" + length + ",3}" );
					}
					break;

				case "W":
				case "F":

					// number l=1:{1}.
					oneDigitIfLengthOne();
					break;

				// Week day
				case "e":
				case "c":

					// number l=1:{1}, l=2:{2}.
					// lookup for length >=3.
					if ( length <= 2 ) {
						oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
						break;
					}

				/* falls through */
				case "E":
					if ( length === 6 ) {

						// Note: if short day names are not explicitly specified, abbreviated day
						// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"short"
						]) || lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							"abbreviated"
						]);
					} else {
						lookup([
							"gregorian/days",
							[ chr === "c" ? "stand-alone" : "format" ],
							widths[ length < 3 ? 0 : length - 3 ]
						]);
					}
					break;

				// Period (AM or PM)
				case "a":
					lookup([
						"gregorian/dayPeriods/format/wide"
					]);
					break;

				// Week, Day, Hour, Minute, or Second
				case "w":
				case "d":
				case "h":
				case "H":
				case "K":
				case "k":
				case "j":
				case "m":
				case "s":

					// number l1:{1,2}, l2:{2}.
					oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
					break;

				case "S":

					// number {l}.

					// Unicode equivalent to /\d{length}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + length + "}" );
					break;

				case "A":

					// number {l+5}.

					// Unicode equivalent to /\d{length+5}/
					numeric = true;
					tokenRe = new RegExp( "(" + regexpN.source + "){" + ( length + 5 ) + "}" );
					break;

				// Zone
				case "z":
				case "O":

					// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
					// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
					if ( value === properties[ "timeZoneNames/gmtZeroFormat" ] ) {
						token.value = 0;
						tokenRe = new RegExp( properties[ "timeZoneNames/gmtZeroFormat" ] );
					} else {
						tokenRe = hourFormatRe(
							length < 4 ? "+H;-H" : properties[ "timeZoneNames/hourFormat" ],
							properties[ "timeZoneNames/gmtFormat" ],
							timeSeparator
						);
						if ( !hourFormatParse( tokenRe, numberParser ) ) {
							return null;
						}
					}
					break;

				case "X":

					// Same as x*, except it uses "Z" for zero offset.
					if ( value === "Z" ) {
						token.value = 0;
						tokenRe = /Z/;
						break;
					}

				/* falls through */
				case "x":

					// x: hourFormat("+HH;-HH")
					// xx or xxxx: hourFormat("+HHmm;-HHmm")
					// xxx or xxxxx: hourFormat("+HH:mm;-HH:mm")
					tokenRe = hourFormatRe(
						length === 1 ? "+HH;-HH" : ( length % 2 ? "+HH:mm;-HH:mm" : "+HHmm;-HHmm" )
					);
					if ( !hourFormatParse( tokenRe ) ) {
						return null;
					}
					break;

				case "'":
					token.type = "literal";
					current = current.replace( /''/, "'" );
					if ( length > 2 ) {
						current = current.slice( 1, -1 );
					}
					tokenRe = new RegExp( regexpEscape( current ) );
					break;

				default:
					token.type = "literal";
					tokenRe = /./;
			}

			if ( !tokenRe ) {
				return false;
			}

			// Get lexeme and consume it.
			value = value.replace( new RegExp( "^" + tokenRe.source ), function( lexeme ) {
				token.lexeme = lexeme;
				if ( numeric ) {
					token.value = numberParser( lexeme );
				}
				return "";
			});

			if ( !token.lexeme ) {
				return false;
			}

			tokens.push( token );
			return true;
		});

		if ( value !== "" ) {
			valid = false;
		}

		return valid ? tokens : [];
	};




	var dateParserFn = function( numberParser, parseProperties, tokenizerProperties ) {
		return function dateParser( value ) {
			var tokens;

			validateParameterPresence( value, "value" );
			validateParameterTypeString( value, "value" );

			tokens = dateTokenizer( value, numberParser, tokenizerProperties );
			return dateParse( value, tokens, parseProperties ) || null;
		};
	};




	Globalize._dateFormatterFn = dateFormatterFn;
	Globalize._dateParserFn = dateParserFn;
	Globalize._dateFormat = dateFormat;
	Globalize._dateParser = dateParse;
	Globalize._dateTokenizer = dateTokenizer;
	Globalize._validateParameterTypeDate = validateParameterTypeDate;

	Globalize.dateFormatter =
	Globalize.prototype.dateFormatter = function( options ) {
		options = options || { skeleton: "yMd" };
		return Globalize[ runtimeKey( "dateFormatter", this._locale, [ options ] ) ];
	};

	Globalize.dateParser =
	Globalize.prototype.dateParser = function( options ) {
		options = options || { skeleton: "yMd" };
		return Globalize[ runtimeKey( "dateParser", this._locale, [ options ] ) ];
	};

	Globalize.formatDate =
	Globalize.prototype.formatDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeDate( value, "value" );

		return this.dateFormatter( options )( value );
	};

	Globalize.parseDate =
	Globalize.prototype.parseDate = function( value, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return this.dateParser( options )( value );
	};

	return Globalize;




	}));


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory( __webpack_require__( 25 ) );
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var runtimeKey = Globalize._runtimeKey,
		validateParameterType = Globalize._validateParameterType;


	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateParameterTypeMessageVariables = function( value, name ) {
		validateParameterType(
			value,
			name,
			value === undefined || isPlainObject( value ) || Array.isArray( value ),
			"Array or Plain Object"
		);
	};




	var messageFormatterFn = function( formatter ) {
		return function messageFormatter( variables ) {
			if ( typeof variables === "number" || typeof variables === "string" ) {
				variables = [].slice.call( arguments, 0 );
			}
			validateParameterTypeMessageVariables( variables, "variables" );
			return formatter( variables );
		};
	};




	Globalize._messageFormatterFn = messageFormatterFn;
	/* jshint ignore:start */
	Globalize._messageFormat = (function() {
	var number = function (value, offset) {
	  if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
	  return value - (offset || 0);
	};
	var plural = function (value, offset, lcfunc, data, isOrdinal) {
	  if ({}.hasOwnProperty.call(data, value)) return data[value]();
	  if (offset) value -= offset;
	  var key = lcfunc(value, isOrdinal);
	  if (key in data) return data[key]();
	  return data.other();
	};
	var select = function (value, data) {
	  if ({}.hasOwnProperty.call(data, value)) return data[value]();
	  return data.other()
	};

	return {number: number, plural: plural, select: select};
	}());
	/* jshint ignore:end */
	Globalize._validateParameterTypeMessageVariables = validateParameterTypeMessageVariables;

	Globalize.messageFormatter =
	Globalize.prototype.messageFormatter = function( /* path */ ) {
		return Globalize[
			runtimeKey( "messageFormatter", this._locale, [].slice.call( arguments, 0 ) )
		];
	};

	Globalize.formatMessage =
	Globalize.prototype.formatMessage = function( path /* , variables */ ) {
		return this.messageFormatter( path ).apply( {}, [].slice.call( arguments, 1 ) );
	};

	return Globalize;




	}));


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime",
				"./number",
				"./plural"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory(
				__webpack_require__( 25 ),
				__webpack_require__( 5 ),
				__webpack_require__( 7 )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * format( value, numberFormatter, pluralGenerator, properties )
	 *
	 * @value [Number] The number to format
	 *
	 * @numberFormatter [String] A numberFormatter from Globalize.numberFormatter
	 *
	 * @pluralGenerator [String] A pluralGenerator from Globalize.pluralGenerator
	 *
	 * @properties [Object] containing relative time plural message.
	 *
	 * Format relative time.
	 */
	var relativeTimeFormat = function( value, numberFormatter, pluralGenerator, properties ) {

		var relativeTime,
			message = properties[ "relative-type-" + value ];

		if ( message ) {
			return message;
		}

		relativeTime = value <= 0 ? properties[ "relativeTime-type-past" ]
			: properties[ "relativeTime-type-future" ];

		value = Math.abs( value );

		message = relativeTime[ "relativeTimePattern-count-" + pluralGenerator( value ) ];
		return formatMessage( message, [ numberFormatter( value ) ] );
	};




	var relativeTimeFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
		return function relativeTimeFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return relativeTimeFormat( value, numberFormatter, pluralGenerator, properties );
		};

	};




	Globalize._relativeTimeFormatterFn = relativeTimeFormatterFn;

	Globalize.formatRelativeTime =
	Globalize.prototype.formatRelativeTime = function( value, unit, options ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return this.relativeTimeFormatter( unit, options )( value );
	};

	Globalize.relativeTimeFormatter =
	Globalize.prototype.relativeTimeFormatter = function( unit, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "relativeTimeFormatter", this._locale, [ unit, options ] ) ];
	};

	return Globalize;




	}));


/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Globalize Runtime v1.1.1
	 *
	 * http://github.com/jquery/globalize
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-04T12:01Z
	 */
	/*!
	 * Globalize Runtime v1.1.1 2016-02-04T12:01Z Released under the MIT license
	 * http://git.io/TrdQbw
	 */
	(function( root, factory ) {

		// UMD returnExports
		if ( false ) {

			// AMD
			define([
				"../globalize-runtime",
				"./number",
				"./plural"
			], factory );
		} else if ( true ) {

			// Node, CommonJS
			module.exports = factory(
				__webpack_require__( 25 ),
				__webpack_require__( 5 ),
				__webpack_require__( 7 )
			);
		} else {

			// Extend global
			factory( root.Globalize );
		}
	}(this, function( Globalize ) {

	var formatMessage = Globalize._formatMessage,
		runtimeKey = Globalize._runtimeKey,
		validateParameterPresence = Globalize._validateParameterPresence,
		validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


	/**
	 * format( value, numberFormatter, pluralGenerator, unitProperies )
	 *
	 * @value [Number]
	 *
	 * @numberFormatter [Object]: A numberFormatter from Globalize.numberFormatter.
	 *
	 * @pluralGenerator [Object]: A pluralGenerator from Globalize.pluralGenerator.
	 *
	 * @unitProperies [Object]: localized unit data from cldr.
	 *
	 * Format units such as seconds, minutes, days, weeks, etc.
	 *
	 * OBS:
	 *
	 * Unit Sequences are not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#Unit_Sequences
	 *
	 * Duration Unit (for composed time unit durations) is not implemented.
	 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#durationUnit
	 */
	var unitFormat = function( value, numberFormatter, pluralGenerator, unitProperties ) {
		var compoundUnitPattern = unitProperties.compoundUnitPattern, dividend, dividendProperties,
			formattedValue, divisor, divisorProperties, message, pluralValue;

		unitProperties = unitProperties.unitProperties;
		formattedValue = numberFormatter( value );
		pluralValue = pluralGenerator( value );

		// computed compound unit, eg. "megabyte-per-second".
		if ( unitProperties instanceof Array ) {
			dividendProperties = unitProperties[ 0 ];
			divisorProperties = unitProperties[ 1 ];

			dividend = formatMessage( dividendProperties[ pluralValue ], [ value ] );
			divisor = formatMessage( divisorProperties.one, [ "" ] ).trim();

			return formatMessage( compoundUnitPattern, [ dividend, divisor ] );
		}

		message = unitProperties[ pluralValue ];

		return formatMessage( message, [ formattedValue ] );
	};




	var unitFormatterFn = function( numberFormatter, pluralGenerator, unitProperties ) {
		return function unitFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );

			return unitFormat( value, numberFormatter, pluralGenerator, unitProperties );
		};

	};




	Globalize._unitFormatterFn = unitFormatterFn;

	Globalize.formatUnit =
	Globalize.prototype.formatUnit = function( value, unit, options ) {
		return this.unitFormatter( unit, options )( value );
	};

	Globalize.unitFormatter =
	Globalize.prototype.unitFormatter = function( unit, options ) {
		options = options || {};
		return Globalize[ runtimeKey( "unitFormatter", this._locale, [ unit, options ] ) ];
	};

	return Globalize;




	}));


/***/ }

/******/ });