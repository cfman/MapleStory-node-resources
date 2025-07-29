/**
 * Use Pug template engine to render HTML
 *
 * [Pug Documentation](https://pugjs.org)
 *
 * @param {string} mod template string
 * @param {*} args options
 */
function render(mod, ...args) {
  return document.write(require('pug').render(mod, ...args));
}

/**
 * macOS copy to clipboard
 *
 * @param {string} str
 */
function pbcopy(str) {let copy = require('child_process').spawn('pbcopy');copy.stdin.write(str.toString());copy.stdin.end()};

module.exports = { render, pbcopy };
