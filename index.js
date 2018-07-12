import { renderStylesToString } from "emotion-server";

export default {
  // Tap into the HTML export and use emotion-server
  // to critically inline the styles into the html string
  tapHtml: html => renderStylesToString(html)
};
