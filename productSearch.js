function topSearchProduct() {
  const product =
    document.getElementById("topProductSearch").value.trim();

  if (!product) {
    alert("Enter a product name.");
    return;
  }

  const encoded =
    encodeURIComponent(product);

  window.open(
    `https://www.google.com/search?q=${encoded}+ingredients`,
    "_blank"
  );
}

function searchStore(store) {

  const product =
    document.getElementById("productSearch").value.trim();

  if (!product) {
    alert("Enter a product name.");
    return;
  }

  const encoded =
    encodeURIComponent(product);

  let url = "";

  if (store === "sephora") {
    url =
      `https://www.sephora.com/search?keyword=${encoded}`;
  }

  if (store === "ulta") {
    url =
      `https://www.ulta.com/search?search=${encoded}`;
  }

  if (store === "target") {
    url =
      `https://www.target.com/s?searchTerm=${encoded}`;
  }

  window.open(url, "_blank");
}