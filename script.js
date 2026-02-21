function checkString() {
  let input = document.getElementById("userInput").value;

  if (input === "") {
    alert("Please enter a string");
    return;
  }

  let length = input.length;
  let upper = input.toUpperCase();
  let lower = input.toLowerCase();
  let capitalize = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  let firstChar = input.charAt(0);
  let lastChar = input.charAt(input.length - 1);
  let reverse = input.split("").reverse().join("");

  let alphabets = 0;

  for (let i = 0; i < input.length; i++) {
      let ch = input[i];

    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
          alphabets++;
      }
  }

  let resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
        <p><b>Length:</b> ${length}</p>
        <p><b>Uppercase:</b> ${upper}</p>
        <p><b>Lowercase:</b> ${lower}</p>
        <p><b>Capitalized:</b> ${capitalize}</p>
        <p><b>First Character:</b> ${firstChar}</p>
        <p><b>Last Character:</b> ${lastChar}</p>
        <p><b>Reversed String:</b> ${reverse}</p>
        <p><b>Number of Characters:</b> ${alphabets}</p>
    `;
}
