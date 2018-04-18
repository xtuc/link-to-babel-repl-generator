// https://github.com/babel/website/blob/61e637829a99ed120cd3f7c7c555b8b1eb8231ec/js/repl/UriUtils.js#L7

const queryString = require('query-string');
const LZString = require("lz-string");

const BASE_URL = "https://babeljs.io/repl";

function encodeArray(array) {
  return array.map(encodeURIComponent).join(",");
}

const defaults = {
  evaluate: false,
  babili: false,
  presets: encodeArray([]),
  plugins: encodeArray([]),
  lineWrap: true
};

function compress(string) {
  return LZString.compressToBase64(string)
    .replace(/\+/g, "-") // Convert '+' to '-'
    .replace(/\//g, "_") // Convert '/' to '_'
    .replace(/=+$/, ""); // Remove ending '='
}

function generate(code, {presets, plugins} = {}) {
  const config = Object.assign({}, defaults, {
    code_lz: compress(code)
  });

  return BASE_URL + "#?" + queryString.stringify(config);
}

module.exports = {
  generate
};

console.log(generate("function t() {}"));
