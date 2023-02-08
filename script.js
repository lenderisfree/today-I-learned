const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener(
  "click",
  (hidden = () => {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
    }
  })
);

let votesInteresting = 23;
let votesMindblowing = 5;

votesInteresting = votesInteresting ++;

let totalUpvotes = votesInteresting + votesInteresting;

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;