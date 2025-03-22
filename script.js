document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    document.getElementById("successMessage").classList.remove("hidden");

});