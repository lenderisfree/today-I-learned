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

/* let votesInteresting = 23;
let votesMindblowing = 5;

votesInteresting = votesInteresting ++;

let totalUpvotes = votesInteresting + votesInteresting;

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes; */

/* [2, 4, 6, 8].forEach(function (el){
  console.log(el);
});
 */
/* const times10 = [2, 4, 6, 8].map(function (el){
  return el * 10;
}); */

/* const times10 = [2, 4, 6, 8].map((el) => el * 10 );
console.log(times10) */

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);
