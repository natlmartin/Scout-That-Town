const moreInfoButton = document.querySelector(".givemoreinfo");

moreInfoButton.addEventListener("click", function () {
  prompt("To recieve more information, please enter your email address:");
  alert("Thank you! We'll send you some more information soon :)");
});
