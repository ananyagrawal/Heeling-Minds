var links = document.querySelectorAll(".types_name");

links.forEach((l) => {
  l.addEventListener("click", () => {
    l.classList.toggle("active");
    document.querySelector(".art-2").classList.toggle("hidden");
    links.forEach((same) => {
      if (same != l) {
        same.classList.remove("active");
      }
    });
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
