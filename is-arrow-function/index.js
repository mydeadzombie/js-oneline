'use strict';

module.exports = function isArrowFunction(fn) {
	if(!fn || typeof fn !== 'function') return false;

	if(fn.prototype === undefined || fn.prototype.constructor !== fn) return true;
};