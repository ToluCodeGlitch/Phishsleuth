function analyzeURL() {
  const url = document.getElementById("urlInput").value.trim();
  const resultText = document.getElementById("resultText");
  const resultBox = document.getElementById("resultBox");

  if (!url) {
    resultText.innerText = "⚠️ Please enter a URL.";
    resultBox.style.display = "block";
    return;
  }

  // Simulated threat checks (not real scanning)
  const suspiciousPatterns = [
    "bit.ly", "tinyurl", "free-", "login.php", "@", "verify", "update", "secure", "account"
  ];

  const lowerURL = url.toLowerCase();
  let suspicious = suspiciousPatterns.some(pattern => lowerURL.includes(pattern));

  if (suspicious) {
    resultText.innerText = `🚨 This URL shows signs of being suspicious. Proceed with caution.`;
  } else {
    resultText.innerText = `✅ This URL appears safe, but always verify before clicking.`;
  }

  resultBox.style.display = "block";
}
