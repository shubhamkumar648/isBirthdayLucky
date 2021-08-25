//1 get the input  element from html

const luckyNumber = document.querySelector("#lucky-No");
const dateOfBirth = document.querySelector("#date-of-birth");
const checkBtn = document.querySelector("#check-Button");
const textDisplay = document.querySelector("#textDisplay");

// 3.creating funtion and give check weather no is lucky or not
const CompareValues = (sum, luckyNumber) => {
  console.log(sum, luckyNumber);
  if (sum % luckyNumber === 0) {
    textDisplay.innerText = "wohoo your b'day is lucky😊";
  } else {
    textDisplay.innerText = "opps you are not lucky😥";
  }
};

//2.create funtion to add sum of dob number using loop
const calculateSum = (dob) => {
  let dobs = dob.replaceAll("-", "");
  let sum = 0;

  //   for (let i = 0; i < dobs.length; i++) {
  //     sum = sum + Number(dobs.charAt(i));
  //   }

  // II. alternate way of for loop using (of)
  for (let valueDb of dobs) {
    sum = sum + Number(valueDb);
  }

  return sum;
};

const checkBirthdateIslucky = () => {
  //1.1 display value of dob using eventlistener the value is trigerd after click
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (sum && dob) {
    CompareValues(sum, luckyNumber.value);
  } else {
    textDisplay.innerText = "please enter both input value";
  }
  // console.log(sum);
};

checkBtn.addEventListener("click", checkBirthdateIslucky);
