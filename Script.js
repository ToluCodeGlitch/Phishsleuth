function analyzePhish() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const redFlags = ["verify", "urgent", "login", "update", "password", "win", "click", "bank", "suspend"];
  const suspiciousLinks = /(bit\.ly|tinyurl|freegift|\.tk|\.ml|\.ga)/;

  let score = 0;
  let feedback = [];

  redFlags.forEach(word => {
    if (input.includes(word)) {
      score += 1;
      feedback.push(`⚠️ Found suspicious word: "${word}"`);
    }
  });

  if (suspiciousLinks.test(input)) {
    score += 2;
    feedback.push("⚠️ Link looks suspicious or shortened.");
  }

  if (score > 2) {
    resultDiv.innerHTML = `
      <p><strong>🔴 This message is highly suspicious!</strong></p>
      <ul>${feedback.map(f => `<li>${f}</li>`).join("")}</ul>
    `;
  } else if (score > 0) {
    resultDiv.innerHTML = `
      <p><strong>🟠 Warning: Potential risk detected.</strong></p>
      <ul>${feedback.map(f => `<li>${f}</li>`).join("")}</ul>
    `;
  } else {
    resultDiv.innerHTML = `<p><strong>🟢 No phishing signs detected. Still, stay cautious.</strong></p>`;
  }

  // Save to local storage
  let history = JSON.parse(localStorage.getItem("phishHistory")) || [];
  history.push({ input, result: resultDiv.innerText });
  localStorage.setItem("phishHistory", JSON.stringify(history));
}
