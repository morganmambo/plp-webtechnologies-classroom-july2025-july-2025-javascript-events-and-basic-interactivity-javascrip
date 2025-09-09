// ================================
// Event 1: Change Background Color
// ================================

// Select the button and add an event listener
document.getElementById("changeColorBtn").addEventListener("click", function () {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Apply the color to body background
  document.body.style.backgroundColor = randomColor;
});

// ===================================
// Event 2: Live Character Counter
// ===================================

// Select textarea and counter
const messageBox = document.getElementById("messageBox");
const charCount = document.getElementById("charCount");

// Update character count on input
messageBox.addEventListener("input", function () {
  charCount.textContent = "Characters: " + messageBox.value.length;
});

// ===================================
// Custom Form Validation
// ===================================

// Select form and message container
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent normal submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate fields manually
  if (name.length < 3) {
    formMessage.textContent = "❌ Name must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // Simple email pattern validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Password must be at least 6 characters
  if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If all validations pass
  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";

  // Optionally clear form
  form.reset();
  charCount.textContent = "Characters: 0";
});
