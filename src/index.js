import "./index.css";
const { render } = wp.element;

import App from "./App";
if (document.getElementById("react-sandbox-plugin")) {
  //check if element exists before rendering
  render(<App />, document.getElementById("react-sandbox-plugin"));
}
