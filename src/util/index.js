function fromLocalStorage(key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var string = localStorage.getItem(key);
    if (string === null || string === undefined) {
        return defaultValue;
    }
    try {
        return JSON.parse(string);
    } catch (error) {
        (0, _crier.crier)('error', error && error.stack || error);
        return defaultValue;
    }
}

exports.fromLocalStorage = fromLocalStorage;
var _crier = require('./crier');
