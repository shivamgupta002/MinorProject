const allEmoji = document.querySelectorAll(".emoji");
const allStars = document.querySelectorAll(".star");

// allEmoji.forEach((emoji, emojiIndex) => {
//   emoji.style.transform = `translateX( ${emojiIndex * 3}rem)`;
// });

allStars.forEach((star, starIndex) => {
  star.addEventListener("click", () => {
    updataEmoji(starIndex);
  });
});
const updataEmoji = (starIndex) => {
  allEmoji.forEach((emoji) => {
    emoji.style.transform = `translateX(-${starIndex * 3.9}rem`;
  });
  allStars.forEach((star, emojiIndex) => {
    if (emojiIndex < starIndex + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
};
