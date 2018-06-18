import * as _ from "lodash";
// import "./global.scss";
import { callMe } from "./aa";

function component() {
  var element: HTMLElement = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", "!"], " ");
  element.classList.add("element");
  return element;
}

window.addEventListener("load", () => {
  document.body.appendChild(component());
  callMe();
});
