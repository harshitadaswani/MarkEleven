//Checking Javascript
console.log("script is working");

//Referencing elements
const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNo");
//const nextButton = document.querySelector("#next-Btn");
const checkButton = document.querySelector("#check-Btn");
const result = document.querySelector("#output");
/* const birthDateNotValidDiv = document.querySelector("#bday-not-valid");
const luckyNumberDiv = document.querySelector(".lucky-no-hidden");
var errorOutputDiv = document.querySelector("#error-output"); */

//Checking whether bday is lucky or not
function divisiblity(sum, luckyNumber) {
  //console.log(sum, luckyNumber);
  if (sum % luckyNumber === 0) {
    showError("Yay!!! Your Birthday is lucky. :)");
  } else {
    showError("Nay!!! Your birthday isn't that lucky. :(");
  }
}

//Calculating sum of the digits of bday
function calculateSum(Bdate) {
  Bdate = Bdate.replaceAll("-", "");
  var sum = 0;
  var i;
  for (i = 0; i < Bdate.length; i++) {
    sum = sum + Number(Bdate.charAt(i));
  }
  return sum;
}

/*function clickHandlerNext() {
  if (birthDate.value === 0) {
    birthDateNotValidDiv.innerText = "Enter valid Birthday";
  } else {
    luckyNumberDiv.classList.remove("hidden");
    birthDateNotValidDiv.classList.add("hidden");
  }
}*/

//Executing function when check button is clicked
function clickHandlerCheck() {
  hideError();
  const Bdate = birthDate.value;
  //console.log(Bdate);
  const sum = calculateSum(Bdate);
  //console.log(sum);

  if (luckyNumber.value && Bdate) {
    divisiblity(sum, luckyNumber.value);
  } //else if (Number(luckyNumber.value) > 0) {
  //showError("Enter lucky number to continue");}
  else if (!Bdate) {
    showError("Enter valid Birthday to continue");
  } else if (!luckyNumber.value) {
    showError("Enter valid lucky number to continue");
  } //else {
  //showError("Enter both values to continue");
  //}
}

//Calling function when check button is clicked
/*nextButton.addEventListener("click", () => {
  hideError();
  if (Number(birthDate.value) > 0) {
    nextButton.style.display = "none";
    luckyNumber.style.display = "block";
  } else {
    showError("Enter valid birthday");
  }
});
nextButton.addEventListener("click", clickHandlerNext);*/

checkButton.addEventListener("click", clickHandlerCheck);
//console.log(luckyNumber, result);

function showError(text) {
  result.style.display = "block";
  result.innerText = text;
  //luckyNumberDiv.style.display = "none";
}

function hideError() {
  result.style.display = "none";
}
