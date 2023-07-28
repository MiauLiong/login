function showTangan() {
  var passwordInput = document.getElementById("password");
  var tanganKiri = document.querySelector(".tangan-kiri");
  var tanganKanan = document.querySelector(".tangan-kanan");

  // Tampilkan elemen .tangan-kiri dan .tangan-kanan ketika input password aktif
  tanganKiri.style.display = "block";
  tanganKanan.style.display = "block";
}

function hideTangan() {
  var passwordInput = document.getElementById("password");
  var tanganKiri = document.querySelector(".tangan-kiri");
  var tanganKanan = document.querySelector(".tangan-kanan");

  // Sembunyikan elemen .tangan-kiri dan .tangan-kanan ketika input password tidak aktif
  tanganKiri.style.display = "none";
  tanganKanan.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  var showButton = document.querySelector(".show");
  var hideButton = document.querySelector(".hide");
  var passwordInput = document.getElementById("password");

  showButton.addEventListener("click", function () {
    // Ubah type input text menjadi password
    passwordInput.type = "password";
    hideButton.style.display = "inline"; // Tampilkan tombol hide
    showButton.style.display = "none"; // Sembunyikan tombol show
  });

  hideButton.addEventListener("click", function () {
    // Ubah type input password menjadi text
    passwordInput.type = "text";
    showButton.style.display = "inline"; // Tampilkan tombol show
    hideButton.style.display = "none"; // Sembunyikan tombol hide
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var showButton = document.querySelector(".show");
  var hideButton = document.querySelector(".hide");
  var passwordInput = document.getElementById("password");

  showButton.style.display = "none"; // Mulai dengan menyembunyikan tombol show

  hideButton.addEventListener("click", function () {
    // Ubah type input password menjadi text
    passwordInput.type = "text";
    showButton.style.display = "inline"; // Tampilkan tombol show
    hideButton.style.display = "none"; // Sembunyikan tombol hide
  });

  showButton.addEventListener("click", function () {
    // Ubah type input text menjadi password
    passwordInput.type = "password";
    hideButton.style.display = "inline"; // Tampilkan tombol hide
    showButton.style.display = "none"; // Sembunyikan tombol show
  });
});
