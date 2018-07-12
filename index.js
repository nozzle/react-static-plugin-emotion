const { renderStylesToString } = require("emotion-server");

module.exports = {
  default: {
    // Tap into the HTML hook and use emotion-server
    // to critically inline the styles from the original
    // html into the a new html string
    html: html => renderStylesToString(html)
  }
};
