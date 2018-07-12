const { renderStylesToString } = require("emotion-server");

module.exports = {
  // Tap into the beforeHtmlToDocument hook and use emotion-server
  // to critically inline the styles from the original
  // html into the a new html string
  beforeHtmlToDocument: html => renderStylesToString(html)
};
