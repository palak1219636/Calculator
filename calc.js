console.log("javascript loaded");

function getinput(input) {
  console.log(input);
  document.getElementById("input").value += input;
  console.log(result);
}
function setData(input) {
  document.getElementById("input").value = input;
}
function calcResult() {
  if (document.getElementById("input").value.charAt(0) == 0) {
    parseFloat(document.getElementById("input").value);
  }
  setData(eval(document.getElementById("input").value));
}
function deletelast() {
  setData(
    document
      .getElementById("input")
      .value.substr(0, document.getElementById("input").value.length - 1)
  );
}
function change() {
  setData(-document.getElementById("input").value);
}
