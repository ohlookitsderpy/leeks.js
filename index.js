const d = require('./data.js');

/**Change the colour of the given text. (List: https://github.com/ohlookitsderpy/leeks.js/README.md)*/
let colors = [];
for (let c in d.colors) colors[c] = (t) => { return `\x1b[${d.colors[c]}m${t}\x1b[0m`; };

/**Change the style of the given text. (List: https://github.com/ohlookitsderpy/leeks.js/README.md)*/
let styles = [];
for (let s in d.styles) styles[s] = (t) => { return `\x1b[${d.styles[s]}m${t}\x1b[0m`; };

/**Check if colours are supported. (From https://github.com/jorgebucaran/colorette)*/
let supports = (process.env.FORCE_COLOR || process.platform === 'win32' || (process.stdout.isTTY && process.env.TERM && process.env.TERM !== 'dumb'));

/**Change the colour of the given text using 8-bit colours.*/
module.exports.eightBit = (i, t) =>  { return '\033[38;5;' + `${i}m${t}\x1b[0m`; }

/**Change the background colour of the given text using 8-bit colours.*/
module.exports.eightBitBg = (i, t) => { return '\033[48;5;' + `${i}m${t}\x1b[0m`; }

/**Change the colour of the given text using RGB.*/
module.exports.rgb = (r, g, b, t) => { return '\033[38;2;' + `${r};${g};${b}m${t}\x1b[0m`; }

/**Change the background colour of the given text using RGB.*/
module.exports.rgbBg = (r, g, b, t) => { return '\033[48;2;' + `${r};` + `${g};` + `${b}m${t}\x1b[0m`; }

module.exports.colors         = colors;
module.exports.colours        = colors;
module.exports.supportsColor  = supports;
module.exports.supportsColour = supports;
module.exports.styles         = styles;