function submitForm() {
  // Retrieving data

  let ingameName = document.getElementById("ingame-name").value;
  let emailId = document.getElementById("Email-id").value;
  let gameName = document.getElementById("game_name").value;

  // storing data
  ingameName = localStorage.setItem("ingameName", ingameName);
  emailId = localStorage.setItem("emailId", emailId);
  gameName = localStorage.setItem("gameName", gameName);

  // Retrieving stored data using it for checking game name
  alert("Details submitted, Thankyou");
}

function popupForm() {
  document.getElementById("container").style.display = "block";
}

function closeForm() {
  document.getElementById("container").style.display = "none";
}
