function analyzeURL() {
  const url = document.getElementById("urlInput").value.trim();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (!url) {
    alert("Please enter a URL to analyze.");
    return;
  }

  // Mock logic — this is where a real ML model or API call would go
  const isPhishing = url.includes("free-money") || url.includes("login-now") || url.includes("account-verification");

  resultBox.classList.remove("safe", "phishing", "hidden");

  if (isPhishing) {
    resultBox.classList.add("phishing");
    resultText.textContent = "⚠️ This URL appears suspicious. Proceed with caution!";
  } else {
    resultBox.classList.add("safe");
    resultText.textContent = "✅ This URL looks safe.";
  }
}
