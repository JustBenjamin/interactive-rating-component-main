let rateValue = 0


function number(digit) {
switch(digit) {
  case 1:
  rateValue = 1;
  break;
  case 2:
  rateValue = 2;
  break;
  case 3:
  rateValue = 3;
  break;
  case 4:
  rateValue = 4;
  break;
  default:
  rateValue = 5;

}
 
}



function rate() {
  document.getElementById("prompt").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("result").innerHTML = `<span class="statement">You selected ${rateValue} out of 5</span>`

    console.log("working")
}
