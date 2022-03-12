const clicks = document.querySelectorAll("[data-carousel-button]");

clicks.forEach((element) => {
  element.addEventListener("click", () => {
    const slides = document.getElementsByClassName("hi");
    const viewIndex = [...slides];
    const clickIndex = [...clicks].indexOf(element);
    slides[clickIndex].classList.toggle("hidden");
  });
});
