const userInput = document.getElementById("user-input");
const finalResult = document.getElementById("final-result");

const checkPalindrome = (string) => {
	processedString = string.toLowerCase().replace(/\s/g, "");

	if (string == "") {
		finalResult.style.display = "none";
	} else if (processedString.split("").reverse().join("") == processedString) {
		finalResult.style.display = "block";
		finalResult.style.background = "#4BB543";
		finalResult.textContent = "The word/phrase is a palindrome";
	} else {
		finalResult.style.display = "block";
		finalResult.style.background = "#E74042";
		finalResult.textContent = "The word/phrase is not a palindrome";
	}
};

userInput.addEventListener("keyup", () => {
	checkPalindrome(userInput.value);
});
