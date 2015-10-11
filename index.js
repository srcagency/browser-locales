'use strict';

module.exports = locales;

function locales(){
	if (typeof navigator === 'undefined')
		return;

	if (navigator.languages)
		return navigator.languages;

	if (navigator.language)
		return [ navigator.language ];

	// IE
	if (navigator.userLanguage)
		return [ navigator.userLanguage ];
}
