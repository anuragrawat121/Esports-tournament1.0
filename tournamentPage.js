

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
  gameName = localStorage.getItem("gameName");
  let bgmi = "BGMI";
  let freefire = "FREEFIRE";
  if (gameName == bgmi || gameName == freefire) {
    alert("Details submitted, Thankyou"); 
  } else
    alert(
      " Registration failed Game should be BGMI or FREEFIRE and write it in capital "
    );    
}
