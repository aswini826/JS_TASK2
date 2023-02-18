//Create submit button and output list
const submitButton = document.getElementById("submitButton");
const resultList = document.getElementById("resultList");
//set value of rangeFrom,rangeTo,divisibleValue
submitButton.addEventListener("click", () => {
  const rangeFrom = parseInt(document.getElementById("rangeFrom").value);
  const rangeTo = parseInt(document.getElementById("rangeTo").value);
  const divisibleValue = parseInt(document.getElementById("divisibleValue").value);
  resultList.innerHTML = "";
  //Divisible condition applied
  for (let i = rangeFrom; i <= rangeTo; i++) {
    if (i % divisibleValue === 0) {
      const li = document.createElement("li");
      li.textContent = i;
      resultList.appendChild(li);
    }
  }
});