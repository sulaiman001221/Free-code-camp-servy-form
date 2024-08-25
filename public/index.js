document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("survey-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Send data using fetch with POST method
      fetch("http://localhost:3000/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Survey data saved successfully");
            // Show the success message
            successMessage.style.display = "flex";
          } else {
            console.error("Error saving data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill out all required fields.");
    }
  });

  document.getElementById("return").addEventListener("click", (event) => {
    event.preventDefault();
    successMessage.style.display = "none";
    form.reset();
  });
});
