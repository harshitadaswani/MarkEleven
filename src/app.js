//Checking Javascript
console.log("script is working");

//Referencing elements
const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNo");
const checkButton = document.querySelector("#check-Btn");
const result = document.querySelector("#output");
var closeBtn = document.querySelector("#close-btn");
var privacyNoticeBox = document.querySelector("#policy-card");

//Checking whether bday is lucky or not
function divisiblity(sum, luckyNumber) {
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

//Executing function when check button is clicked
function clickHandlerCheck() {
  hideError();
  const Bdate = birthDate.value;
  const sum = calculateSum(Bdate);

  if (luckyNumber.value > 1 && Bdate) {
    divisiblity(sum, luckyNumber.value);
  } else if (!Bdate) {
    showError("Enter valid Birthday to continue");
  } else if (!luckyNumber.value) {
    showError("Enter valid lucky number to continue");
  } else {
    showError("Enter valid values to continue");
  }
}

function closeHandler() {
  privacyNoticeBox.style.display = "none";
}

closeBtn.addEventListener("click", closeHandler);
checkButton.addEventListener("click", clickHandlerCheck);

function showError(text) {
  result.style.display = "block";
  result.innerText = text;
}

function hideError() {
  result.style.display = "none";
}
