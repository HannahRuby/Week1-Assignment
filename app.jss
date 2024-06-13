console.log("Hello There");

let loggedIn = false;

if (loggedIn) console.log("Welcome!");
else if ((logIn = false)) console.log("Please log in");

//theme

let themeAnswer = prompt("Do you prefer a white or black theme?");
if (themeAnswer === "white") {
  document.body.style.backgroundColor = themeAnswer;
} else if (themeAnswer === "black") {
  document.body.style.backgroundColor = themeAnswer;
}

const myCookieButton = document.querySelector("#acceptCookies");

myCookieButton.addEventListener("click", function () {
  console.log("cookie box disappears");
  document.getElementById("cookieBox").style.display = "none";
});
