console.log("LegitiRank-AI: Initializing...");

// Load the user's preference before running anything
chrome.storage.sync.get(["showTrustScores"], (data) => {
  const showTrustScores = data.showTrustScores ?? true;

  if (!showTrustScores) {
    console.log("LegitiRank-AI: Trust Score display is disabled by user.");
    return;
  }

  injectTrustScores();
});

// Function that adds trust score badges
function injectTrustScores() {
  console.log("LegitiRank-AI: Injecting Trust Score badges...");

  const results = document.querySelectorAll('div.g');

  results.forEach((result, index) => {
    const link = result.querySelector('a')?.href;
    const container = result.querySelector('h3')?.parentElement;

    if (!container || !link) return;

    // Avoid injecting a second time
    if (container.querySelector(".legitirank-badge")) return;

    const badge = document.createElement('span');
    badge.innerText = "🔍 Trust Score: --";
    badge.className = "legitirank-badge";
    badge.style.fontSize = '0.75rem';
    badge.style.marginLeft = '8px';
    badge.style.color = '#888';
    badge.style.fontStyle = 'italic';

    container.appendChild(badge);
  });
}
