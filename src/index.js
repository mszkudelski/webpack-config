import join from "lodash";
import './global.scss';
import { callMe } from "./aa";

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = join(["Hello", "webpack", "!"], " ");
  element.classList.add("element");
  return element;
}

window.addEventListener("load", () => {
  document.body.appendChild(component());
  callMe();
});
