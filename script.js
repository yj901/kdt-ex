const circle = document.querySelector("#circle");
console.log(circle);

const articles = circle.querySelectorAll("article");
console.log(articles);

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
