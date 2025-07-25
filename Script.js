const form = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");
const copyBtn = document.getElementById("copyBtn");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = urlInput.value.trim();
  
  resultDiv.classList.add("hidden");
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    resultDiv.classList.remove("hidden");

    // Simulated logic for phishing detection
    if (url.includes("free-money") || url.includes("login-update") || url.includes("verify-now")) {
      resultText.textContent = "⚠️ Warning: This link appears suspicious and may be a phishing site!";
      resultText.style.color = "#ff7b72";
    } else {
      resultText.textContent = "✅ This link appears to be safe.";
      resultText.style.color = "#56d364";
    }
  }, 2000);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultText.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Result";
  }, 2000);
});
