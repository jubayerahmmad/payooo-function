//* add money
document.getElementById("add-money").addEventListener("click", function () {
  showSection("add-money-form");
});
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const addMoney = getInputValue("input-add-money");
    const pinNumber = getInputValue("add-pin-number");
    const currentBalance = getTextValue("current-balance");

    if (pinNumber == "1234") {
      const newBalance = addMoney + currentBalance;
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Invalid PIN");
    }
  });

//* cash out
document.getElementById("cash-out").addEventListener("click", function () {
  showSection("cash-out-form");
});

document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();

  const cashOut = getInputValue("input-cash-out");
  const pinNumber = getInputValue("cash-pin-number");
  const currentBalance = getTextValue("current-balance");

  if (pinNumber == "1234") {
    if (cashOut <= currentBalance) {
      const newBalance = currentBalance - cashOut;
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Insufficient Balance");
    }
  } else {
    alert("Invalid PIN");
  }
});

//* get bonus
document.getElementById("get-bonus").addEventListener("click", function () {
  showSection("get-bonus-form");
});

document
  .getElementById("btn-get-bonus")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bonusCode = getInputValue("bonus-pin-number");
    if (bonusCode == "1212") {
      alert("Congratulations you got a bonus!");
    } else {
      alert("Invalid Coupon");
    }
  });
