console.log("ingredientAnalyzer.js connected");

function checkIngredients() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const results = document.getElementById("results");

  if (!results) {
    alert("Results section is missing in home.html");
    return;
  }

  results.innerHTML = "";

  if (input.trim() === "") {
    results.innerHTML = `
      <div class="breakdown-card">
        Please paste ingredients first.
      </div>
    `;
    return;
  }

  const database = {
    "glycerin": ["good", "Hydration", "Hydrates and attracts moisture."],
    "niacinamide": ["good", "Brightening", "Helps dark spots, oil control, and skin barrier."],
    "hyaluronic acid": ["good", "Hydration", "Deep hydration ingredient."],
    "aloe": ["caution", "Allergy Alert", "Can irritate people with aloe allergies."],
    "fragrance": ["caution", "Irritant", "May irritate sensitive skin."],
    "parfum": ["caution", "Irritant", "Another name for fragrance."],
    "alcohol denat": ["caution", "Drying", "Can dry out skin."],
    "coconut oil": ["avoid", "Pore-Clogging", "May clog pores for acne-prone skin."],
    "isopropyl myristate": ["avoid", "Pore-Clogging", "Common pore-clogging ingredient."]
  };

  const ingredients = input.split(",").map(item => item.trim()).filter(Boolean);

  let good = 0;
  let caution = 0;
  let avoid = 0;
  let unknown = 0;

  let rows = "";

  ingredients.forEach(ingredient => {
    let found = null;

    for (let key in database) {
      if (ingredient.includes(key)) {
        found = database[key];
        break;
      }
    }

    if (found) {
      if (found[0] === "good") good++;
      if (found[0] === "caution") caution++;
      if (found[0] === "avoid") avoid++;

      rows += `
        <tr>
          <td>${capitalizeWords(ingredient)}</td>
          <td><span class="status-pill ${found[0]}">${found[0].toUpperCase()}</span></td>
          <td>${found[1]}</td>
          <td>${found[2]}</td>
        </tr>
      `;
    } else {
      unknown++;

      rows += `
        <tr>
          <td>${capitalizeWords(ingredient)}</td>
          <td><span class="status-pill unknown">UNKNOWN</span></td>
          <td>Not in database</td>
          <td>No concern found in this beginner database.</td>
        </tr>
      `;
    }
  });

  let score = 100 - caution * 8 - avoid * 18 - unknown;
  if (score < 0) score = 0;

  results.innerHTML = `
    <div id="beautyScore">
      Skin Health Score: ${score}/100
      <br>
      <span>${getScoreMessage(score)}</span>
    </div>

    <div class="summary-grid">
      <div class="summary-box"><h3>${good}</h3><p>Good</p></div>
      <div class="summary-box"><h3>${caution}</h3><p>Caution</p></div>
      <div class="summary-box"><h3>${avoid}</h3><p>Avoid</p></div>
      <div class="summary-box"><h3>${unknown}</h3><p>Unknown</p></div>
    </div>

    <div class="breakdown-card">
      <h2>Ingredient Breakdown</h2>

      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Safety</th>
            <th>Category</th>
            <th>Benefit / Concern</th>
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;

  results.scrollIntoView({ behavior: "smooth" });
}

function getScoreMessage(score) {
  if (score >= 90) return "Excellent ingredient profile.";
  if (score >= 75) return "Good formula with a few things to review.";
  if (score >= 55) return "Mixed formula. Review carefully.";
  return "Several ingredients may be concerning.";
}

function capitalizeWords(text) {
  return text.replace(/\b\w/g, letter => letter.toUpperCase());
}

function clearText() {
  document.getElementById("ingredientInput").value = "";
  document.getElementById("results").innerHTML = "";
}