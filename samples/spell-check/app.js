import * as autocorrect from "../../js/modules/autocorrect.js";

document.getElementById("btn").addEventListener("click", function () {
  autocorrect.correctInput(document.getElementById("input").value);
})