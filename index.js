let numEl = document.getElementById("num-el");
let saveEl = document.getElementById("save-el")
count = 0;

function attendance(){
count += 1;
numEl.innerText = count;
}
function record(){
  saveEl.innerText += " " + count + " -"
  numEl.innerText = 0
  count = 0
}
