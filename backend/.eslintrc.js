module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "no-console": 0,
      "react-hooks/rules-of-hooks": 0,
      "class-methods-use-this": 0,
    }
};