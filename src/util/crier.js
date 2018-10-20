'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crier = undefined;

var _lodash = require('lodash');

/**
 * Conditional logging in development mode.
 *
 * @param  {string} type - The logging method as you would call from the global `console` object.
 * @param  {...Object} [args] - The arguments you would send a corresponding `console\[type\](...)` invocation.
 * @return {Object|undefined} - The return value you would expect from a corresponding `console\[type\](...)` invocation.
 */
var crier = function crier(type) {
    if (!console) {
        return;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (type in console) {
        var _console;

        return (_console = console)[type].apply(_console, args); // eslint-disable-line no-console
    }
    if ('log' in console) {
        var _console2;

        return (_console2 = console).log.apply(_console2, args); // eslint-disable-line no-console
    }
};

if (process.env.NODE_ENV === 'production') {
    exports.crier = crier = _lodash.noop;
}

exports.crier = crier;
