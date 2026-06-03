function previewLabelScan(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("scanPreview");

  preview.innerHTML = "";

  if (!file) return;

  const image = document.createElement("img");
  image.src = URL.createObjectURL(file);

  preview.appendChild(image);
}

function fakeScanReader() {
  const fileInput = document.getElementById("labelScanner");
  const message = document.getElementById("scanMessage");

  if (!fileInput.files.length) {
    message.textContent =
      "Please upload a label image first.";
    return;
  }

  message.textContent =
    "Ingredient label uploaded successfully.";
}