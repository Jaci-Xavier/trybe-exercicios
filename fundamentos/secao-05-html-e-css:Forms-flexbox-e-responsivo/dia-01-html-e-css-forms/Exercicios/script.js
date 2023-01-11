function manualSubmit(event) {
  event.preventDefault();
}

window.onload = function() {
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', manualSubmit());
}