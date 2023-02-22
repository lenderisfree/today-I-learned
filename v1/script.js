const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

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

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://tbcjymgqgaupyrfcdsqg.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiY2p5bWdxZ2F1cHlyZmNkc3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MTI1ODMsImV4cCI6MTk5MTI4ODU4M30.qPJh7-AQxU3EG-s8DUb6S1o6MaDMgmuHtXJat39HD_U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiY2p5bWdxZ2F1cHlyZmNkc3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MTI1ODMsImV4cCI6MTk5MTI4ODU4M30.qPJh7-AQxU3EG-s8DUb6S1o6MaDMgmuHtXJat39HD_U",
      },
    }
  );
  const data = await res.json();
  //console.log(data)
 // const filteredData = data.filter ((fact) => fact.category === 'technology');


  createFactsList(data)
}



function createFactsList(dataArray) {
  //factsList.insertAdjacentHTML("afterbegin", "<li>ALEX</li>");
  //;

  const htmlArr = dataArray.map(
    (fact) => ` <li class="fact">
  <p>
   ${fact.text}
    <a
    class="source"
    href="${fact.source}"
    target="_blank"
    >(Source)</a
    >
  </p>
   <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
   }
   ">${fact.category}</span
   >
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle from visibility
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

console.log([6, 64, 6, -23, 11].filter((el) => el > 10));

console.log([6, 64, 6, -23, 11].find((el) => el > 10));

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
console.log(times10) 



const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);*/
