function analyzeURL() {
  const url = document.getElementById("urlInput").value;
  const resultText = document.getElementById("resultText");
  const resultBox = document.getElementById("resultBox");

  if (!url) {
    resultText.textContent = "Please enter a URL.";
    resultBox.classList.remove("hidden");
    return;
  }

  // Basic phishing heuristics
  let riskScore = 0;

  if (url.includes("@")) riskScore += 2;
  if (url.length > 75) riskScore += 1;
  if (url.match(/^http:\/\//)) riskScore += 1;
  if (url.match(/([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/)) riskScore += 2;

  let riskLevel = "";
  if (riskScore <= 1) {
    riskLevel = "✅ Safe (Low Risk)";
  } else if (riskScore <= 3) {
    riskLevel = "⚠️ Suspicious (Medium Risk)";
  } else {
    riskLevel = "🚨 Dangerous (High Risk)";
  }

  resultText.textContent = `Analysis: ${riskLevel}`;
  resultBox.classList.remove("hidden");
}
