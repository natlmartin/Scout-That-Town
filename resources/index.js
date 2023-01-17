// Return random city

function randomCity() {
  alert(`Let's go to ${chooseTown}!`);
}

var randomTowns = ["London", "Madrid", "Paris"];
var chooseTown = randomTowns[Math.floor(Math.random() * randomTowns.length)];

// Return user name & city choice

function addP() {
  var nameValue = document.getElementById("userName").value;
  var cityValue = document.getElementById("userCity").value;

  let newMessage = document.getElementById("userMessage");
  newMessage.innerHTML += `Thanks for joining ${nameValue}, we look forward to exploring ${cityValue} with you!`;
}

// Like our page
const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", function () {
  likeButton.textContent = "Liked!";
  likeButton.style.backgroundColor = "#8ed2c9";
});
