function getGoalRecommendations(goals) {
  let recommendations = [];

  goals.forEach(goal => {
    if (goal === "acne") {
      recommendations.push("For acne, look for salicylic acid, niacinamide, azelaic acid, and non-comedogenic formulas.");
    }

    if (goal === "dark-spots") {
      recommendations.push("For dark spots, look for niacinamide, vitamin C, azelaic acid, and daily sunscreen.");
    }

    if (goal === "hydration") {
      recommendations.push("For hydration, look for glycerin, hyaluronic acid, ceramides, and panthenol.");
    }

    if (goal === "anti-aging") {
      recommendations.push("For anti-aging, look for retinol, peptides, antioxidants, and sunscreen.");
    }

    if (goal === "redness") {
      recommendations.push("For redness, look for centella, green tea, panthenol, and fragrance-free formulas.");
    }

    if (goal === "texture") {
      recommendations.push("For texture, look for gentle exfoliants like salicylic acid, lactic acid, or retinoids.");
    }
  });

  return recommendations;
}