const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNo");
const checkButton = document.querySelector("#check-Btn");
const result = document.querySelector("#output");

function clickHandlerCheck() {
  const Bdate = birthDate.Value;
  console.log(Bdate);
  const sum = calculateSum(Bdate);
  console.log(sum);
}

function calculateSum(Bdate) {
  var add = 0;
  var i;
  for (i = 0; i < Bdate.length; i++) {
    if (Bdate[i] !== "-") {
      add = add + Number(Bday.charAt(i));
      return add;
    }
  }
}

checkButton.addEventListener("click", clickHandlerCheck);
console.log(luckyNumber, result);
