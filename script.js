const header = document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Display the SweetAlert popup
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
});