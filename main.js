let ratingBtns = document.querySelectorAll(".rating div");
let submitBtn = document.querySelector("button");
let ratingSection = document.querySelector(".rating-section");
let rating = 0;
ratingBtns.forEach((btn) => {
  btn.onclick = () => {
    ratingBtns.forEach((x) => {
      x.classList.add("inactive");
      x.classList.remove("active");
    });
    btn.classList.add("active");
    btn.classList.remove("inactive");
    rating = +btn.textContent;
    console.log(rating);
  };
});
let selectedRating = document.querySelector(".selected-rating");
let thankYouSection = document.querySelector(".thank-you");
submitBtn.onclick = () => {
  if (rating) {
    selectedRating.innerHTML = `Your selected ${rating} out of 5`;
    ratingSection.style.opacity = 0;
    thankYouSection.style.display = "flex";
    setTimeout(() => (thankYouSection.style.opacity = 1), 1);
  }
};
