function clearForm() {
  const textareas = document.querySelectorAll("textarea");
  for (const textarea of textareas) {
    textarea.value = '';
  }
}