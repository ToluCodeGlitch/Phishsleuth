function analyzeURL() {
  const url = document.getElementById("urlInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!url) {
    resultBox.innerHTML = "❌ Please enter a URL.";
    resultBox.style.borderLeftColor = "#ff5252";
    resultBox.classList.remove("hidden");
    return;
  }

  let warning = "";

  if (url.length > 75) {
    warning += "⚠️ The URL is quite long. Phishing links are often long to hide malicious paths.<br/>";
  }

  if (url.includes("@")) {
    warning += "⚠️ URLs containing '@' symbols can redirect users deceptively.<br/>";
  }

  if (url.split('.').length > 4) {
    warning += "⚠️ The domain has many subdomains — this is suspicious.<br/>";
  }

  if (/(login|verify|secure|update)/i.test(url)) {
    warning += "⚠️ Words like 'login', 'verify', 'secure', or 'update' are common in phishing links.<br/>";
  }

  if (!url.startsWith("https://")) {
    warning += "⚠️ The URL is not secure (HTTPS missing).<br/>";
  }

  if (!warning) {
    resultBox.innerHTML = "✅ This URL looks safe based on basic checks.";
    resultBox.style.borderLeftColor = "#4caf50";
  } else {
    resultBox.innerHTML = warning;
    resultBox.style.borderLeftColor = "#f44336";
  }

  resultBox.classList.remove("hidden");
}
