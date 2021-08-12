const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNo");
const checkButton = document.querySelector("#check-Btn");
const result = document.querySelector("#output");

function divisiblity(sum, luckyNumber) {
  //console.log(sum, luckyNumber);
  if (sum % luckyNumber === 0) {
    result.innerText = "Yay!!! Your Birthday is lucky.";
  } else {
    result.innerText = "Nay!!! Your birthday isn't that lucky.";
  }
}

function clickHandlerCheck() {
  const Bdate = birthDate.Value;
  console.log(Bdate);
  const sum = calculateSum(Bdate);
  console.log(sum);
  if (sum && Bdate) {
    divisiblity(sum, luckyNumber.Value);
  } else {
    result.innerText = "Enter values to continue";
  }
}

function calculateSum(Bdate) {
  Bdate = Bdate.replaceAll("-", "");
  var sum = 0;
  var i;
  for (i = 0; i < Bdate.length; i++) {
    sum = sum + Number(Bdate.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click", clickHandlerCheck);
console.log(luckyNumber, result);
