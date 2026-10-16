emailjs.init({
  publicKey: "MEu4Hx_GKlOUysMB7"
});

async function clearForm() {
  const textareas = document.querySelectorAll("textarea");

  // Collect all textarea data before clearing
  const formData = {};

  textareas.forEach((textarea, index) => {
    formData[`textarea${index + 1}`] = textarea.value;
  });

  try {
    await emailjs.send(
        "service_f2q7zib",
        "template_ydqaukh",
        {
          message: Object.entries(formData)
              .map(([name, value]) => `${name}:\n${value}`)
              .join("\n\n")
        }
    );

    // Clear only after the email is sent successfully
    textareas.forEach(textarea => {
      textarea.value = "";
    });

    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Email failed:", error);
    alert("Failed to send. Your form data has not been cleared.");
  }
}