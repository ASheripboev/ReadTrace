document
  .getElementById("exploreProfilesBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default jump to the section
    document.querySelector("#profiles").scrollIntoView({
      behavior: "smooth",
    });
  });
