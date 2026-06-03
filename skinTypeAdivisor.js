function getSkinTypeMessages(skinTypes, cautionCount, avoidCount) {
  if (skinTypes.length === 0) {
    return "No skin type selected. Choose one or more skin types for personalized advice.";
  }

  let messages = [];

  skinTypes.forEach(skinType => {
    if (skinType === "oily") {
      messages.push("Oily skin usually does best with lightweight formulas and fewer heavy oils.");
    }

    if (skinType === "dry") {
      messages.push("Dry skin benefits from hydrating and barrier-supporting ingredients like glycerin, hyaluronic acid, ceramides, and panthenol.");
    }

    if (skinType === "sensitive") {
      if (cautionCount > 0 || avoidCount > 0) {
        messages.push("Sensitive skin should watch for fragrance, drying alcohols, essential oils, and strong active ingredients.");
      } else {
        messages.push("This formula appears gentle for sensitive skin based on the current database.");
      }
    }

    if (skinType === "acne-prone") {
      if (avoidCount > 0) {
        messages.push("Acne-prone skin should be careful with pore-clogging ingredients found in this formula.");
      } else {
        messages.push("This formula looks fairly acne-friendly based on the current database.");
      }
    }

    if (skinType === "combination") {
      messages.push("Combination skin benefits from balanced hydration without being too heavy or too drying.");
    }

    if (skinType === "normal") {
      messages.push("Normal skin can tolerate more formulas, but avoiding irritants is still helpful.");
    }
  });

  return messages.join(" ");
}