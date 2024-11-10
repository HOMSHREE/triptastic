  // Banner script
  const places = ["India", "United States", "France", "Germany", "Australia", "Japan"];
  let placeIndex = 0;
  const placeNameElement = document.getElementById("place-name");

  setInterval(() => {
      placeIndex = (placeIndex + 1) % places.length;
      placeNameElement.textContent = "Visit " + places[placeIndex];
  }, 2000); 


//   bookingForm
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const destination = document.getElementById("destination").value;
    const persons = document.getElementById("persons").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;

    if (destination && persons && startDate && endDate && description.length >= 50) {
        alert("Booking successful!");
    } else {
        alert("Please fill out all fields properly.");
    }
});

// Popup
$(document).ready(function() {
    $("#login").hide();
    $("#register").hide();

    $("a[href='#login']").click(function(e) {
        e.preventDefault();
        $("#login").show();
    });

    $("a[href='#register']").click(function(e) {
        e.preventDefault();
        $("#register").show();
    });

    $(".close-modal").click(function() {
        $("#login, #register").hide();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.flex-container-popup, .auth-buttons a').length) {
            $("#login, #register").hide();
        }
    });
});

// Validation
function PopupValidation() {
    const form = document.forms['PopupValidFrom'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate email
    if (!emailRegex.test(form.txtMail.value)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password and confirm password (for registration)
    if (form.txtPass.value !== form.txtCPass.value) {
      alert('Passwords do not match.');
      return false;
    }
  
    // Additional validation as needed (e.g., password strength, name format)
  
    return true;
  }